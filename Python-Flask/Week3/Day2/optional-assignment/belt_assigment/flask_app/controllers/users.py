from flask_app import app
from flask import render_template, redirect, request, session , flash
from flask_app.models.user import USER
from flask_bcrypt import Bcrypt       


bcrypt = Bcrypt(app)     # we are creating an object called bcrypt, 
                         # which is made by invoking the function Bcrypt with our app as an argument




@app.route('/')
def index():
    return  render_template("index.html")

# @app.route("/dashbord")
# def LogReg():
#     return render_template("recipes.html")

@app.route('/users/new', methods=['post'])
def create_user():
    pw_hash = bcrypt.generate_password_hash(request.form['password'])
    if USER.validate_register(request.form) == False:
        return redirect('/dashbord')
    
    data = {
        'first_name':request.form['first_name'],
        'last_name':request.form['last_name'],
        'email':request.form['email'],
         "password" : pw_hash 
        #  hashage password
    }
    return_from_db = USER.create_user(data)
    session['user_id'] = return_from_db
    
    return redirect('/dashbord')
    # return hedha bech nhezzouh l session (return_from_db)

@app.route("/login" , methods=['POST'])
def Login():
    data={
        'email':request.form['email']
    }
    foundUser = USER.get_one_by_email(data)
    print(foundUser,'************************************')
    if not foundUser:
        flash("Invalid Email","login")
        return redirect("/")
    if not bcrypt.check_password_hash(foundUser.password, request.form['password']):
        flash("Invalid Password","login")
        return redirect("/")
    session['user_id'] = foundUser.id
    return redirect('/dashbord')

@app.route('/dashboard')
def dashboard():
    if 'user_id' not in session:
        return redirect('/logout')
    data ={
        'id': session['user_id']
    }
    return render_template("dash.html",user=USER.get_one_by_id(data))

@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')
    
    