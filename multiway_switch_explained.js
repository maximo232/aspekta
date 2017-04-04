var number = Number(prompt('Pick a number',0)), sq=0;

if (!isNaN(number)) {
	sq=number*number;
	alert('Square number of your ' + number + ' is ' + sq)
}
else {
	alert('Your ' + number + "is not a Number")
}

//Switch statement:  Multiway Branch. It checks for equality with any of the cases presented;
//So is true matching any of case expressions? JS is unique in that, you can use expressions in statements.
//They will be evaluated to true/false like in if statements, and compared to switch() parameter.

switch (true) {
	case sq >= 1 && sq <= 100:
		alert('Your number is under 100 or 100'); break;
	case sq > 100 && sq < 1000:
		alert('Your number is between 100 and 1000'); break;
	case sq >= 1000:
		alert('Large number 1k or over 1k'); break;
	case sq == 0 || isNaN(sq):
		alert('not a square number from your ' + number); break;
	default:
		alert('Switch statememet default'); break;
}


//browser code: Execute in Safari CMD-alt-I console
