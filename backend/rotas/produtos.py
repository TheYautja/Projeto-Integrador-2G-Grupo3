from flask import Blueprint, jsonify, request
from db import sessaoLCL
from modelos import Produto

produtos_bp = Blueprint("produtos", __name__)

@produtos_bp.route("/", methods=["GET"])
def listar_produtos():
    db = sessaoLCL()
    produtos = db.query(Produto).all()
    db.close()
    return jsonify([{
        "id": p.id,
        "nome": p.nome,
        "preco": p.preco,
        "descricao": p.descricao,
        "quantia": p.quantia,
        "foto_url": p.foto_url
    } for p in produtos])

@produtos_bp.route("/", methods=["POST"])
def criar_produto():
    dados = request.json
    db = sessaoLCL()
    novo = Produto(**dados)
    db.add(novo)
    db.commit()
    db.refresh(novo)
    db.close()
    return jsonify({"id": novo.id}), 201
