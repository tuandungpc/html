$(document).ready(function() {

    $('ul.tabs li').click(function() {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    });

});
$(function() {
    $("#datepicker").datepicker({
        duration: "fast",
        showAnim: "slide",
        showOptions: { direction: "left" }
    });
    $("#datepicker1").datepicker({
        duration: "fast",
        showAnim: "slide",
        showOptions: { direction: "left" }
    });
});
new WOW().init();

$(document).ready(function() {
    if ($('#back-to-top').length) {
        var scrollTrigger = 100,
            backToTop = function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function() {
            backToTop();
        });
        $('#back-to-top').on('click', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
});

function _mmenu(n) {
    var i = "right",
        t;
    arguments.length > 1 && (i = arguments[1]), t = !0, arguments.length > 2 && (t = arguments[2]), $(document).ready(function() { $("#" + n).mmenu({ offCanvas: { position: i, zposition: "front" } }, { clone: t }) })
}