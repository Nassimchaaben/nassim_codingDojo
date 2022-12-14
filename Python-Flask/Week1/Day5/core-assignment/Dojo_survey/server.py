from flask import Flask, render_template,session,request,redirect
app = Flask(__name__)
app.secret_key='nothing'

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/process', methods=['post'])
def process():
    session['name'] = request.form['name']
    session['location'] = request.form['location']
    session['language'] = request.form['language']
    session['comment'] = request.form['comment']

    return redirect('/result')

@app.route('/result')
def result():
    return render_template('result.html')

	
if __name__=="__main__":
    app.run(debug=True)

