$(document).ready(function(){

	$("header nav li:first-of-type").click(function(){ //detects when the hamburger menu clicked, toggles class "slideDown"
		// console.log("testing");
		$(this).parent().toggleClass("slideDown"); 
	});
	// CAROUSEL
	// var pauseInterval = false;

	// var interval = window.setInterval(rotateSlides, 3000)

	// function rotateSlides(){
	// 	var $firstSlide = $('.carousel').find('div:first');
	// 	var width = $firstSlide.width();

	// 	$firstSlide.animate({marginLeft: -width}, 1000, function(){
	// 		var $lastSlide = $('.carousel').find('div:last')
	// 		$lastSlide.after($firstSlide);
	// 		$firstSlide.css({marginLeft: 0})
	// 	});
	// }

	// $('#left-arrow').click(previousSlide);
	// $('#right-arrow').click(nextSlide);
	// $('#left-arrow2').click(previousSlide);
	// $('#right-arrow2').click(nextSlide);
	// $('#left-arrow3').click(previousSlide);
	// $('#right-arrow3').click(nextSlide);
	// $('.slide-image').click(nextSlide);

	$('.left-arrow').click(previousSlide);
	$('.right-arrow').click(nextSlide);
	$('.slide-image').click(nextSlide);
	$(".read-more").click(showMore);
	$(".read-more2").click(showMore2);
	$(".read-more3").click(showMore3);
	// event.preventDefault();

	function previousSlide(){
		// window.clearInterval(interval);

		//grabs the id for the carousel in the parent elemtn
		// var carouselIdValue = $(this).attr('id');
		// console.log(carouselIdValue);

		// var carouselIdValue = $(this).parent('id');
		var carouselIdValue = '#' + ($(this).parent().attr('id'));
		console.log(carouselIdValue);

		var $currentSlide = $(carouselIdValue).find('div:first');
		var width = $currentSlide.width();
		var $previousSlide = $(carouselIdValue).find('div:last')
		$previousSlide.css({marginLeft: -width})
		$currentSlide.before($previousSlide);
		// $previousSlide.animate({marginLeft: 0}, 1000, linear, function(){
		// 	interval = window.setInterval(rotateSlides, 3000);
		// });
		$previousSlide.animate({marginLeft: 0}, 500, 'linear');

	}

	function nextSlide(){
		var carouselIdValue = '#' + ($(this).parent().attr('id'));
		// window.clearInterval(interval);
		var $currentSlide = $(carouselIdValue).find('div:first');
		var width = $currentSlide.width();
		$currentSlide.animate({marginLeft: -width}, 500, 'linear', function(){
			var $lastSlide = $(carouselIdValue).find('div:last')
			$lastSlide.after($currentSlide);
			$currentSlide.css({marginLeft: 0})
			// interval = window.setInterval(rotateSlides, 3000);
		});
	}	
    	
	function showMore(){
		event.preventDefault();
		$(".show-on-click").toggle(500);
		$(".read-more").hide();
		// $(".read-less").show();
		}

	function showMore2(){
		event.preventDefault();
		$(".show-on-click2").toggle(500);
		$(".read-more2").hide();
		// $(".read-less").show();
		}

	function showMore3(){
		event.preventDefault();
		$(".show-on-click3").toggle(500);
		$(".read-more3").hide();
		// $(".read-less").show();
		}

	// HOMEPAGE NAVIGATION
	//.fadeIn()
	$('#button-homepage-nav').click(function(){
		event.preventDefault();
		// alert( 'Handler for .click() called.' );
		// console.log('testing');
		// $('section').removeClass('hide');
		$('#homepage-show-buttons').fadeIn();
		// $('section:first').addClass('hide');
		$('#button-homepage-nav').hide();
	});


	// function showLess(){
	// 	event.preventDefault();
	// 	$("#show-this-on-click").slideUp("fast");
	// 	$(".read-less").hide();
	// 	$(".read-more").show();
	// 	}

	// 	$("img").mouseover(function(){
 //    	$("img").css("border", "5px solid #033048");
 //    	});

 //    $("img").mouseout(function(){
 //    	$("img").css("border", "none");
 //    	});

 //    $(".button").click(function(){
	// 	event.preventDefault();
 // 		alert( "We're Not Ready For Sign-Ups...Yet." );
 // 		});

});