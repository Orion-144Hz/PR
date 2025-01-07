from flask import Flask, request

app = Flask(__name__)

@app.route('/')
def home():
    return 'Bahis sayfanıza hoş geldiniz!'

@app.route('/bet', methods=['POST'])
def bet():
    team = request.form['team']
    return f"Bahis yaptığınız takım: {team}"

if __name__ == "__main__":
    app.run(debug=True)
