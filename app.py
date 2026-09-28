from Deploy_Notion import app
from livereload import Server


if __name__ == "__main__":
    app.run(debug= True)

server = Server(app.wsgi_app)

server.serve(port=5000)