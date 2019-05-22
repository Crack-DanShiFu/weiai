from exts import db
from model.model import Article


def query_article_info(id):
    article_info = db.session.query(Article).get(id)
    entity_article_info = {
        'id': article_info.id,
        'title': article_info.title,
        'image': article_info.image,
        'introduction': article_info.introduction,
        'content': article_info.content,
        'page_views': article_info.page_views,
        'like_num': article_info.like_num,
        'Release_time': str(article_info.Release_time)
    }
    return entity_article_info


def add_page_view(id):
    sql = 'update article set page_views = page_views + 1 where id= {};'.format(id)
    sql_lists = db.session.execute(sql)
    db.session.commit()
