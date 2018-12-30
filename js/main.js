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