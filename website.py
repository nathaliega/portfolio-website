from flask import render_template
from under_proxy import get_flask_app

app = get_flask_app()


@app.route("/")
def main():
    return render_template("index.html")


@app.route("/spotify")
def spotify():
    return render_template("spotify.html")


@app.route("/countries-api")
def api():
    return render_template("countries.html")


@app.route("/youtube")
def youtube():
    return render_template("youtube.html")


@app.route("/sentiment_identificator")
def sentiment():
    return render_template("sentiment_identificator.html")


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=8000)
