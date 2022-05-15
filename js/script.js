// setTimeout(function(){
// $(".preloader").fadeOut();
// },2000)

$('.counter').counterUp({
    delay: 10,
    time: 1000
});

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
  relativeInput: true
});

$('.testi-slider').slick({
  fade:true,
  arrows:false,
  asNavFor:'.bottom-slider',
})

$('.bottom-slider').slick({
  slidesToShow:5,
  asNavFor:'.testi-slider',
  centerMode:true,
  centerPadding:"0",
    arrows:true,
   prevArrow:'<i class="fas fa-long-arrow-alt-left prev"> See Previous</i>',
   nextArrow:  '<i class="fas fa-long-arrow-alt-right next"> See next </i> '
})


$('#bar1').barfiller();
$('#bar2').barfiller();
$('#bar3').barfiller();
$('#bar4').barfiller();
$('#bar5').barfiller();
$('#bar6').barfiller();




$(window).scroll(function(){
  console.log($(window).scrollTop())

  if($(window).scrollTop()> 300){
    $(".menu").addClass("scroll-nav")
  }else{
    $(".menu").removeClass("scroll-nav")
  }



  if($(window).scrollTop()> 550){
    $(".top_button").fadeIn()
  }else{
    $(".top_button").fadeOut()
  }


})



$(".top_button").click(function(){
  $("html,body").animate({
    scrollTop:0
  },1000)
})