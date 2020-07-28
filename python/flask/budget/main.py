#!flask/bin/python
from flask import Flask, render_template
from home import home
from new import new, Form
import os

app = Flask(__name__)
app.config['SECRET_KEY'] = os.urandom(32)

@app.route('/')
def index():
    return home()

@app.route('/new', methods=['GET', 'POST'])
def addExpense():
    return new()

if __name__ == '__main__':
    app.run(debug=True)
