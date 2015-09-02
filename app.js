$(document).ready(function(){
	// get input
	var enterNumber = prompt('Please enter a number');


	// convert string to number
	var number = +enterNumber;


	// function 
	var fizzbuzzFunc = function (){
		for (var i = 1; i <= number; i++) {
			if((i % 3 === 0) && (i % 5 === 0)){
				document.write("Fizz Buzz ");
				}
			else if(i % 3 === 0){
				document.write("Fizz ");
				}
			else if(i % 5 === 0){
				document.write("Buzz ");
				}
				else{
			document.write(" " + i + " ");
			}
		}
	};

	if(isNaN(number)){
		prompt("Please enter a number only!");
	}

	else if(number % 1 !== 0){
		prompt("Please enter a whole number only!");
	}

	else {
		fizzbuzzFunc();
	}

	$("#list").append(fizzBuzzFunc());
	});

	


	
/* Clears list */
$(document).on('click', '#reset', function(){
    $('#list').empty();
});