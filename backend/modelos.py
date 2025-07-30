from sqlalchemy import Column, String, Integer, Float
from db import base


class Produto(base):
    __tablename__= "produtos"

    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String, nullable=False)
    preco = Column(Float, nullable=False)
    descricao = Column (String, nullable=False)
    quantia = Column (Integer, nullable=False)
    foto_url = Column(String, nullable=False)

    def __repr__(self):
        return f"<Produto(id={self.id},nome='{self.nome}',preco={self.preco})>"