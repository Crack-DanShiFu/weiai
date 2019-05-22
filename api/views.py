import json

from api.server import *
from . import api


@api.route('/')
def index():
    return "api"


@api.route('/get_banner_info/')
def get_banner_info():
    return json.dumps(query_banner_info(), ensure_ascii=False)


@api.route('/get_article_info/')
def get_article_info():
    return json.dumps(query_article_info(), ensure_ascii=False)
