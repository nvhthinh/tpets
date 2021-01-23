resize = () => {
    var width = $(window).width();
    if (width < 992) {
        $("#nav_head_3").removeClass('flex-column').addClass('nav-pills nav-fill');
    } else {
        $("#nav_head_3").removeClass('nav-pills nav-fill').addClass('flex-column');
    }
    // for mb
    if (width < 751) {
        $(".desk").css("display", "none");
        $(".mb").css("display", "block");
    } else {
        $(".desk").css("display", "block");
        $(".mb").css("display", "none");
    }
    //for tablet
    if (width < 1450) {
        $(".search_2 span").css("display", "none");
    } else {
        $(".search_2 span").css("display", "inline-block");
    }
}
window.onload = function() {
    resize();
};