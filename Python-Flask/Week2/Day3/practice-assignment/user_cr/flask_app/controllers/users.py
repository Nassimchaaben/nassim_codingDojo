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