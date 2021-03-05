import os
from flask import Flask, render_template


app = Flask(__name__)


@app.route("/")
def index():
    return render_template("pages/index.html")


@app.route("/biography")
def biography():
    return render_template("pages/biography.html")


@app.route("/exteriors")
def exteriors():
    return render_template("pages/exteriors.html")


@app.route("/interiors")
def interiors():
    return render_template("pages/interiors.html")


@app.route("/video")
def video():
    return render_template("pages/video.html")


@app.route("/contact")
def contact():
    return render_template("pages/contact.html")



if __name__ == "__main__":
    app.run(
        host=os.environ.get("IP", "0.0.0.0"),
        port=int(os.environ.get("PORT", "5000")),
        debug=True)
