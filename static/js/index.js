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
                $('.article ul li:last a').attr('href', '/article/'+obj_info['result'][i]['id'])
                $('.article ul li:last img').attr('src', obj_info['result'][i]['image'])
                $('.article ul li:last .text h3').text(obj_info['result'][i]['title'])
                $('.article ul li:last .text p').text(obj_info['result'][i]['introduction'])
                $('.article ul li:last .time').html("<span class='k-i-time'></span>" + obj_info['result'][i]['Release_time'])
                $('.article ul li:last .rl-info p:first').html("<span class='k-i-art-scan'></span>" + obj_info['result'][i]['page_views'])
                $('.article ul li:last .rl-info p:last').html("<span class='k-i-art-like'></span>" + obj_info['result'][i]['like_num'])
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