from Deploy_Notion import db, login_manager
from flask_login import UserMixin

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(user_id)

class User(db.Model, UserMixin):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(255))
    email = db.Column(db.String(255))
    senha = db.Column(db.String(255)) 


class Folha(db.Model):
    __tablename__ = 'folha'
    id = db.Column(db.Integer, primary_key=True)
    título = db.Column(db.String(255), default='Sem título')
    texto = db.Column(db.Text)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))