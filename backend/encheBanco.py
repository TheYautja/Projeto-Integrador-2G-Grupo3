import psycopg2
from faker import Faker
import random


DB_NAME = "bazar_biodegradavel"
DB_USER = "postgres"
DB_PASS = "77507750"
DB_HOST = "localhost"
DB_PORT = "5432"

fake = Faker()

CARBONO = {
    "eletronicos": 30,
    "moveis": 70,
    "livros": 1.7,
    "roupas": 4,
    "outros": 2
}

CATEGORIAS = list(CARBONO.keys())
CONDICOES = ["novo", "usado", "seminovo", "desmanchando"]
FOTOS = [
    "static/uploads/celular.webp",
    "static/uploads/livro.jpg",
    "static/uploads/camisa.webp",
    "static/uploads/banco.jpg",
    "static/uploads/banco2.jpg"
]

def get_conn():
    return psycopg2.connect(
        dbname=DB_NAME, user=DB_USER, password=DB_PASS, host=DB_HOST, port=DB_PORT
    )

def criaTabelas():
    conn = get_conn()
    cur = conn.cursor()


    cur.execute("""
    CREATE TABLE IF NOT EXISTS usuarios (
        id SERIAL PRIMARY KEY,
        nome TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        senha TEXT NOT NULL,
        localizacao TEXT,
        cpf TEXT UNIQUE
    );
    """)


    cur.execute("""
    CREATE TABLE IF NOT EXISTS produtos (
        id SERIAL PRIMARY KEY,
        nome TEXT NOT NULL,
        categoria TEXT,
        condicao TEXT,
        preco NUMERIC(10,2),
        descricao TEXT,
        localizacao TEXT,
        foto_url TEXT,
        carbono NUMERIC(6,2) DEFAULT 0
    );
    """)

    cur.execute("""
    CREATE TABLE IF NOT EXISTS carrinho (
        id SERIAL PRIMARY KEY,
        usuario_id INT REFERENCES usuarios(id) ON DELETE CASCADE,
        produto_id INT REFERENCES produtos(id) ON DELETE CASCADE,
        quantidade INT NOT NULL DEFAULT 1,
        UNIQUE (usuario_id, produto_id)
    );
    """)

    conn.commit()
    cur.close()
    conn.close()
    print("tabelas criadas, merecia um 10 so pela praticidade")

def insereDadosFake(nprodutos=20):
    conn = get_conn()
    cur = conn.cursor()

    for _ in range(nprodutos):
        nome = fake.word().capitalize()
        categoria = random.choice(CATEGORIAS)
        condicao = random.choice(CONDICOES)
        preco = round(random.uniform(10, 2000), 2)
        descricao = fake.sentence()
        localizacao = fake.city()
        foto_url = random.choice(FOTOS)
        carbono = CARBONO[categoria]

        cur.execute(
            """INSERT INTO produtos (nome, categoria, condicao, preco, descricao, localizacao, foto_url, carbono)
               VALUES (%s,%s,%s,%s,%s,%s,%s,%s)""",
            (nome, categoria, condicao, preco, descricao, localizacao, foto_url, carbono)
        )

    conn.commit()
    cur.close()
    conn.close()
    print(f"{nprodutos} produtos colocados no db")

if __name__ == "__main__":
    criaTabelas()
    insereDadosFake()
