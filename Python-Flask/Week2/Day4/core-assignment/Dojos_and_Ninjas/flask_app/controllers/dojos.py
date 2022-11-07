from flask_app import app
from flask import render_template,redirect,request,session,flash
from flask_app.models.dojo import Dojos




@app.route('/')
def index():
    return redirect ('/dojos')
    
@app.route('/dojos')
def dojos():
    table=Dojos.get_all()
    return render_template ('index.html',table=table)


@app.route('/create/dojo',methods=['POST'])
def create_dojo():
    # data = {
    #     "id": request.form['id'],
    #     "name": request.form['name']
        
    # }
    Dojos.save(request.form)
    return redirect('/dojos')

@app.route('/dojos/<int:id>')
def show(id):
    data={
        'id':id
        }
    one=Dojos.get_one_with_ninjas(data)
    print("#################",one)

    return render_template("do_and_nj.html",one=one)