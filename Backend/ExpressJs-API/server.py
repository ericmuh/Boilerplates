from flask import Flask

app = Flask(__name__)
languages = [
  { "language": "Spanish", "greeting": "hola" },
  { "language": "French", "greeting": "bonjour" },
  { "language": "German", "greeting": "guten tag" },
  { "language": "Italian", "greeting": "salve" },
  { "language": "Chinese", "greeting": "nǐn hǎo" },
  { "language": "Portuguese", "greeting": "olá" },
  { "language": "Arabic", "greeting": "asalaam alaikum" },
  { "language": "Japanese", "greeting": "konnichiwa" },
  { "language": "Korean", "greeting": "anyoung haseyo" },
  { "language": "Russian", "greeting": "Zdravstvuyte" },
]
@app.route("/api/hello")
def hello():
    return app.json.response(languages)


@app.route("/api/send", methods=['POST'])
def hello():
    error = 'Invalid Data sent'
    return error
