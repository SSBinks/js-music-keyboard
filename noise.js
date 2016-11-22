$(document).ready( function() {


  $('.note').on("click", function(){
    var sound = $(this).html();
    var noise = $('#' + sound + 'Audio')[0];
    noise.play();
  });


  $('body').keydown(function(event){
    var noise = $('#' + event.key + 'Audio')[0];
    noise.play();
  });
});
