from . import controller
from flask import render_template, send_from_directory


@controller.route('/')
def index():
    return render_template('index.html')
