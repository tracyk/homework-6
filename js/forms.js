$(document).ready(function () {
	
	$('.province').hide();
	$('.state').hide();
	$('.postalcode').hide();
	$('.zipcode').hide();
	
	$('#CAradio').on('click', function (ev) {
		$('.state').hide();
		$('.zipcode').hide();
		$('.province').show();
		$('.postalcode').show();
	});
	
	$('#USradio').on('click', function (ev) {
		$('.province').hide();
		$('.postalcode').hide();
		$('.state').show();
		$('.zipcode').show();
	});
	
	var passStrength = 0;
	
	//on change whenever a user commits a change to a text field by: 
	//1.moving to another filed
	//2.hitting return
	
	$('#username').on ('change', function (ev) {
		
		var username = $(this).val(); //gets the user input from the form field
		
		//forces our user to have a username at least 3 characters long
		if(username.length >= 3) {
			//by putting our ajax request in a varinble we can listen from when it is done
			//when the response is dobne, we can see the data PHP sent
			var ajax = $.post('check-username.php', {
				'username' : username
			});
			
			ajax.done (function (data) {
				$('.status').removeClass('available unavailable');
				
				if (data == 'available') {
					$('.status').html('✔').addClass(data);
				}else{
					$('.status').html('✖').addClass(data);
				}
			});
		}else{
					$('.status').html('✖').removeClass('available').addClass ('unavailable');
				}
	});
	
	$('#password').on('keyup', function (ev) {
		passStrength=0;
		var pass =$(this).val();
		
		if (pass.length > 5) {
			passStrength++;
			$('.req-length').addClass('met');
		}else{
			$('.req-length').removeClass('met');
		}
		
		//regex speaks and manipulates text-- similar to sql which speaks to databases- regex quotes are in forward slash, while strings are in ()
		//allow us to manipulate and search text
		if (pass.match(/[a-z]/)) {
			passStrength++;
			$('.req-low').addClass('met');
		}else{
			$('.req-low').removeClass('met');
			
		}
		
		if (pass.match(/[A-Z]/)) {
			passStrength++;
			$('.req-up').addClass('met');
		}else{
			$('.req-up').removeClass('met');
		}
		
		if (pass.match(/[0-9]/)) {
			passStrength++;
			$('.req-num').addClass('met');
		}else{
			$('.req-num').removeClass('met');
		}
		
		if (pass.match(/[^a-zA-Z0-9]/)) {
			passStrength++;
			$('.req-spec').addClass('met');
		}else{
			$('.req-spec').removeClass('met');
		}
		
	});
	
	$('#email').on ('change', function (ev) {
		
		var email = $(this).val(); //gets the user input from the form field
		
			//by putting our ajax request in a variable we can listen from when it is done
			//when the response is done, we can see the data PHP sent
			var ajax = $.post('check-email.php', {
				'email' : email
			});
			
			ajax.done (function (data) {
				$('.emailstatus').removeClass('available unavailable');
				
				if (data == 'available') {
					$('.emailstatus').html('✔').addClass(data);
				}else{
					$('.emailstatus').html('✖').addClass(data);
				}
			});
	});
	
	$('#city').on('keyup', function (ev) {
		var city =$(this).val();
		
		$('.citystatus').removeClass('available unavailable');
		
		if (city.match(/[\`\~\!\@\#\$\%\^\&\*\(\)\+\=\{\}\[\]\|\"\:\;\?\*\<\>]/)) {
			$('.citystatus').html('✖').addClass('unavailable');	
		}else{
			$('.citystatus').html('✔').addClass('available');
		}
	});
	
});