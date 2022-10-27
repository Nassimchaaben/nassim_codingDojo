from glob import escape
from unicodedata import name
from flask import Flask  # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"
@app.route('/')          # The "@" decorator associates this route with the function immediately following
def hello_world():
    return 'Hello World!'  # Return the string 'Hello World!' as a response
    # import statements, maybe some other routes
    
@app.route('/dojo')
def success():
    return "Dojo!"
@app.route('/say/<name>')
def say(name):
    return f"Hi {name}!"  

@app.route('/repeat/<int:num>/<string:name>')
def repeat(num,name):
    
    
    espace = ''

    for i in range(0,num):
        espace += f"{name}<br/>"

    return espace

@app.errorhandler(404)
def page_not_found(error):
    return 'Sorry! No response. Try again'
    



if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.
else :
    app.run(debug=False)
    print("Sorry! No response. Try again.")