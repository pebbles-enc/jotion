from flask import (
    Blueprint,
    render_template,
    jsonify,
    session,
    request,
    redirect,
    url_for)
# from flask_backend.models import HelloModel
testapi = Blueprint("test", __name__)

@testapi.route("/hello-world")
def hello_world():
    return "<p>Hello, World zorrillooo asdas!</p>"

# @testapi.route("/db-read-check")
# def db_read_check():
#     first_row = HelloModel.get_one_row(1)
#     return f"{first_row.id, first_row.is_readable}", 200