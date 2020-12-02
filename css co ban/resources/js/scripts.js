$(document).ready(
	function(){
		$(".about-section").waypoint(
			function(direction){
				if(direction == "down"){
					$("nav").addClass("morong");
				}
			},{
				offset: "600px"
			}
			)
		$('a').click(function(event){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 700);
    event.preventDefault();
});
			// mobile 
	$("header .mobile-icon").click(
		function(){
			$(".menu").slideToggle(200);

			if($("header .mobile-icon").hasClass("fa-bars")){
				$("header .mobile-icon").addClass("fa-times");
				$("header .mobile-icon").removeClass("fa-bars")
			}
			else{
				$("header .mobile-icon").addClass("fa-times");
				$("header .mobile-icon").removeClass("fa-bars")
				}
		}
		)
	}

	)



