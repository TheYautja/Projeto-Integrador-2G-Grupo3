import os
import psycopg2
from flask import Flask, request, jsonify, session
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash

def pegar_conexao():
    return psycopg2.connect(dbname="bazar_biodegradavel", user="postgres", password="77507750", host="localhost", port="5432")

app = Flask(__name__)
app.config["SECRET_KEY"] = "77507750"
CORS(app, origins=["http://localhost:5173"], supports_credentials=True)

UPLOAD_FOLDER = "static/uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@app.route("/usuarios", methods=["POST"])
def cadastrar_usuario():
    data = request.json
    nome = data.get("nome")
    email = data.get("email")
    senha = generate_password_hash(data.get("senha"))
    localizacao = data.get("localizacao")
    cpf = data.get("cpf")

    conn = pegar_conexao()
    cur = conn.cursor()
    try:
        cur.execute(
            """ INSERT INTO usuarios (nome, email, senha, localizacao, cpf)
            VALUES (%s, %s, %s, %s, %s) RETURNING id """, 
        (nome, email, senha, localizacao, cpf))

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
    return jsonify({"message": "logado", "id:": user[0]})






@app.route("/produtos", methods=["GET"])

def pegar_todos():
    conn = pegar_conexao()
    cur = conn.cursor()
    cur.execute("SELECT id, nome, categoria, condicao, preco, descricao, localizacao, foto_url FROM produtos")
    linha = cur.fetchall()
    cur.close()
    conn.close()

    produtos = []
    for l in linha:
        produtos.append({
            "id": l[0],
            "nome": l[1],
            "categoria": l[2],
            "condicao": l[3],
            "preco": l[4],
            "descricao": l[5],
            "localizacao": l[6],
            "foto_url": l[7]
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
        """ SELECT c.id, p.nome, p.preco, c.quantidade, p.foto_url
            FROM carrinho c
            JOIN produtos p ON c.produto_id = p.id
            WHERE c.usuario_id = %s """,
        (session["user_id"],)
    )
    
    items = cur.fetchall()
    cur.close()
    conn.close()

    carrinho = [
        {
            "id": i[0],
            "nome": i[1],
            "preco": i[2],
            "quantidade": i[3],
            "foto": i[4]
        }
        for i in items
    ]
    return jsonify({"carrinho": carrinho})


@app.route("/produtos", methods=["POST"])
def adicionar_produto():
    nome = request.form.get("nome")
    categoria = request.form.get("categoria")
    condicao = request.form.get("condicao")
    preco = request.form.get("preco")
    descricao = request.form.get("descricao")
    localizacao = request.form.get("localizacao")

    foto = request.files.get("foto")
    foto_url = None

    if foto:
        filename = foto.filename
        caminho = os.path.join(UPLOAD_FOLDER, filename)
        foto.save(caminho)
        foto_url = f"static/uploads/{filename}"

    conn = pegar_conexao()
    cur = conn.cursor()
    try:
        cur.execute(
            """INSERT INTO produtos (nome, categoria, condicao, preco, descricao, localizacao, foto_url)
               VALUES (%s, %s, %s, %s, %s, %s, %s) RETURNING id""",
            (nome, categoria, condicao, preco, descricao, localizacao, foto_url)
        )
        produto_id = cur.fetchone()[0]
        conn.commit()
        return jsonify({"id": produto_id, "nome": nome}), 201
    except Exception as e:
        conn.rollback()
        return jsonify({"error": str(e)}), 400
    finally:
        cur.close()
        conn.close()




@app.route ("/pesquisar", methods=["GET"])
def pesquisar():
    query = request.args.get


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
