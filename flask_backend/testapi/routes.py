from flask import (
    Blueprint,
    render_template,
    jsonify,
    session,
    request,
    redirect,
    url_for)
from flask_backend.models import HelloModel
import time


testapi = Blueprint("test", __name__)

@testapi.route("/hello-world")
def hello_world():
    return "<p>Hello, World zorrillooo asdas! te prometo que esta wea está en Flask</p>"

@testapi.route("/hello-world-render-template")
def hello_world_render_template():
    return render_template("helloworld.html")

@testapi.route("/db-read-check")
def db_read_check():
    time.sleep(10)
    first_row = HelloModel.get_one_row(1)

    return f"{first_row.id, first_row.is_readable}", 200

@testapi.route("/test-post-request", methods=["POST"])
def test_post_request():
    print("This POST request was successful")
    data = request.json
    print(data)
    return 'ok', 200

@testapi.route("/test-delete-request", methods=["DELETE"])
def test_delete_request():
    print("This DELETE request was successful")
    data = request.json
    print(data)
    return 'ok', 200

@testapi.route("/test-patch-request", methods=["PATCH"])
def test_patch_request():
    print("This PATCH request was successful")
    data = request.json
    print(data)
    return 'ok', 200

@testapi.route("/test-put-request", methods=["PUT"])
def test_put_request():
    print("This PUT request was successful")
    data = request.json
    print(data)
    return 'ok', 200