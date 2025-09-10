import os
import psycopg2
from flask import Flask, request, jsonify, session
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash

def pegar_conexao():
    return psycopg2.connect(
        dbname="bazar_biodegradavel",
        user="testador",
        password="12345678",
        host="localhost",
        port="5432"
    )

app = Flask(__name__)
app.config["SECRET_KEY"] = "77507750"
CORS(app, origins=["http://localhost:5173"], supports_credentials=True)

UPLOAD_FOLDER = "static/uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


CARBON_WEIGHTS = {
    "eletronicos": 30.0,
    "moveis": 70.0,
    "livros": 1.7,
    "roupas": 4.0,
    "outros": 2.0
}



@app.route("/usuarios", methods=["POST"])
def cadastrar_usuario():
    nome = request.form.get("nome")
    email = request.form.get("email")
    senha = generate_password_hash(request.form.get("senha"))
    localizacao = request.form.get("localizacao")
    cpf = request.form.get("cpf")
    endereco = request.form.get("endereco")
    numero = request.form.get("numero")
    complemento = request.form.get("complemento")
    bairro = request.form.get("bairro")
    CEP = request.form.get("CEP")
    cidade = request.form.get("cidade")
    estado = request.form.get("estado")

    conn = pegar_conexao()
    cur = conn.cursor()
    try:
        cur.execute(
            """INSERT INTO usuarios (nome, email, senha, localizacao, cpf , endereco, numero, complemento, bairro, CEP, cidade, estado)
               VALUES (%s, %s, %s, %s, %s) RETURNING id""",
            (nome, email, senha, localizacao, cpf)
        )
        usuario_id = cur.fetchone()[0]
        conn.commit()

        return jsonify({"id": usuario_id, "nome": nome, "email": email}), 201
    except Exception as e:
        conn.rollback()
        return jsonify({"error": str(e)}), 400
    finally:
        cur.close()
        conn.close()

        

@app.route("/login", methods=["POST"])
def login():
    data = request.json
    email = data.get("email")
    senha = data.get("senha")

    conn = pegar_conexao()
    cur = conn.cursor()
    cur.execute("SELECT id, senha FROM usuarios WHERE email=%s", (email,))
    user = cur.fetchone()
    cur.close()
    conn.close()

    if not user or not check_password_hash(user[1], senha):
        return jsonify({"error": "dados errados"}), 401

    session["user_id"] = user[0]
    return jsonify({"message": "logado", "id": user[0]})

@app.route("/produtos", methods=["GET"])
def pegar_todos():
    conn = pegar_conexao()
    cur = conn.cursor()
    cur.execute("""
        SELECT id, nome, categoria, condicao, preco, descricao, localizacao, foto_url, COALESCE(carbono,0)
        FROM produtos
        ORDER BY id DESC
    """)
    linhas = cur.fetchall()
    cur.close()
    conn.close()

    produtos = []
    for l in linhas:
        produtos.append({
            "id": l[0],
            "nome": l[1],
            "categoria": l[2],
            "condicao": l[3],
            "preco": float(l[4]) if l[4] is not None else None,
            "descricao": l[5],
            "localizacao": l[6],
            "foto_url": l[7],
            "carbono": float(l[8])
        })
    return jsonify({"produto": produtos})


@app.route("/carrinho", methods=["POST"])
def adicionar_carrinho():
    if "user_id" not in session:
        return jsonify({"error": "logue primeiro"}), 401

    data = request.json
    produto_id = data.get("produto_id")
    quantidade = data.get("quantidade", 1)

    conn = pegar_conexao()
    cur = conn.cursor()

    cur.execute(
        """ INSERT INTO carrinho (usuario_id, produto_id, quantidade)
        VALUES (%s, %s, %s)
        ON CONFLICT (usuario_id, produto_id) DO UPDATE
        SET quantidade = carrinho.quantidade + %s""",
     (session["user_id"], produto_id, quantidade, quantidade))

    conn.commit()
    cur.close()
    conn.close()
    return jsonify({"message": "produto adicionado ao carrinho"})

@app.route("/carrinho", methods=["GET"])
def ver_carrinho():
    if "user_id" not in session:
        return jsonify({"error": "voce nao esta logado"}), 401

    conn = pegar_conexao()
    cur = conn.cursor()
    cur.execute(
        """ SELECT c.id, p.id, p.nome, p.preco, c.quantidade, p.foto_url, COALESCE(p.carbono,0)
            FROM carrinho c
            JOIN produtos p ON c.produto_id = p.id
            WHERE c.usuario_id = %s """,
        (session["user_id"],)
    )

    items = cur.fetchall()
    cur.close()
    conn.close()

    carrinho = []
    total_carbon = 0.0
    total_price = 0.0

    for i in items:
        item_carbon_per_unit = float(i[6])
        item_quantity = int(i[4])
        item_total_carbon = item_carbon_per_unit * item_quantity
        total_carbon += item_total_carbon
        item_price = float(i[3]) if i[3] is not None else 0.0
        total_price += item_price * item_quantity

        carrinho.append({
            "carrinho_id": i[0],
            "produto_id": i[1],
            "nome": i[2],
            "preco": item_price,
            "quantidade": item_quantity,
            "foto": i[5],
            "carbono_por_unidade": item_carbon_per_unit,
            "carbono_total_item": item_total_carbon
        })

    return jsonify({
        "carrinho": carrinho,
        "total_carbon_saved": total_carbon,
        "total_price": total_price
    })


@app.route("/produtos", methods=["POST"])
def adicionar_produto():
    nome = request.form.get("nome")
    categoria = (request.form.get("categoria") or "").strip().lower()
    condicao = request.form.get("condicao")
    preco = request.form.get("preco")
    descricao = request.form.get("descricao")
    localizacao = request.form.get("localizacao")

    fotos = request.files.getlist("fotos")
    foto_urls = []
    for foto in fotos:
        if foto:
            filename = foto.filename
            caminho = os.path.join(UPLOAD_FOLDER, filename)
            foto.save(caminho)
            foto_urls.append(f"static/uploads/{filename}")
    foto_url = foto_urls[0] if foto_urls else None


    carbono_val = float(CARBON_WEIGHTS.get(categoria, CARBON_WEIGHTS["outros"]))

    conn = pegar_conexao()
    cur = conn.cursor()
    try:
        cur.execute(
            """INSERT INTO produtos (nome, categoria, condicao, preco, descricao, localizacao, foto_url, carbono)
               VALUES (%s, %s, %s, %s, %s, %s, %s, %s) RETURNING id""",
            (nome, categoria, condicao, preco, descricao, localizacao, foto_url, carbono_val)
        )
        produto_id = cur.fetchone()[0]
        conn.commit()
        return jsonify({
            "id": produto_id,
            "nome": nome,
            "categoria": categoria,
            "carbono": carbono_val,
            "foto_url": foto_url,
            "all_fotos": foto_urls
        }), 201
    except Exception as e:
        conn.rollback()
        return jsonify({"error": str(e)}), 400
    finally:
        cur.close()
        conn.close()

@app.route("/impacto", methods=["GET"])
def impacto():
    conn = pegar_conexao()
    cur = conn.cursor()
    cur.execute("SELECT COALESCE(SUM(carbono),0), COUNT(*) FROM produtos;")
    total_carbon, total_items = cur.fetchone()
    cur.close()
    conn.close()

    return jsonify({
        "total_carbon_saved": float(total_carbon),
        "total_items_reaproveitados": int(total_items)
    })


@app.route("/carrinho/<int:carrinho_id>", methods=["DELETE"])
def remover_carrinho(carrinho_id):
    if "user_id" not in session:
        return jsonify({"error": "voce nao esta logado"}), 401

    conn = pegar_conexao()
    cur = conn.cursor()
    try:
        cur.execute(
            "DELETE FROM carrinho WHERE id = %s AND usuario_id = %s",
            (carrinho_id, session["user_id"])
        )

        conn.commit()
        return jsonify({"message": "item removido"})
    except Exception as e:
        conn.rollback()
        return jsonify({"error": str(e)}), 400
    finally:
        cur.close()
        conn.close()


if __name__ == "__main__":
    app.run(debug=True)
