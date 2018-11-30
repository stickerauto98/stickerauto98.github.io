var myElement = document.getElementById('hammer');

// create a simple instance
// by default, it only adds horizontal recognizers
var mc = new Hammer(myElement);
mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL });

// listen to events...
mc.on("swipeleft swipeup", function() {
  $(".next").click();
});
mc.on("swiperight swipedown", function() {
  $(".prev").click();
});

$(".divs1 .div1").each(function(e) {
	if (e != 0)
		$(this).hide();
});

$(".next").click(function(){
	if ($(".divs1 .div1:visible").next().length != 0)
		$(".divs1 .div1:visible").next().fadeIn("200").show().prev().hide();
	else {
		$(".divs1 .div1:visible").hide();
		$(".divs1 .div1:first").fadeIn("200").show();
	}
  //  return false;

});

$(".prev").click(function(){

	if ($(".divs1 .div1:visible").prev().length != 0)
	$(".divs1 .div1:visible").prev().fadeIn("200").show().next().hide();
else {
	$(".divs1 .div1:visible").hide();
	$(".divs1 .div1:last").fadeIn("200").show();
}
  //  return false;

});

$("#1").click(function(){

	$(".img1").fadeIn("200").show();
	$(".img2,.img3,.img4,.img5").hide();
});

$("#2").click(function(){

	$(".img2").fadeIn("200").show();
	$(".img1,.img3,.img4,.img5").hide();
});

$("#3").click(function(){

	$(".img3").fadeIn("200").show();
	$(".img1,.img2,.img4,.img5").hide();
});

$("#4").click(function(){

	$(".img4").fadeIn("200").show();
	$(".img1,.img2,.img3,.img5").hide();
});

$("#5").click(function(){

	$(".img5").fadeIn("200").show();
	$(".img1,.img2,.img3,.img4").hide();
});


//fontflex
(function($) {
    $.fn.fontFlex = function(min, max, mid) {
    var $this = this;
    $(window).resize(function() {
    var size = window.innerWidth / mid;
    if (size < min) size = min;
    if (size > max) size = max;
    $this.css('font-size', size + 'px');
    }).trigger('resize');
    };
    })(jQuery);
    
    $('body').fontFlex(12, 100, 70);
    
    $(".load").load("load.html"); 
    
    
    $(window).on('load', function() {			//on load
        
        
           setTimeout(function(){

        $(".load").fadeTo( "slow" , 0, function() {
          $(".main").show();

        $(this).remove();

          });

           }, 2222);
        
        });

        function getViewport() {
          //var viewportWidth = $(window).width();
          var viewportHeight = $(window).height();
          $('.div1,body,.load').css('height', viewportHeight + 'px');
          if (window.matchMedia("(orientation: landscape)").matches) {
            $('body').css({position: 'fixed'})
          }
      }
      
      $(window).on("orientationchange",function(){
        if (window.matchMedia("(orientation: portrait)").matches) {
         // alert("Device is in portrait mode")
        }
        if (window.matchMedia("(orientation: landscape)").matches) {
          $('body').css({position: 'fixed'})
        }
      });

      getViewport();
      $(window).on("orientationchange",function(){
        getViewport();
        window.scrollTo(0, 0);

      });
      $(window).resize(function() {
          getViewport()
      });


      $('.menu_on_off').click(function() {

        $("body").toggleClass('menu_on');
        
        });
        $('.menu').click(function() {

          $("body").removeClass('menu_on');
          
          });

        $(".menu").load("menu.html"); 


        var myinst = new Instafeed({
          target: 'myinst',
          get: 'user',
          userId: 1668751453,
          accessToken: '1668751453.1677ed0.a29353f401784641b3351ae2ba49b3d9',
          resolution: 'standard_resolution',
          limit: 9,
          sortBy: 'most-recent',
          
          template: '<div class="profile_pic" onclick="#" style="width:5em;height:5em;display:inline-block;background-image:url({{image}})"><div class="feed-content"><div class="likes">{{likes}}<a target="_blank" href="{{link}}"><span class="icon like"/></div></div></div>',
      //template:'<div class="profile_pic invert" onclick="void(0)" style="width:3em;height:3em;display:inline-block;background-image:url({{model.user.profile_picture}})"></div>'
      });
      
      myinst.run();



      if (document.addEventListener) {
        document.addEventListener("mousewheel", MouseWheelHandler(), false);
        document.addEventListener("DOMMouseScroll", MouseWheelHandler(), false);
    } else {
        sq.attachEvent("onmousewheel", MouseWheelHandler());
    }
    
    
    function MouseWheelHandler() {
        return function (e) {
            // cross-browser wheel delta
            var e = window.event || e;
            var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    
            //scrolling down?
            if (delta < 0) {
              $(".next").click();
                        }
    
            //scrolling up?
            else {
              $(".prev").click();
            }
            return false;
        }
    }


                                                            
    $('#contact_form').validator();

    $('#contact_form').on('submit', function (e) {
    if (!e.isDefaultPrevented()) {
    var url = "contact.php";
    
    $.ajax({
    type: "POST",
    url: url,
    data: $(this).serialize(),
    success: function (data)
    {
    var messageAlert = 'alert-' + data.type;
    var messageText = data.message;
    
    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><a href="javascript:;" class="alertclose" data-dismiss="alert" aria-hidden="true"></a>' + messageText + '</div>';
    if (messageAlert && messageText) {
    $('#contact_form').find('.messages').html(alertBox);
    $('#contact_form')[0].reset();
    }
    }
    });
    return false;
    }
    });






    function number_format(number, decimals, dec_point, thousands_sep) {
      number = (number + '')
        .replace(/[^0-9+\-Ee.]/g, '');
      var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function (n, prec) {
          var k = Math.pow(10, prec);
          return '' + (Math.round(n * k) / k)
              .toFixed(prec);
        };
      // Fix for IE parseFloat(0.55).toFixed(0) = 0;
      s = (prec ? toFixedFix(n, prec) : '' + Math.round(n))
        .split('.');
      if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
      }
      if ((s[1] || '')
          .length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1)
          .join('0');
      }
      return s.join(dec);
    }
    
    $(document).ready(function () {
    
      //Заменяем кнопку <button>рассчитать стоимость</button> на <span class="cur"></span>, в который будет подставляться рассчитанная сумма
      $('.price-button').click(function() {
        var boxPrice = $(this).closest('.col-md-4');
    
        function hideButton () {
          $(boxPrice).find('.price-button').hide();
          $(boxPrice).find('.footer-price').append('<h4>Итог: <span class="cur">0</span> <span class="rub">р.</span></h4>');
    
        };
        //анимация раскрытия блока с параметрами
        $(boxPrice).find('.box-price').animate({height: '390px'}, {'duration': 500}, {'easing': 'linear'}, hideButton());
    
      });
    
      //отслеживаем выделение параметра, чтобы в блоке был только 1 выделенный элемент
    
    
      ////////////Калькулятор
      //получаем значения параметров
      function valParam ($this) {
      
        $this.toggleClass('check-param');
      
         var isChecked = $this.hasClass('check-param');
        var total = parseInt($('.cur').html());
        var param = $this.data('param');    
        var group = $this.closest('div.way');
        var groupList = $(group).find('.check-param');
        
        if (groupList.length > 1) {
          for (var i = 0; i < groupList.length; i++) {
            var $el = $(groupList[i]);
            var elCheked = $(groupList[i]).hasClass('check-param');
            if (elCheked) {
              $el.removeClass('check-param');
              total = total - $el.data('param'); 
            }          
          }
          total = total + $this.data('param'); 
          $this.addClass('check-param');
        }
        
        
    
        if (isChecked) {
          total = total + param;
        } else {
          total = total - param;
        }
    
          $('.cur').html(total);
        };
    
    
      //отслеживаем изменение данных
      $('.item').on('click', function() {
        valParam($(this))
      });
    
    })
    