/******************************************************
@ Init
******************************************************/
$(function () {
    mResizeCheck = $(window).width();			/* ios resize scroll bug */
    npos = $(window).scrollTop();				/* scroll top position */
    SW = $(window).width();					/* window width */
    SH = $(window).height();					/* window height */
});


/******************************************************
@ Document Ready
******************************************************/
$(document).ready(function () {
    $('#wrap').addClass('start');
});


/******************************************************
@ Window Load
******************************************************/
$(window).load(function () {
    
});


/******************************************************
@ Window Scroll
******************************************************/
$(window).scroll(function () {
    npos = $(window).scrollTop();
    SW = $(window).width();
    SH = $(window).height();

});


/******************************************************
@ Window Resize
******************************************************/
$(window).resize(function () {
    if (mResizeCheck != $(window).width()) {
        npos = $(window).scrollTop();
        SW = $(window).width();
        SH = $(window).height();

        mResizeCheck = $(window).width();
    }
});