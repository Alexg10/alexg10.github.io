
$(document).ready(function(){


	$('.container').removeClass('animate-enter-active');
	var wow = new WOW(
	  {
	    offset:300,
	    mobile: false,
	  }
	);
	wow.init();

    if (Modernizr.mq("screen and (max-width:1025px)")) {
        $('.project_link').on("click", function(e){
            e.preventDefault;
            $(this).css('height','220');
            $('.about_link').css('height','60');
            $('.email_link').css('height','60');
        });
        $('.about_link').on("click", function(e){
            e.preventDefault;
            $(this).css('height','370');
            $('.project_link').css('height','60');
            $('.email_link').css('height','60');
        });
        $('.email_link').on("click", function(e){
            e.preventDefault;
            $(this).css('height','100');
            $('.about_link').css('height','60');
            $('.project_link').css('height','60');
        });

    };

    $('.menu').click(function(e) {
		e.preventDefault();
		$this=$(this);
		if ( $('.menu_button').hasClass('active') ){			
			$(".menu_button").removeClass('active');
			$(".menu_content").removeClass('active');
			setTimeout(function() {
				$('.menu_button').parent().removeClass('white_menu');
				$('.container').removeClass('active');
			},50);
		}else{
			$('.menu_button').addClass('active').parent().addClass('white_menu');
			$('.container').addClass('active');
			setTimeout(function() {
				$('.menu_content').addClass('active');
			},50);
		}
    });

    $('.link_width').click(function(e) { 
    	e.preventDefault();
  
    	$this=$(this);		
    	var link= $this.attr("href");
		$(".menu_button").removeClass('active');
		$(".menu_content").removeClass('active');
		$this.parent().removeClass('white_menu');
		$('.container').removeClass('active');
		setTimeout(function() {
						
		},200);
		setTimeout(function() {
			$('.container').addClass('animate-leave-active');
		},600);
		setTimeout(function() {

		document.location = link;
		},1000);
    });

    $('.link_home ').click(function(e) { 
    	e.preventDefault();  
    	$this=$(this);		
    	var link= $this.attr("href");
    	$('.container').addClass('animate-leave-active');
  		setTimeout(function() {
		document.location = link;
		},400);
    });

    $('.link_projet').click(function(e) { 
    	e.preventDefault();      
    	$this=$(this);		
    	var link= $this.attr("href");
    	$('.container').addClass('animate-leave-active');
  		setTimeout(function() {
		document.location = link;
		},400);
    });

    $('.next_project ').click(function(e) { 
    	e.preventDefault();  
    	$this=$(this);		
    	var link= $this.attr("href");
    	$('.container').addClass('animate-enter-active');
  		setTimeout(function() {
		document.location = link;
		},400);
    });
        $('.previous_project ').click(function(e) { 
        	e.preventDefault();      
        	$this=$(this);		
        	var link= $this.attr("href");
        	$('.container').addClass('animate-leave-active');
      		setTimeout(function() {
    		document.location = link;
    		},400);
        });

    $('.device_mobile').on("click", function(e){
    	e.preventDefault;
    	$(".desktop_resizable").addClass('responsive');
    	$('.device_desktop').removeClass('link_active');
    	$('.device_mobile').addClass('link_active');
    });

    $('.device_desktop').on("click", function(e){
    	e.preventDefault;
    	$(".desktop_resizable").removeClass('responsive');
    	$('.device_desktop').addClass('link_active');
    	$('.device_mobile').removeClass('link_active');
    });

    $('.fb').on("click", function(e){
        ga('send', 'event', 'button', 'click', 'fb');
    });

    $('.twitter').on("click", function(e){
        ga('send', 'event', 'button', 'click', 'twitter');
    });

    $('.linkedin').on("click", function(e){
        ga('send', 'event', 'button', 'click', 'linkedin');
    });

    $('.gplus').on("click", function(e){
        ga('send', 'event', 'button', 'click', 'gplus');
    });

    $('.soundcloud').on("click", function(e){
        ga('send', 'event', 'button', 'click', 'soundcloud');
    });
    
    $('.instagram').on("click", function(e){
        ga('send', 'event', 'button', 'click', 'instagram');
    });


});