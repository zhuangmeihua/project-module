/**
 * Created by Administrator on 2016/12/22.
 */
/*底部导航拦跳转*/
var $msgBar = $('.end_four');
$msgBar.on('click',function () {
    location.href = ('../msg/msg_demand.html');
});
var $woBar = $('.end_five');
$woBar.on('click',function () {
    location.href = ('../info/beforesignin.html');
});
var $indexBar = $('.end_one');
$indexBar.on('click',function () {
    location.href = ('../index/index.html');
});


