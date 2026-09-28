from Deploy_Notion import app, db
from flask import render_template, url_for, redirect
from Deploy_Notion.forms import cadastroForm, loginForm, User, folhaForm, Folha
from Deploy_Notion.models import Folha
from flask_login import login_required, current_user, login_user, logout_user


@app.route('/', methods=['GET', 'POST'])
def início():
    form1 = cadastroForm()
    form2 = loginForm()
    erro1 = None
    erro2 = None

    if form1.validate_on_submit():
        user1 = form1.salvar()
        if isinstance(user1, User):

         login_user(user1, remember=True)
         return redirect(url_for('dashboard'))

        erro1 = user1

    elif form2.validate_on_submit():
         user = form2.login()

         if isinstance(user, User):
             login_user(user, remember=True)
             return redirect(url_for('dashboard'))
    
         erro1 = user
         

    return render_template('index.html', 
                           form1= form1, 
                           form2= form2,
                           erro1= erro1,
                           erro2= erro2)


@app.route('/dashboard', methods=['GET', 'POST'])
@login_required
def dashboard():
    dados = Folha.query.order_by(Folha.id)
    anotações = { 'publicações': dados.all() }

    
    return render_template('dashboard.html', 
                           anotações=anotações )


@app.route('/folha', methods=['GET', 'POST'])
def folha():
    form = folhaForm()

    if form.validate_on_submit():
        form.salvarTexto(current_user.id)
        return redirect(url_for('dashboard'))

    return render_template('folha.html', form=form )


@app.route('/dashboard/apagar_nota/<int:id>', methods=['POST'])
def apagar(id):
    apagar_nota = Folha.query.get(id)

    db.session.delete(apagar_nota)
    db.session.commit()

    return redirect(url_for('dashboard'))


@app.route('/dashboard/editar_nota/<int:id>', methods= ['GET', 'POST'])
def editar(id):
    form = folhaForm()
    editar_nota = Folha.query.get(id)
  
    if form.validate_on_submit():
       editar_nota.título = form.título.data
       editar_nota.texto = form.texto.data

       db.session.commit()

       return redirect(url_for('dashboard'))
    
    form.título.data = editar_nota.título
    form.texto.data = editar_nota.texto

    return render_template('mudar_folha.html', 
                           form=form,
                           editar_nota= editar_nota)

@app.route('/sair/')
def logout():
    logout_user()
    return redirect(url_for('início'))