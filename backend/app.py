from flask import Flask
from rotas.produtos import produtos_bp

app = Flask(__name__)
app.register_blueprint(produtos_bp , url_prefix="/produtos")

if __name__ == "__main__":
    app.run (debug=True)