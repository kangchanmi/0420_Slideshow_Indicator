/* eslint-disable */

$(function () {

    $("#control a").click(function () {

        /* 이미지 번호 표기 */
        for (var i = 0; i < 4; i++) {

            $("#pic div").eq(i).children("a").append("<span class='idxing'>" + (i + 1) + "</span>")
            /* 이미지 번호 표기 */
        }
        $("span.idxing").css({
            "font-size": "80px",
            "position": "absolute",
            "left": "50%",
            "top": "60%",
            "color": "#f80",
            "font-weight": "bold"
        });

        var num = Number($(this).text()) - 1; // 0, 1, 2, 3
        // = 선택한 문자 자료형(1, 2, 3, 4)을 숫자 자료형으로 바꿔달라
        $(this).addClass("on").siblings().removeClass("on");
        // = 선택한 a에 "on"이라는 클래스를 부여하고, 나머지는 부여하지 X

        // $("#pic>div").filter(":visible").stop(true).fadeOut(350).end().eq(num).stop(true).fadeIn(350)
        $("#pic>div").filter(":visible").stop(true).fadeOut(350);
        $("#pic>div").eq(num).stop(true).fadeIn(350);
        // visible = display : none이 아닌 것들

    });


    $("#control a:first").addClass("on").add("#pic>div:first").show();

});









//$(function () {
//    $("#control a:first-child").click(function () {
//        $("#pic img").css({
//            "display": "none"
//        });
//        $("#pic #img1").css({
//            "display": "block"
//        });
//        $(this).addClass(on);
//    });
//
//    $("#control a:nth-child(2)").click(function () {
//        $("#pic img").css({
//            "display": "none"
//        });
//        $("#pic #img2").css({
//            "display": "block"
//        });
//    });
//
//    $("#control a:nth-child(3)").click(function () {
//        $("#pic img").css({
//            "display": "none"
//        });
//        $("#pic #img3").css({
//            "display": "block"
//        });
//    });
//
//    $("#control a:nth-child(4)").click(function () {
//        $("#pic img").css({
//            "display": "none"
//        });
//        $("#pic #img4").css({
//            "display": "block"
//        });
//    });
//
//});









//$(document).ready(function () {
//    $("#control a").click(function () {
//        var num = Number($(this).text()) - 1; // 0, 1, 2, 3
//        $(this).addClass("on").siblings().removeClass("on");
//        $("#pic > div").filter(":visible").stop(true).fadeOut(350).end().eq(num).stop(true).fadeIn(350);
//    });
//    $("#control a:first").addClass("on").add("#pic > div:first").show();
//});
