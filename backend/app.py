from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

@app.route('/')
def home():
    return 'this is home route'


@app.route('/submit', methods=['POST'])
def process_data():
    name = request.form.get('name')
    email = request.form.get('email')

    if not name or not email:
        return "Missing data", 400
    
    return f"Received: Name={name}, Email={email}"

if __name__ == '__main__':
    app.run(port=5000, host='0.0.0.0',debug=True)

