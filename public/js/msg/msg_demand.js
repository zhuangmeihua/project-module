/**
 * Created by Administrator on 2016/12/21.
 */
/*底部导航拦跳转*/
var $indexBar = $('.end_one');
$indexBar.on('click',function () {
    location.href = ('../index/index.html');
});
var $woBar = $('.end_five');
$woBar.on('click',function () {
    location.href = ('../info/beforesignin.html');
});
var $appointBar = $('.end_two');
$appointBar.on('click',function () {
    location.href = ('../appointment/appointment.html');
});