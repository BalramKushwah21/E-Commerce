from flask import Flask , render_template , request
from requests import post

app = Flask(__name__ , template_folder="../Frontend/HTML/signup.html")

@app.route('/', methods=['GET'])
def signup_page():
    return render_template(signup.html)

@app.route('/submit', methods=[post])
def submit_form():
    name = request.form['name']
    number = request.form['number']
    email = request.form['email']
    
    print("Name : ",name)
    print("Number : ",number)
    print("Email : ",email)

    return "Signup successFull !"

if __name__=="_main_":
    app.run(debug=True)