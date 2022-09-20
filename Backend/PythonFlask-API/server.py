from flask import Flask, Request, request, jsonify
from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'

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
    return jsonify(languages)


@app.route("/api/send/", methods=["POST", "GET"])
@cross_origin()
def send():
    languages.append(request.get_json())
    return "Language Successfully added", 200
    
