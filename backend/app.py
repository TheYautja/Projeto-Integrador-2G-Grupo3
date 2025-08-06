from flask_sqlalchemy import SQLAlchemy
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://postgres:77507750@localhost/projetointegrador"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)
CORS(app, origins=["http://localhost:5173"])

class Produto(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String, nullable=False)
    preco = db.Column(db.Float, nullable=False)
    descricao = db.Column(db.String, nullable=False)
    quantia = db.Column(db.Integer, nullable=False)
    foto_url = db.Column(db.String, nullable=False)

    def __init__(self, nome, preco, descricao, quantia, foto_url):
        self.nome = nome
        self.preco = preco
        self.descricao = descricao
        self.quantia = quantia
        self.foto_url = foto_url

def formatar_produto(produto):
    return {
        "id": produto.id,
        "nome": produto.nome,
        "preco": produto.preco,
        "descricao": produto.descricao,
        "quantia": produto.quantia,
        "foto_url": produto.foto_url
    }



@app.route("/", methods=["GET"])
def teste():
    return "<h1>deu boa</h1>"



@app.route("/produtos", methods=["POST"])
def cadastrar():
    data = request.json
    produto = Produto(
        nome=data['nome'],
        preco=data['preco'],
        descricao=data['descricao'],
        quantia=data['quantia'],
        foto_url=data['foto_url']
    )
    db.session.add(produto)
    db.session.commit()
    return jsonify(formatar_produto(produto)), 201




@app.route("/produtos", methods=["GET"])
def pegar_todos():
    produtos = Produto.query.all()
    lista = [formatar_produto(p) for p in produtos]
    return jsonify({"produto": lista})



@app.route("/produtos/<int:id>", methods=["GET"])
def pegar_um(id):
    produto = Produto.query.get_or_404(id)
    return jsonify({"produto": formatar_produto(produto)})



@app.route("/produtos/<int:id>", methods=["DELETE"])
def deletar(id):
    produto = Produto.query.get_or_404(id)
    db.session.delete(produto)
    db.session.commit()
    return jsonify({"message": "Produto deletado"}), 200



@app.route("/produtos/<int:id>", methods=["PUT"])
def modificar(id):
    produto = Produto.query.get_or_404(id)
    data = request.json
    produto.nome = data.get('nome', produto.nome)
    produto.preco = data.get('preco', produto.preco)
    produto.descricao = data.get('descricao', produto.descricao)
    produto.quantia = data.get('quantia', produto.quantia)
    produto.foto_url = data.get('foto_url', produto.foto_url)
    db.session.commit()
    return jsonify({"produto": formatar_produto(produto)})




if __name__ == "__main__":
    app.run()
