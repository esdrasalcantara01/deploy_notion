from flask_wtf import FlaskForm
from wtforms.validators import DataRequired, Email, ValidationError
from wtforms import StringField, PasswordField, SubmitField, TextAreaField
from Deploy_Notion.models import User, Folha
from Deploy_Notion import bcrypt, db


class cadastroForm(FlaskForm):
    nome = StringField('nome: ', validators=[DataRequired(message= 'por favor, digite seu nome')])
    email = StringField('E-mail: ', validators=[DataRequired(), Email()])
    senha = PasswordField('senha', validators=[DataRequired()])
    enviar = SubmitField('Cadastrar')

    def salvar(self):
          
       senha = bcrypt.generate_password_hash(self.senha.data.encode('utf-8'))
       
       user = User.query.filter(User.email == self.email.data).first()
       
       if user: 
          erro = f'Esse E-mail já existe!'
          return erro
       
       user = User(
          nome = self.nome.data,
          email = self.email.data,
          senha = senha
       )

       db.session.add(user)
       db.session.commit()
       return user
       

       
class loginForm(FlaskForm):
  nome = StringField('nome: ', validators=[DataRequired()])
  senha = PasswordField('senha: ', validators=[DataRequired()])
  enviar = SubmitField('Login')

  def login(self):
     user = User.query.filter_by(nome = self.nome.data).first()

     if user:
        if bcrypt.check_password_hash(user.senha, self.senha.data.encode('utf-8')):
           return user
        else:
           erro = f'senha incorreta!'
           return erro
     else:
      erro = f'usuário inexistente!'
      return erro



class folhaForm(FlaskForm):
   título = StringField('título: ')
   texto = TextAreaField('digite aqui o conteúdo... ')
   salvar = SubmitField('salvar')
   
   def salvarTexto(self, user_id):

      if not self.título.data:
         self.título.data = "Sem título"

      if not self.texto.data:
         self.texto.data = "Sem texto"
         

      folha = Folha(
         título = self.título.data,
         texto = self.texto.data,
         user_id = user_id
      )

      db.session.add(folha)
      db.session.commit()
      return folha

  

