// Carlos Vigil
// Prof. W. Rosado
// CST152 JavaScript
// Oct. 24, 2016
//
// Phone, ZIP, Email
//
var valid = "Valid entry, thanks!";

function phone()
{
	var phoneNumber = prompt("Please enter a phone number:", "");

	function isValidTelephoneNumber(telephoneNumber)
	{
		var telRegExp = /^(\+\d{1,3}?)?(\(\d{1,5}\)|\d{1,5}) ?\d{3}?\d{0,7}( (x|xtn|ext|extn|pax|pbx|extension)?\.? ?\d{2-5})?$/i;
		return telRegExp.test( telephoneNumber);
	}

	if (isValidTelephoneNumber(phoneNumber))
	{
		alert(valid);
	}
	else
	{
		alert("Invalid phone number, try again.");
		phone();
	}
}

function postal()
{
	var postalCode = prompt("Please enter a postal code:", "");

	function isValidPostalCode(postalCode)
	{
		var pcodeRegExp = /^(\d{5}(-\d{4})?|([a-z][a-z]?\d\d?|[a-z{2}\d[a-z])?\d[a-z][a-z])$/i;
		return pcodeRegExp.test(postalCode);
	}

	if (isValidPostalCode(postalCode))
	{
		alert(valid);
	}
	else
	{
		alert("Invalid postal code, try again.");
		postal();
	}
}

function theEmail()
{
	var email = prompt("Please enter an email address:", "");

	function isValidEmail(emailAddress)
	{
		var emailRegExp = /^(([^<>()\[\]\\.,;:@"\x00-\x20\x7F]|\\.)+|("""([^\x0A\x0D"\\]|\\\\)+"""))@(([a-z]|#\d+?)([a-z0-9-]|#\d+?)*([a-z0-9]|#\d +?)\.)+([a-z]{2,4})$/i;
		return emailRegExp.test(emailAddress);
	}

	if (isValidEmail(email))
	{
		alert(valid);
	}
	else
	{
		alert("Invalid email address, try again.");
		theEmail();
	}
}

phone();
postal();
theEmail();

// function askValidate(opt)
// {
// 	var input = String, check = Number;
// 	switch (opt)
// 	{
// 		case "email":
// 			input = prompt("Please make an Email entry:");
// 			// TODO: RegExp
//
// 			break;
//
// 		case "postal code":
// 			input = prompt("Please make a postal code entry:");
// 			check = parseInt(input);
//
// 			if (check === check && input.length === 5)
// 			{
// 				alert("OK! Thanks.");
// 			}
// 			else
// 			{
// 				alert("Make sure you've input a 5 digit ZIP code; try again.");
// 				askValidate(opt);
// 			}
// 			break;
//
// 		case "phone":
// 			input = prompt("Please make a phone entry:");
// 			check = parseInt(input);
//
// 			if (check === check && input.length === 10)
// 			{
// 				alert("OK! Thanks.");
// 			}
// 			else
// 			{
// 				alert("Make sure you've input a 10 digit number, try again.");
// 				askValidate(opt);
// 			}
// 			break;
//
// 		default:
// 				alert("Input error, try again.");
// 				askValidate(opt);
// 	}
// }
//
// askValidate("phone");
// askValidate("postal code");
