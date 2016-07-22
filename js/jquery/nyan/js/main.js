function loop() {
    $('#nyan').animate({left: "+=100", top: "+=50" }, {
        duration: 1000,
        complete: function() {
            $('#nyan').animate({left: "+=100",top: 0}, {
                duration: 1000,
                complete: loop});
        }});
}

$(window).keypress(function(e) {
  if(e.which == 0 || e.keyCode ==32) {
    e.preventDefault()
    loop();
  }
})
