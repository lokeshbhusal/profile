/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    "use strict";
    $(".nav li").click(function () {
        $(".nav li").removeClass("active");
        $(this).addClass("active");
    });
    
    $(".page-scroll a").click(function(e){
        if($("html").css("scroll-behavior") == null){
            var jump = $(this).attr("href");
            var new_position = $(jump).offset();
            $("html, body").stop().animate({ scrollTop: new_position.top }, 500);
            e.preventDefault();
        }
    })

    $(".navbar-brand").click(function () {
        $(".nav li").removeClass("active");
    });

    $('.navbar-collapse ul li a').click(function () {
        $('.navbar-collapse').collapse('hide'); //bootstrap 3.x by Richard
    });
});