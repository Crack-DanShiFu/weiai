from . import auth
from flask import render_template


@auth.route('/')
def index():
    return "auth"


@auth.route('/me')
def me():
    return render_template('me.html')
