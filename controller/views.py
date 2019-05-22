from controller.server import *
from . import controller
from flask import render_template, send_from_directory


@controller.route('/')
def index():
    return render_template('index.html')


@controller.route('/article/<id>')
def article(id):
    data = query_article_info(id)
    add_page_view(id)
    return render_template('article.html', data=data)
