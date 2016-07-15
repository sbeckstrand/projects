//Problem: Dont want people seeing spoilers
//Solution: Hide psoilers and reveal them through user interfaction

//1, Hide spoiler
$(".spoiler span").hide();
//2, Add a button
$(".spoiler").append("<button>Reveal Spoiler!</button>");
//3, When button pressed
$(".spoiler button").click(function() {
  //3.1, Show spoiler next to the button clicked
  $(this).prev().show();
  //3.2, Get rid of button
  $(this).remove();
});
