from . import auth
from flask import render_template


@auth.route('/')
def index():
    return "auth"


@auth.route('/me')
def me():
    return render_template('me.html')


@auth.route('/login')
def login():
    return render_template('login2.html')
