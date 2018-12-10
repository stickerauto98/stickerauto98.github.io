

$(".load").load("load.html"); 
$("#scene").load("scene.html"); 






$(window).on('load', function() {			//on load


   setTimeout(function(){
$(".main").show();

$(".load").fadeTo( "slow" , 0, function() {
$(this).hide()

  });
   }, 1);

});



