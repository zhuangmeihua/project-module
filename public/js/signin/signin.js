/**
 * Created by Administrator on 2016/12/21.
 */
/*顶部返回icon*/
var $iconBack = $('.icon-back');
$iconBack.on('click',function () {
    window.history.back(-1);
});
var $btReg = $('.bt-reg');
$btReg.on('click',function () {
    location.href = ('../signin/register.html');
});
var $btReg = $('.bt-reg');
$btReg.on('click',function () {
    location.href = ('../signin/register.html');
});
var $btPasswd = $('.bt-passwd');
$btPasswd.on('click',function () {
    location.href = ('../signin/passwd.html');
});
