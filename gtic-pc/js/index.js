require('../css/index.css');
import $ from './jquery.min';
//点击导航栏
$('menu li').click(function () {
    var targetId = $(this).data('target'),
        targetDom = $('#' + targetId);
    goToElement(targetDom);
});
//点击下一页图标
$('.next').click(function () {
    var thisDom = $(this).closest('section'),
        targetDom = thisDom.next();
    goToElement(targetDom);
});
//滚动时添加菜单选中
$(window).scroll(function () {
    var navList = $('[data-target]'),
        scrollTop = $(this).scrollTop();

    navList.each(function (i, el) {
        var targetId = $(this).data('target'),
            targetDom = $('#' + targetId),
            targetTop = targetDom.offset().top;
        if (i == navList.length - 1) {
            if (targetTop < scrollTop) {
                $('[data-target="' + targetId + '"]').addClass('on').siblings().removeClass('on');
                return false;
            }
        } else {
            var nextTargetId = $(navList[i + 1]).data('target'),
                nextTargetDom = $('#' + nextTargetId),
                nextTargetTop = nextTargetDom.offset().top;
            if (targetTop <= scrollTop && scrollTop < nextTargetTop) {
                addHightLight(targetId);
                return false;
            }
        }
    });

}).trigger('scroll');

function goToElement(targetDom) {
    var headerH = $('header').height(),
        targetId = targetDom.attr('id');
    if(!targetId) return;
    var targetTop = targetDom.offset().top;
    $('html,body').animate({scrollTop: targetTop+1}, 'slow', function () {
        addHightLight(targetId);
    });
}

function addHightLight(targetId) {
    $('[data-target="' + targetId + '"]').addClass('on').siblings().removeClass('on');
}



