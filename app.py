from flask import Flask, render_template
from datetime import datetime

app = Flask(__name__)

projects = [
    {
        'thumbnail': '../static/assets/genericThumbnail.png',
        'title': 'Website Samekh.dev',
        'description': '''Portfólio criado usando HTML, CSS e JavaScript com os projetos apresentados de forma dinâmica.
                          No back-end, Flask e Python gerenciam o conteúdo permitindo a integração de dados de forma eficiente.
                          O site está hospedado no Render, com o código-fonte controlado via GitHub, facilitando a manutenção e atualizações contínuas.''',
    },
    {
        'image': '../static/assets/profilePicture.png',
        'title': 'Projeto B',
        'description': '''Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                          culpa qui officia deserunt mollit anim id est laborum.''',
    }
]

@app.route('/')
def index():
    return render_template("index.html", projects = projects)

if __name__ == "__main__":
    app.run(debug=True)
