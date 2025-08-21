import os
import psycopg2
from flask import Flask, request, jsonify
from flask_cors import CORS




def pegar_conexao():
    return psycopg2.connect( dbname="bazar_biodegradavel", user="postgres", password="77507750", host="localhost", port="5432" )



app = Flask(__name__)
app.config["SECRET_KEY"] = "77507750"
CORS(app, origins=["http://localhost:5173"])



UPLOAD_FOLDER = "static/uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)




@app.route("/", methods=["GET"])
def teste():
    return "<h1>sopa de raposa</h1>"



@app.route("/produtos", methods=["POST"])
def cadastrar():
    data = request.form

    nome = data.get("nome")
    categoria = data.get("categoria")
    condicao = data.get("condicao")
    preco = data.get("preco")
    descricao = data.get("descricao")
    localizacao = data.get("localizacao")
    foto_url = None



    if "foto" in request.files:
        foto = request.files["foto"]
        foto_path = os.path.join(UPLOAD_FOLDER, foto.filename)
        foto.save(foto_path)
        foto_url = foto_path

    conn = pegar_conexao()
    cur = conn.cursor()

    cur.execute("""
        INSERT INTO produtos (nome, categoria, condicao, preco, descricao, localizacao, foto_url)
        VALUES (%s, %s, %s, %s, %s, %s, %s) RETURNING id
    """, (nome, categoria, condicao, preco, descricao, localizacao, foto_url))

    new_id = cur.fetchone()[0]
    conn.commit()
    cur.close()
    conn.close()

    return jsonify({
        "id": new_id,
        "nome": nome,
        "categoria": categoria,
        "condicao": condicao,
        "preco": preco,
        "descricao": descricao,
        "localizacao": localizacao,
        "foto_url": foto_url
    }), 201




@app.route("/produtos", methods=["GET"])
def pegar_todos():
    conn = pegar_conexao()
    cur = conn.cursor()
    cur.execute("SELECT id, nome, categoria, condicao, preco, descricao, localizacao, foto_url FROM produtos")
    linha = cur.fetchall()

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
            "foto_url": l[7]})
        

    cur.close()
    conn.close()
    return jsonify({"produto": produtos})




@app.route("/produtos/<int:id>", methods=["GET"])
def pegar_um(id):
    conn = pegar_conexao()
    cur = conn.cursor()
    cur.execute("SELECT id, nome, categoria, condicao, preco, descricao, localizacao, foto_url FROM produtos WHERE id=%s", (id,))
    r = cur.fetchone()
    cur.close()
    conn.close()

    if not r:
        return jsonify({"error": "nao temos isso"}), 404

    produto = {
        "id": r[0],
        "nome": r[1],
        "categoria": r[2],
        "condicao": r[3],
        "preco": r[4],
        "descricao": r[5],
        "localizacao": r[6],
        "foto_url": r[7]}
    return jsonify({"produto": produto})




@app.route("/produtos/<int:id>", methods=["PUT"])
def modificar(id):
    data = request.form if request.form else request.json
    conn = pegar_conexao()
    cur = conn.cursor()
    cur.execute("""
        UPDATE produtos
        SET nome=%s, categoria=%s, condicao=%s, preco=%s, descricao=%s, localizacao=%s
        WHERE id=%s
    """, (data.get("nome"), data.get("categoria"), data.get("condicao"),
          data.get("preco"), data.get("descricao"), data.get("localizacao"), id))

    conn.commit()
    cur.close()
    conn.close()
    return jsonify({"message": "produto atualizado"})


@app.route("/produtos/<int:id>", methods=["DELETE"])
def deletar(id):

    conn = pegar_conexao()
    cur = conn.cursor()
    cur.execute("DELETE FROM produtos WHERE id=%s", (id,))
    conn.commit()
    cur.close()
    conn.close()
    return jsonify({"message": "Produto deletado"}), 200


if __name__ == "__main__":
    app.run(debug=True)
