$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 10) {
      $(".navbar").addClass("active");
    } else {
      $(".navbar").removeClass("active");
    }
  });
});
$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 10) {
      $(".tophead").addClass("active");
    } else {
      $(".tophead").removeClass("active");
    }
  });
});
