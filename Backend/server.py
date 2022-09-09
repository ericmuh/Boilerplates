# server.py
from flask import Flask, render_template, jsonify

app = Flask(__name__, static_folder="../Frontend/dist", template_folder="../Frontend")

languages = [
    {"language": "Spanish", "greeting": "hola"},
    {"language": "French", "greeting": "bonjour"},
    {"language": "German", "greeting": "guten tag"},
    {"language": "Italian", "greeting": "salve"},
    {"language": "Chinese", "greeting": "nǐn hǎo"},
    {"language": "Portuguese", "greeting": "olá"},
    {"language": "Arabic", "greeting": "asalaam alaikum"},
    {"language": "Japanese", "greeting": "konnichiwa"},
    {"language": "Korean", "greeting": "anyoung haseyo"},
    {"language": "Russian", "greeting": "Zdravstvuyte"},
]

# route that serves the index.html file from the Frontend
@app.route("/")
def index():
    return render_template("index.html")


# route that returns a random greeting
@app.route("/hello")
def hello():
    return jsonify(languages)


if __name__ == "__main__":
    app.run()
