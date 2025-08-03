from flask_sqlalchemy import SQLAlchemy
from flask import Flask , request 
from flask_cors import CORS

app= Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"]= "postgresql://postgres:77507750@localhost/projetointegrador"
db= SQLAlchemy(app)
CORS(app)


@app.route("/", methods = ['GET'])
def teste():
    return "<h1>teste</h1>"

@app.route("/produtos", methods = ['POST'])
def cadastrar():
    descricao = request.json["desc"]
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
    return formatar_produto(produto)

@app.route ("/produtos", methods =['GET'])
def pegar_todos():
    evento = Produto.query.all()
    lista_produtos = [ ]
    for produto in evento:
        lista_produtos.append(formatar_produto(produto))
    return{"produto":lista_produtos}    


@app.route ("/produtos/<id>", methods = ['GET'])
def pegar_um(id):
    evento = Produto.query.filter_by(id=id).one()
    produto_formatado = formatar_produto(evento)
    return{"produto": produto_formatado}


@app.route("/produtos/<id>", methods = ['DELETE'])
def deletar(id):
    evento = Produto.query.filter_by(id=id).one()
    db.session.delete(evento)
    db.session.commit()
    return "deletado"

@app.route ("/produtos/<id>", methods = ['PUT'])
def modificar(id):
    evento = Produto.query.filter_by(id=id)
    descricao = request.json['descricao']
    evento.update(dict(descricao = descricao))
    db.session.commit()
    return {'produto':formatar_produto(evento.one())}


    





class Produto(db.Model):
    id=db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String, nullable=False)
    preco = db.Column(db.Float, nullable=False)
    descricao = db.Column (db.String, nullable=False)
    quantia = db.Column (db.Integer, nullable=False)
    foto_url = db.Column(db.String, nullable=False)

    def __repr__(self):
        return f"event:{self.id}"
    
    def __init__(self, nome, preco, descricao, quantia, foto_url):
        self.nome = nome
        self.preco = preco
        self.descricao = descricao
        self.quantia= quantia
        self.foto_url = foto_url

def formatar_produto(produto):
    return{
        "nome": produto.nome,
        "preco": produto.preco,
        "descricao": produto.descricao,
        "quantia": produto.quantia,
        "foto_url": produto.foto_url
    }


if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run()