from flask import Flask, render_template, request


app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def index():
    if request.get_json():
        print(request.get_json())
    elif request.get_data():
        print(request.get_data())
    return {"test": "test"}

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=1234)
