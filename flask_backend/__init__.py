from flask import Flask
# from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from flask_backend.config import app_env_config

db = SQLAlchemy()
# migrate = Migrate()

def create_app(environment_name):
  app = Flask(__name__)
  app.config.from_object(app_env_config[environment_name])

  db.init_app(app)
  # migrate.init_app(app, db)
  from flask_backend.testapi.routes import testapi

  app.register_blueprint(testapi)

  return app