import os

class Development():
  ENV = "development"
  DEBUG = True
  SQLALCHEMY_DATABASE_URI = os.getenv("PEBBLESERVER_DATABASE_URI")

class Production():
  ENV = "production"
  DEBUG = False
  SQLALCHEMY_DATABASE_URI = os.getenv("PEBBLESERVER_DATABASE_URI")

app_env_config = {"development": Development, "production": Production}