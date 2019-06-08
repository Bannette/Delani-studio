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
$("#submit").click(function() {
  var email = $("#email").val();
  alert(email + " we have received your message. Thank you for subscribing");
   $(".message")[0].reset();
});
});

var key = '1c2089a31a00d28af6cb0e553ed84697-us20';
var user = document.getElementById('username').value;
$("button").click(function(event) {
  event.preventDefault();
  alert("Dear " + user + ", we have received your message. Thank you for reaching out to us.");
});

$("button").on('click', function(){
  $('form').each(function(){
    this.reset();
  });
});