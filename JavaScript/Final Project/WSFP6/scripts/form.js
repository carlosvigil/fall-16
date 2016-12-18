// Page load wrapper
window.onload = function()
{
// let's developer know that the page is loaded
	console.log("Page loaded!");
// declares variable to easilt select validation button 
	var valButton = document.querySelector("button[name=valButton]");
// and assigns a click listener to the validation button
	valButton.addEventListener("click", validate);
// declares function for validating email
	function validate()
	{
// declare variables for email value
		var email = document.theForm["email"].value;
// declares variable for regular expression to check email value
		var emailRegExp = /^(([^<>()\[\]\\.,;:@"\x00-\x20\x7F]|\\.)+|("""([^\x0A\x0D"\\]|\\\\)+"""))@(([a-z]|#\d+?)([a-z0-9-]|#\d+?)*([a-z0-9]|#\d +?)\.)+([a-z]{2,4})$/i;
// alert the user that action has been taken
		alert("OK! Validating. . .");
// alert user of validation results for the supplied email string
		if (emailRegExp.test(email))
		{
			alert("Valid email. Thanks!");
		}
		else 
		{
			alert("Invalid email.");
		}
	}
};