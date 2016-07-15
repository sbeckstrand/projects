//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $('<p></p>');

//image overlay
$overlay.append($image);

//Caption
$overlay.append($caption);

//Add overlay
$("body").append($overlay);


//Capture the click event on a link to an image
$("#imageGallery a").click(function(event) {
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  
  //Update overlay with the image linked
  $image.attr("src", imageLocation);
  
  //Show the overlay
  $overlay.show();
  
 
  //2Get child's alt attribute and set caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
  
});

//When overlay is clicked
$overlay.click(function() {
  //Hide the overlay
  $(this).hide();

});
  