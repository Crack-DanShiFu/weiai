from model.model import *


def query_banner_info():
    img_info_banner1 = db.session.query(ImageInfo).filter(ImageInfo.src_type.in_(['banner1'])).all()
    img_info_banner2 = db.session.query(ImageInfo).filter(ImageInfo.src_type.in_(['banner2'])).all()
    banner_find = db.session.query(ImageInfo).filter(ImageInfo.src_type.in_(['banner_find'])).all()
    entry_banner1 = []
    entry_banner2 = []
    entry_banner_find = []
    for i in img_info_banner1:
        entry_banner1.append({
            'id': i.id,
            'src_url': i.src_url,
            'url': i.url,
            'size': i.size,
            'remark': i.remark,
            'src_type': i.src_type,
        })

    for i in img_info_banner2:
        entry_banner2.append({
            'id': i.id,
            'src_url': i.src_url,
            'url': i.url,
            'size': i.size,
            'remark': i.remark,
            'src_type': i.src_type,
        })
    for i in banner_find:
        entry_banner_find.append({
            'id': i.id,
            'src_url': i.src_url,
            'url': i.url,
            'size': i.size,
            'remark': i.remark,
            'src_type': i.src_type,
        })
    return {'banner1': entry_banner1, 'banner2': entry_banner2, 'banner_find': entry_banner_find}


def query_article_info():
    article_info = db.session.query(Article).all()
    entity_article_info = []
    for i in article_info:
        entity_article_info.append({
            'id': i.id,
            'title': i.title,
            'image': i.image,
            'introduction': i.introduction,
            # 'content': i.id,
            'page_views': i.page_views,
            'like_num': i.like_num,
            'Release_time': str(i.Release_time)
        })
    return {'result': entity_article_info}
