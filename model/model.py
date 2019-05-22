from exts import db


class User(db.Model):
    __tableName__ = 'user'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(255))
    password = db.Column(db.String(255))


class ImageInfo(db.Model):
    __tableName__ = 'image_info'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    src_type = db.Column(db.String(255))
    src_url = db.Column(db.String(255))
    url = db.Column(db.String(255))
    size = db.Column(db.String(255))
    remark = db.Column(db.String(255))


class Article(db.Model):
    __tableName__ = 'article'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String(255))
    introduction = db.Column(db.Text)
    image = db.Column(db.Text)
    content = db.Column(db.Text)
    page_views = db.Column(db.Integer)
    like_num = db.Column(db.Integer)
    Release_time = db.Column(db.Date)
