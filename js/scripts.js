$(document).ready(function(){
    $(".tgl p").hide();
  $("#design").click(function(){
      $("#design img").toggle();
     $("#design p").toggle();
  });
  $("#develop").click(function(){
    $("#develop img").toggle();
   $("#develop p").toggle();
});
$("#management").click(function(){
    $("#management img").toggle();
   $("#management p").toggle();
});

$(".para").hover(function(){
  $(".para p").show().css({
    "position":"absolute",
    "color": "white",
    "top": "47.5%",
    "left": "22%"
  });
});
$(".para").mouseleave(function (){
  $(".para p").hide();
});

$(".para1").hover(function(){
  $(".para1 p").show().css({
    "position":"absolute",
    "color": "white",
    "top": "47.5%",
    "left": "12%"
  });
});
$(".para1").mouseleave(function (){
  $(".para1 p").hide();
});

$(".para2").hover(function(){
  $(".para2 p").show().css({
    "position":"absolute",
    "color": "white",
    "top": "47.5%",
    "left": "22%"
  });
});
$(".para2").mouseleave(function (){
  $(".para2 p").hide();
});

$(".para3").hover(function(){
  $(".para3 p").show().css({
    "position":"absolute",
    "color": "white",
    "top": "47.5%",
    "left": "30%"
  });
});
$(".para3").mouseleave(function (){
  $(".para3 p").hide();
});
$(".para4").hover(function(){
  $(".para4 p").show().css({
    "position":"absolute",
    "color": "white",
    "top": "50%",
    "left": "22%"
  });
});
$(".para4").mouseleave(function (){
  $(".para4 p").hide();
});

$(".para5").hover(function(){
  $(".para5 p").show().css({
    "position":"absolute",
    "color": "white",
    "top": "47.5%",
    "left": "22%"
  });
});
$(".para5").mouseleave(function (){
  $(".para5 p").hide();
});
$(".para6").hover(function(){
  $(".para6 p").show().css({
    "position":"absolute",
    "color": "white",
    "top": "47.5%",
    "left": "22%"
  });
});
$(".para6").mouseleave(function (){
  $(".para6 p").hide();
});

$(".para7").hover(function(){
  $(".para7 p").show().css({
    "position":"absolute",
    "color": "white",
    "top": "47.5%",
    "left": "22%"
  });
});
$(".para7").mouseleave(function (){
  $(".para7 p").hide();
});
});



$(document).ready(function() {
  $("form#contacts").submit(function(event) {

    event.preventDefault();
    var name = $.trim($('#name').val());
    var email = $.trim($('#email').val());
    if ((name === '') || (email === '')) {
      alert('Please enter a name and your email address to continue.');
      return false;
    } else {
      alert("Hello " + name + ",   We have received your message.Thank you for reaching out for us");
      $(".submit")[0].reset();
    }
  });
});

