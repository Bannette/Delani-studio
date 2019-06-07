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
});
