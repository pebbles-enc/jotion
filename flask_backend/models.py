from flask_backend import db

class HelloModel(db.Model):
  __tablename__ = 'hello'

  id = db.Column(db.Integer, primary_key=True)
  is_readable = db.Column(db.Boolean, nullable=False)

  @staticmethod
  def get_one_row(id):
    return HelloModel.query.get(id)