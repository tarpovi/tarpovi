$('#house1-button').on("click", function () {
    $('.houses-homescreen').addClass("invisible");
    $(this).addClass("selected");
    $('#house2-button').removeClass("selected");
    $('#house1').removeClass("invisible");
    $('#house2').addClass("invisible");
    $('.house-selection').css('background-image','url("img/Navigation/left.jpg")');
});
$('#house2-button').on("click", function () {
    $('.houses-homescreen').addClass("invisible");
    $(this).addClass("selected");
    $('#house1-button').removeClass("selected");
    $('#house2').removeClass("invisible");
    $('#house1').addClass("invisible");
    $('.house-selection').css('background-image','url("img/Navigation/right.jpg")');
});
$(".thumbnails1-img").on("click",function() {
    var src = $(this).attr("src");
    console.log(src);
    $("#house1-image").attr("src", src);
});
$(".thumbnails2-img").on("click",function() {
    var src = $(this).attr("src");
    console.log(src);
    $("#house2-image").attr("src", src);
});