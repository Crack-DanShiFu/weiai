from flask import Flask
from exts import db
import config

from model.model import *

app = Flask(__name__)

app = Flask(__name__)
app.config.from_object(config)
app.config['SECRET_KEY'] = 'secret!'
app.config['JSON_AS_ASCII'] = False
db.init_app(app)
with app.app_context():
    db.create_all()

# api
from api import api

app.register_blueprint(api, url_prefix='/api')

# controller
from controller import controller

app.register_blueprint(controller, url_prefix='/')

# auth
from auth import auth

app.register_blueprint(auth, url_prefix='/auth')

if __name__ == '__main__':
    app.run()
