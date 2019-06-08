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