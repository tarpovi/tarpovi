$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        $('nav').addClass('shrink');
    } else {
        $('nav').removeClass('shrink');
    }
});

$('#map').on('click', function () {
    $('#map iframe').css("pointer-events", "auto");
});

$('#map').on('mouseleave', function () {
    $('#map iframe').css("pointer-events", "none");
});
$('#open-terms').on('click',function () {
        $('#general-terms').css('display','inline');
});

$("#open-terms").click(function(event) {
    $('#general-terms').css('display','inline');
    event.stopPropagation();
});
$(document).click(function() {
    $('#general-terms').css('display','none');
});
$("#open-contact-form").click(function () {
    $("#contact-form").css('display','inline-block');
});
$('.form-control-date').datepicker({
    format: "dd/mm/yyyy",
    language: "bg"
});

$("#home").click(function() {
    $('html, body').animate({
        scrollTop: $("#jssor_1").offset().top
    },1000);
});
$("#extras").click(function() {
    $('html, body').animate({
        scrollTop: $("#info").offset().top -120
    },1000);
});
$("#navigate-to-houses").click(function() {
    $('html, body').animate({
        scrollTop: $(".houses-link-gallery").offset().top -120
    },1000);
});
$("#navigate-to-gallery").click(function() {
    $('html, body').animate({
        scrollTop: $("#jssor_2").offset().top -120
    },1000);
});
$("#navigate-to-map").click(function() {
    $('html, body').animate({
        scrollTop: $("#map").offset().top -120
    },1000);
});
$("#navigate-to-price").click(function() {
    $('html, body').animate({
        scrollTop: $("#price-and-contacts").offset().top -120
    },1000);
});
$("#reserve").click(function() {
    $("#contact-form").css('display','inline-block');
    $('html, body').animate({
        scrollTop: $("#price-and-contacts").offset().top -40
    },1000);
});
