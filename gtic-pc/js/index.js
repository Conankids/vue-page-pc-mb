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

startLive();

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

//直播
function startLive() {
  if(!isStart()) return;
  $('.player-shadow').hide();
  var player =  new TcPlayer('id_test_video', {
    "m3u8": "http://live.zhidx.com/AppName/StreamName.m3u8?auth_key=1520339532-0-0-0f52b3529cf19e9dd335def8604c1ddc",
    "flv": "http://live.zhidx.com/AppName/StreamName.flv?auth_key=1520339626-0-0-c918f95dde2a95b48164109d3afdaee8", //增加了一个flv的播放地址，用于PC平台的播放 请替换成实际可用的播放地址
    "autoplay" : false,      //iOS下safari浏览器，以及大部分移动端浏览器是不开放视频自动播放这个能力的
    "coverpic" : {"style":"cover", "src":require('../images/live-bg.jpg')},
    "width" :  '720',//视频的显示宽度，请尽量使用视频分辨率宽度
    "height" : '406',//视频的显示高度，请尽量使用视频分辨率高度
    "live" : true,
    "wording": {
      1: "直播未开始",
      2: "直播未开始",
      3: "直播未开始",
      4: "直播未开始"
    }
  });
}

//是否开始直播
function isStart() {
  var startTimeStr = '2018/03/09 09:00:00';
  var nowTime = new Date();
  var startTime = new Date(startTimeStr);
  return (nowTime>=startTime);
}

