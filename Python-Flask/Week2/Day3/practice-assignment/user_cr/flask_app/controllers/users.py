from flask_app import app
from flask import render_template,redirect,request,session,flash
from flask_app.models.user import Users


@app.route('/users')
def users():
    table=Users.get_all()
    return render_template ('read.html',table=table)

@app.route('/users/new')
def user():
    return render_template ('create.html')

@app.route('/')
def user1():
    return redirect ('/users')

@app.route('/user/create',methods=['POST'])
def create():
    data = {
        "fname":request.form['first_name'],
        "lname": request.form['last_name'],
        "email": request.form['email'],
        
    }
    Users.save(data)
    return redirect('/users')

@app.route('/users/<int:id>')
def show(id):
    data={'id':id}
    one=Users.get_one(data)
    
    return render_template("show.html",one=one)




# @app.route('/user/edit',methods=['POST'])
# def edit():
    
#     Users.fixTheuser(**request.form)
#     return redirect('/edit')
# Update One Robot
@app.route('/users/<int:id>/edit')
def fixRob(id):
    data ={ 
        "id":id
    }
    one=Users.get_one(data)
    return render_template("edit.html",one=one)

# Update route when he finnish the Update
@app.route('/edit/hi',methods=['POST'])
def update():
    data = {
    "id":request.form['id'],
    "fname":request.form['first_name'],
    "lname": request.form['last_name'],
    "email": request.form['email']
        
    }
    Users.fixTheuser(data)
    return redirect('/')

@app.route('/users/delet/<int:id>')
def delet(id):
    data ={
        'id': id
    }
    Users.delete(data)
    return redirect('/users')