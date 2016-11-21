$('#house1-button').on("click", function () {
    $('.houses-homescreen').addClass("invisible");
    $(this).addClass("selected");
    $('#house2-button').removeClass("selected");
    $('#house1').removeClass("invisible");
    $('#house2').addClass("invisible");
    $('.house-selection').css('background-image','url("Gallery/left-selected-compresed.png")');
});
$('#house2-button').on("click", function () {
    $('.houses-homescreen').addClass("invisible");
    $(this).addClass("selected");
    $('#house1-button').removeClass("selected");
    $('#house2').removeClass("invisible");
    $('#house1').addClass("invisible");
    $('.house-selection').css('background-image','url("Gallery/right-selected-compresed.png")');
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