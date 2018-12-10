

      $('.menu_on_off').click(function() {

        $("body,html").toggleClass('menu_on');
        
        });
        $('.menu').click(function() {

          $("body,html").removeClass('menu_on');
          
          });

        $(".menu").load("menu.html"); 


        $(".advantage").click(function() {
          var offset = -50; //Offset of 20px
      
          $('html, body').animate({
              scrollTop: $(".xxx").offset().top + offset
          }, 500);
      });

      $(".works").click(function() {
        var offset = -50; //Offset of 20px
    
        $('html, body').animate({
            scrollTop: $(".showcase").offset().top + offset
        }, 500);
    });

    $(".top").click(function() {
      var offset = 0; //Offset of 20px
  
      $('html, body').animate({
          scrollTop: $(".zzz").offset().top + offset
      }, 500);
  });


