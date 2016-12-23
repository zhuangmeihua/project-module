/**
 * Created by Administrator on 2016/12/19.
 */
/*底部导航拦跳转*/
var $msgBar = $('.end_four');
$msgBar.on('click',function () {
    location.href = ('../msg/msg_demand.html');
});
var $indexBar = $('.end_one');
$indexBar.on('click',function () {
    location.href = ('../index/index.html');
});
var $appointBar = $('.end_two');
$appointBar.on('click',function () {
    location.href = ('../appointment/appointment.html');
});
var $login = $('.login');
$login.on('click',function () {
    location.href = ('../signin/signin.html');
});
var $regis = $('.regis');
$regis.on('click',function () {
    location.href = ('../signin/register.html');
});
var $iconSet = $('.icon-set');
$iconSet.on('click',function () {
    location.href = ('../info/info_detail.html');
});
var $infoContent = $('.wofa');
$infoContent.on('click',function () {
    location.href = ('../component/component.html');
});
