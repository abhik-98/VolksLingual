$(function(){
	$('#navbar-toggle').blur(function(e){
		if(window.innerWidth < 768){
			$('#navbar-collapse').collapse('hide');
		}

	});

	$('#navbar-toggle').click(function(e){
		$(e.target).focus();
	});
});

