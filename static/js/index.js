$(document).ready(function () {
    $.ajax({
        url: '/api/get_banner_info/',
        type: 'GET',
        success: function (data) {
            var obj_info = JSON.parse(data)
            for (var i in obj_info['banner1']) {
                $('.new-swiper-wrap:eq(0)').append(banner1_html)
                $('.new-swiper-wrap:eq(0) a:eq(' + i + ')').css('background-image', 'url(' + obj_info['banner1'][i]['src_url'] + ')')
                $('.new-swiper-wrap:eq(0) a:eq(' + i + ')').attr('href', obj_info['banner1'][i]['url'])
            }
            for (var i in obj_info['banner2']) {
                $('.new-swiper-wrap:eq(1)').append(banner1_html)
                $('.new-swiper-wrap:eq(1) a:eq(' + i + ')').css('background-image', 'url(' + obj_info['banner2'][i]['src_url'] + ')')
                $('.new-swiper-wrap:eq(1) a:eq(' + i + ')').attr('href', obj_info['banner2'][i]['url'])
            }
            //    banner_find
            $('.banner_find').append(banner_find_html)
            $('.banner_find a img').attr('src', obj_info['banner_find'][0]['src_url'])
            $('.banner_find a').attr('href', obj_info['banner_find'][0]['url'])
        },
    })
    $.ajax({
        url: '/api/get_article_info/',
        type: 'GET',
        success: function (data) {
            var obj_info = JSON.parse(data)
            for (var i in obj_info['result']) {
                $('.article ul').append(article_html)
                $('.article ul li:last a').attr('href', '/article/' + obj_info['result'][i]['id'])
                $('.article ul li:last img').attr('src', obj_info['result'][i]['image'])
                $('.article ul li:last .text h3').text(obj_info['result'][i]['title'])
                $('.article ul li:last .text p').text(obj_info['result'][i]['introduction'])
                $('.article ul li:last .time').html("<span class='k-i-time'></span>" + obj_info['result'][i]['Release_time'])
                $('.article ul li:last .rl-info p:first').html("<span class='k-i-art-scan'></span>" + obj_info['result'][i]['page_views'])
                $('.article ul li:last .rl-info p:last').html("<span class='k-i-art-like'></span>" + obj_info['result'][i]['like_num'])
            }
        }
    })


//    near
    $.ajax({
        url: '/api/get_near_info/',
        type: 'GET',
        success: function (data) {
            var obj_info = JSON.parse(data)
            for (var i in obj_info['result']['near_img']) {
                $('.near_img').append(near_img_html)
                $('.near_img img:last').attr('src', obj_info['result']['near_img'][i]['src_url'])
                $('.near_img font:last').text(obj_info['result']['near_img'][i]['remark'])
            }
            //community_img_html
            for (var i in obj_info['result']['community_img']) {
                $('.community_img').append(community_img_html)
                $('.community_img img:last').attr('src', obj_info['result']['community_img'][i]['src_url'])
                $('.community_img font:last').text(obj_info['result']['community_img'][i]['remark'])
            }
            //post_house
            for (var i in obj_info['result']['post_house']) {
                $('.post_house').append(post_house_html)
                $('.post_house img:last').attr('src', obj_info['result']['post_house'][i]['src_url'])
                $('.post_house font:last').text(obj_info['result']['post_house'][i]['remark'])
            }
        }
    })


})

var banner1_html = '<div class="new-swiper-item"><a href="#"\n' +
    'style=""></a>\n' +
    '</div>'


var banner_find_html = '<a href="">\n' +
    '                    <img\n' +
    '                    src=""\n' +
    '                    title="" height="" data-imgid="" fit="">\n' +
    '                </a>'

var article_html = " <li><a href=''>\n" +
    "                        <div class='pic'><img\n" +
    "                                src=''>\n" +
    "                        </div>\n" +
    "                        <div class='text'><h3></h3>\n" +
    "                            <p></p></div>\n" +
    "                        <div><p class='time'></p>\n" +
    "                            <div class='rl-info'><p></p>\n" +
    "                                <p></p></div>\n" +
    "                        </div>\n" +
    "                    </a></li>"

var near_img_html = '<div class="cell" style="width:50%;">\n' +
    '                            <div class="mod mod-pic mod-picone" style="margin:4px 9px 0px 18px;"><a>\n' +
    '                                <img\n' +
    '                                        src=""\n' +
    '                                        title="" height="" data-imgid="" fit=""></a>\n' +
    '                            </div>\n' +
    '                            <div class="mod mod-text " style="margin:4px 18px 4px 18px;">\n' +
    '                                <div data-role="line" style="line-height: 1.2;"><font size="2"></font></div>\n' +
    '                            </div>\n' +
    '                        </div>'


var community_img_html = ' <div class="cell" style="width:50%;">\n' +
    '                            <div class="mod mod-layout_floor " data-role="sub-container"\n' +
    '                                 style="background-size:100% 100%;margin:0px 6px 0px 12px;background-color:#ececec;">\n' +
    '                                <div class="mod mod-layout_floor " data-role="sub-container"\n' +
    '                                     style="background-size:100% 100%;margin:1px 1px 1px 1px;background-color:#FFFFFF;">\n' +
    '                                    <div class="mod mod-layout_floor " data-role="sub-container"\n' +
    '                                         style="background-size:100% 100%;margin:5px 5px 5px 5px;background-color:#ececec;">\n' +
    '                                        <div class="mod mod-pic mod-picone"><a\n' +
    '                                        ><img\n' +
    '                                                src=""\n' +
    '                                                title="" height="" data-imgid="1197997563" fit=""></a></div>\n' +
    '                                        <div class="mod mod-text " style="margin:0px 8px 8px 8px;">\n' +
    '                                            <div data-role="line" style="text-align: left;"><font size="2"></font>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>'

var post_house_html='                        <div class="cell" style="width:50%;">\n' +
    '                            <div class="mod mod-layout_floor " data-role="sub-container"\n' +
    '                                 style="background-size:100% 100%;margin:0px 6px 0px 12px;background-color:#ececec;">\n' +
    '                                <div class="mod mod-layout_floor " data-role="sub-container"\n' +
    '                                     style="background-size:100% 100%;margin:1px 1px 1px 1px;background-color:#FFFFFF;">\n' +
    '                                    <div class="mod mod-layout_floor " data-role="sub-container"\n' +
    '                                         style="background-size:100% 100%;margin:5px 5px 5px 5px;background-color:#ececec;">\n' +
    '                                        <div class="mod mod-pic mod-picone" style=""><a><img\n' +
    '                                                src="//pic.kuaizhan.com/g3/86/e2/4b9b-89a9-402c-8f46-4bac193dd9ea05/imageView/v1/thumbnail/640x0"\n' +
    '                                                title="" height="" data-imgid="6409747257" fit=""></a></div>\n' +
    '                                        <div class="mod mod-text " style="margin:0px 8px 8px 8px;">\n' +
    '                                            <div data-role="line" style="text-align: left; line-height: 1.5;"><font\n' +
    '                                                    size="2">微爱医行心灵第一驿站</font></div>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>'