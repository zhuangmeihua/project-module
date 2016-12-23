/**
 * Created by Administrator on 2016/12/21.
 */
/*顶部返回icon*/
var $iconBack = $('.icon-back');
$iconBack.on('click',function () {
    window.history.back(-1);
});
