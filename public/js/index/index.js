/**
 * Created by Administrator on 2016/12/14.
 */
//获取轮播每个元素
var $slider = $('.slider_block');
//获取轮播容器
var $sliderCon = $('.slider_container');
//获取所有的点
var $point = $('.point_block');

//获取屏幕宽度
var wd = $(window).width();
//获取轮播个数
var lg = $slider.length;
//计算容器宽度
var allWd = wd * lg;
//计算元素高度
var hg = wd * 0.85;
//设置容器宽度
$sliderCon.width(allWd);
//设置元素宽高
$slider.width(wd).height(hg);

//表示当前元素
var swipeNow = 0;
var slideTime;
//添加滑动事件
$sliderCon.on('swipeLeft', function(){
    console.log('touch left');
    clearTimeout(slideTime);
    if(swipeNow < lg - 1){
        //计算滑动距离，改变当前元素
        var swipeWd = (++swipeNow) * wd;
        $sliderCon.css('transform', 'translateX(-'+ swipeWd +'px)');
        //改变点的选中
        $point.removeClass('active').eq(swipeNow).addClass('active');
        autoSwipe();
    }
});
$sliderCon.on('swipeRight', function(){
    console.log('touch right');
    clearTimeout(slideTime);
    if(swipeNow > 0){
        //计算滑动距离，改变当前元素
        var swipeWd = (--swipeNow) * wd;
        $sliderCon.css('transform', 'translateX(-'+ swipeWd +'px)');
        //改变点的选中
        $point.removeClass('active').eq(swipeNow).addClass('active');
        autoSwipe();
    }
});
function autoSwipe(){
    slideTime = setTimeout(function(){
        if(swipeNow < lg - 1){
            //计算滑动距离，改变当前元素
            var swipeWd = (++swipeNow) * wd;
            $sliderCon.css('transform', 'translateX(-'+ swipeWd +'px)');
            //改变点的选中
            $point.removeClass('active').eq(swipeNow).addClass('active');
            autoSwipe();
        }
    }, 2000);
}
autoSwipe();
/*下拉选择框*/
var $queyrBlock = $('.query_block');
$queyrBlock.on('tap', function(){
    var $self = $(this);
    var index = $self.index();
    console.log(index);
    if($self.hasClass('active')){
        $self.removeClass('active');
        $('.down-box').eq(index).hide();
    }else{
        $queyrBlock.removeClass('active');
        $self.addClass('active');
        $('.down-box').hide().eq(index).show();
    }
});
/*价格选择框*/
$('.query_price').on('tap', function(){
    var $self = $(this);
    if($self.hasClass('active-down')){
        console.log('up');
        $self.removeClass('active-down').addClass('active-up');
    }else if($self.hasClass('active-up')){
        console.log('normal');
        $self.removeClass('active-up');
    }else{
        console.log('down');
        $self.addClass('active-down');
    }
});
/*底部导航拦跳转*/
var $msgBar = $('.end_four');
$msgBar.on('click',function () {
    location.href = ('../msg/msg_demand.html');
});
var $woBar = $('.end_five');
$woBar.on('click',function () {
   location.href = ('../info/beforesignin.html');
});
var $appointBar = $('.end_two');
$appointBar.on('click',function () {
    location.href = ('../appointment/appointment.html');
});




