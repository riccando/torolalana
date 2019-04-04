	    
// script template ghost
	    var menu = $('.menu-mega');
	    var origOffsetY = menu.offset().top;

	    function scroll() {     
	    	if ($(window).scrollTop() >= origOffsetY) { 
	    		$('.menu-mega').addClass('sticky');
	    		$('.espacement').addClass ('menu-padding');
	    		console.log('mijan');     
	    	} else {         
	    		console.log('mande'); 
	    		$('.menu-mega').removeClass('sticky');
	    		$('.espacement').removeClass ('menu-padding');     
	    	}     
	    	if ($(window).scrollTop()>$('.espacement').offset().top+100) {
	    	        $('#scroll').fadeIn(); 
	    	}else{
	    	        $('#scroll').fadeOut('slow');
		    } 
		} 
		document.onscroll = scroll;

	    $(".three").click(function(){
		    $('.hamburger').toggleClass("is-active");
		});
		$('a').click(function(e){
			e.preventDefault();
		});
		// manokatra menu hamburger
		$(".three").on('click', function(){
		      $(".menu_haburger").toggle();
		  });
		$('#scroll').click(function(){
	        $("html, body").animate({ scrollTop: 0 }, 600);
	        return false;
	    });

	    $('.mega-menu-corp .list-titre').bind("mouseenter", function(){
			showDropdown(this);
		}).bind("mouseleave", function(){
			hideDropdown(this);
		});
		function showDropdown(item){
			$(item).children(".sous-menu-mega").stop(true, true).delay(0).fadeIn(300).addClass("drop-up");
		}
		function hideDropdown(item){
			$(item).children(".sous-menu-mega").stop(true, true).delay(0).fadeOut(300).removeClass('drop-up');
			$(item).children(".sous-menu-mega").find(".sous-menu-mega").stop(true, true).delay(300).fadeOut(300);
		}

		$('.plus-menu').bind("mouseenter", function(){
			showDropdown1(this);
		}).bind("mouseleave", function(){
			hideDropdown1(this);
		});
		function showDropdown1(item){
			$(item).children(".menu-plus").stop(true, true).delay(0).fadeIn(300).addClass("drop-up");
		}
		function hideDropdown1(item){
			$(item).children(".menu-plus").stop(true, true).delay(0).fadeOut(300).removeClass('drop-up');
			$(item).children(".menu-plus").find(".menu-plus").stop(true, true).delay(300).fadeOut(300);
		}

		function resizemenu() {
			var heightUl=$('ul.mega-menu-corp').outerHeight()+$('ul.mega-menu-corp').offset().top;
			$('.menu-plus').empty();
			$('ul.mega-menu-corp li.list-titre').each(function(i,elem){
				
				var heightLi=$(elem).offset().top+$('ul.mega-menu-corp').outerHeight();

				if (heightLi > heightUl) {
					$('.plus-menu').show();
					text=$(elem).children("a").text();
					href=$(elem).children("a").attr("href");
					$('.menu-plus').append("<li class='list-menu-plus'><a href='"+href+"'>"+text+"</a></li>");

				} else{
					$('.plus-menu').hide();
				}
				
			});
			
		}
		resizemenu();
		respo_grid();
		$(window).resize(function() {
			resizemenu();
			document.onscroll = scroll;
			respo_grid();
			if ($(window).width()<=768 || $(window).width()>=1200 ) {
				 location.reload();
			}
			
		});

		function respo_grid(){
			if($(window).width()<=757){
				if($('.block-beny').hasClass("liste")){
					$('.block-beny').toggleClass("liste grid");
					$(".btn1-list").removeClass("active");
					$(".btn1-grid").addClass("active");
					$(".btn2-list").removeClass("active");
					$(".btn2-grid").addClass("active");
				}
			}
		}

		$('.js-slideout-toggle').click(function(){
			$("#menu").toggleClass("slideMenuWidth"),
			$("#main").toggleClass("slideSiteWidth"),
			$('.overlay-respo').toggleClass('miseo'),
			$('body').toggleClass('overfl');
		});
		$('.overlay-respo').click(function(){
			$("#menu").toggleClass("slideMenuWidth"),
			$("#main").toggleClass("slideSiteWidth"),
			$('.overlay-respo').toggleClass('miseo'),
			$('.hamburger').toggleClass("is-active");
			$('body').toggleClass('overfl');
		});
		
		$("body").on("click", ".accordion-Pnya > header ", function(e) {
	        e.preventDefault();
	        var $this = $(this),
	            p = $this.parents(".accordion-Pnya"),
	            sibAcc = p.siblings(".accordion-Pnya");
	        if (p.parent().hasClass("accordion-Pnya-toggle")) {
	            sibAcc.find(".accordion-Pnya-content").slideUp();
	            sibAcc.removeClass("active");
	        }
	        p.find(".accordion-Pnya-content").slideToggle();
	        p.toggleClass("active");
	    });
	    $(".avec-sous-menu a").click(function(event){
	        if($(this).next('ul').length){
	            event.preventDefault();
	        	var $this = $(this),
		        p = $this.parents(".avec-sous-menu"),
		        sibAcc = p.siblings(".avec-sous-menu");
		        if (p.parent().hasClass("miverina")) {
		            sibAcc.find(".menu-sub").slideUp('slow');
		            sibAcc.removeClass("active");
		        }
		        p.find(".menu-sub").toggle('slow');
		        p.toggleClass("active");
	        }
	    });
	    $("body").on("click","#nav-icon1", function(e){
	    	var io=$(this),
	    		p=io.parents('footer');
	    		p.find('.footer-content').slideToggle();
	    		
		    	var $target = $('html,body'); 
				$target.animate({scrollTop: $target.height()}, 1000);
	    		
	    });
// fin script

// // script slick
	$(".slide-partenaire").slick({
		  slidesToShow: 6,
		  slidesToScroll: 1,
		  autoplay: true,
	  	  autoplaySpeed: 2000,
	  	  responsive: [
			    {
			      breakpoint: 992,
			      settings: {
			        slidesToShow: 4,
			        slidesToScroll: 1
			      }
			    },
			    {
			    	breakpoint:768,
			    	settings:{
			    		slidesToShow:2,
			    		slidesToScroll: 2
			    	}
			    }
			    ]
	});
	$('.slick-prev-perso').click(function(){
		$('.slick-prev').click();
	});
	$('.slick-next-perso').click(function(){
		$('.slick-next').click();
	});
//  fin slick
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
	});
	$("#zoom_03").elevateZoom({
		gallery:'gallery_01', 
		cursor: 'pointer', 
		galleryActiveClass: "active", 
		zoomType: 'inner',
  		cursor: 'crosshair'
	}); 

	$("#zoom_03").bind("click", function(e) {  
	  var ez =   $('#zoom_03').data('elevateZoom');
	  ez.closeAll();
	  return false;
	}); 

	$('.slide3').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  focusOnSelect: true,
	  arrows: false,
	  vertical: true,
	  responsive: [
			    {
			      breakpoint: 576,
			      settings: {
			        vertical:false
			      }
			  	},
			  	{
			  		breakpoint:491,
			  		settings:{
			  			slidesToShow:2,
			  			vertical:false
			  		}
			  	}

			      
			  ]
	});
	$('.btn1-list').click(function(e){
		e.preventDefault();
		$(".btn1-grid").removeClass("active");
		$('.block-beny').removeClass("grid");
		$('.block-beny').addClass("liste");
		$(this).addClass("active");
		$(".btn2-list").addClass("active");
		$(".btn2-grid").removeClass("active");
	})
	$('.btn1-grid').click(function(e){
		e.preventDefault();
		$(".btn1-list").removeClass("active");
		$('.block-beny').removeClass("liste");
		$('.block-beny').addClass("grid");
		$(this).addClass("active");
		$(".btn2-list").removeClass("active");
		$(".btn2-grid").addClass("active");
	})
	$('.btn2-list').click(function(e){
		e.preventDefault();
		$(".btn2-grid").removeClass("active");
		$('.block-beny').removeClass("grid");
		$('.block-beny').addClass("liste");
		$(this).addClass("active");
		$(".btn1-list").addClass("active");
		$(".btn1-grid").removeClass("active");
	})
	$('.btn2-grid').click(function(e){
		e.preventDefault();
		$(".btn2-list").removeClass("active");
		$('.block-beny').removeClass("liste");
		$('.block-beny').addClass("grid");
		$(this).addClass("active");
		$(".btn1-list").removeClass("active");
		$(".btn1-grid").addClass("active");
	})