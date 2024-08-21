from flask_backend import create_app

import os

env_name = os.getenv("FLASK_ENV")
application = create_app(env_name)

if __name__ == "__main__":
  application.run()