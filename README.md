# REQUISITOS PRA RODAR O PROJETO:
1. Python (preferencialmente no PATH)
2. PostgreSQL
3. NodeJS
4. Git

## 1 - Rodando o back e populando o banco:
* clone o repositorio   (git clone https://github.com/TheYautja/Projeto-Integrador-2G-Grupo3.git)
* navegue ate a pasta do backend   (cd backend)
* crie um ambiente virtual do python   (python -m venv venv)
* ative   (venv\Scripts\activate.bat)
* instale as dependencias   (pip install -r requirements.txt)
* abra o psql
* crie o banco   (CREATE DATABASE bazar_biodegradavel;)
* crie o usuario pra teste   (CREATE USER testador WITH PASSWORD '12345678';), note que se mudar o usuario ou a senha deve tambem alterar as credenciais no app.py
* de as permissoes   (GRANT ALL ON DATABASE bazar_biodegradavel TO testador;)
* GRANT ALL PRIVILEGES ON SCHEMA public TO testador;
* rode o encheBanco.py (para popular o banco com produtos)
* rode o app.py
* backend agora esta funcionando

## 2 - Rodando o front:
* navegue ate a pasta do frontend   (cd Projeto-Integrador-2G-Grupo3/frontend)
* instale as dependencias (npm install)
* inicie o server (npm run dev), vite roda no 5173 por padrao, se quiser mudar edite o vite.config.js ( e depois o app.py)

