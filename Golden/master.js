
var a = $(".menu li a");
var a1 = $(".menu li:first-child a");
var a2 = $(".menu li:nth-child(2) a");
var a3 = $(".menu li:nth-child(3) a");
var a4 = $(".menu li:nth-child(4) a");
var a5 = $(".menu li:nth-child(5) a");
a1.click(function () {
  console.log("aaa");
  a.removeClass("active");
  a1.addClass("active");
  $("html,body")
  .animate({
    scrollTop:"0"
  },1000);
});
a2.click(function () {
  a2.removeAttr("href");
  a.removeClass("active");
  a2.addClass("active");
  $("html,body")
  .animate({
    scrollTop:"670"
  },1000);
});
a3.click(function () {
  a.removeClass("active");
  a3.addClass("active");
  $("html,body")
  .animate({
    scrollTop:"1200"
  },1000);
});
a4.click(function () {
  a.removeClass("active");
  a4.addClass("active");
  $("html,body")
  .animate({
    scrollTop:"2200"
  },1000);
});
a5.click(function () {
  a.removeClass("active");
  a5.addClass("active");
  $("html,body")
  .animate({
    scrollTop:"4200"
  },1000);
});
$(window).scroll(function () {
  console.log($(window).scrollTop());
  if ($(window).scrollTop() > 670) {
    $("header").addClass("scroll");
    $("main").css("position","absolute");
    $("main").css("top","680px");
    $("footer").css("position","absolute");
    $("footer").css("top","5058px");
  }
  else {
    $("header").removeClass("scroll");
    $("main").css("position","relative");
    $("main").css("top","0px");
    $("footer").css("position","absolute");
  }
  if ($(window).scrollTop() > 670 && $(window).scrollTop() < 1200) {
    a.removeClass("active");
    a2.addClass("active");
  }else if ($(window).scrollTop() >= 1200 && $(window).scrollTop() < 2200) {
    a.removeClass("active");
    a3.addClass("active");
  }else if ($(window).scrollTop() >= 2200 && $(window).scrollTop() < 4200) {
    a.removeClass("active");
    a4.addClass("active");
  }else if ($(window).scrollTop() >= 4200) {
    a.removeClass("active");
    a5.addClass("active");
  }else if ($(window).scrollTop() <= 670){
    a.removeClass("active");
    a1.addClass("active");
  }
});

$("a#toTop").click(function () {
  $("html,body").animate({
    scrollTop:"0"
  },1000);
});
