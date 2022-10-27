"use strict";
const $ = selector => document.querySelector(selector);

/*********************
*  helper functions  *
**********************/
const calculateCelsius = temp => (temp-32) * 5/9;
const calculateFahrenheit = temp => temp * 9/5 + 32;

const toggleDisplay = (label1Text, label2Text) => {
	document.querySelector("#degree_label_1").innerHTML = label1Text;
	document.querySelector("#degree_label_2").innerHTML = label2Text;
}

function calculate(degrees) {
	if (document.querySelector("#to_celsius").checked) {
		$('#degrees_computed').value = parseInt( ( degrees - 32 ) * ( 5/9 ) );
	}
	else if (document.querySelector("#to_fahrenheit").checked) {
		$('#degrees_computed').value = parseInt( ( degrees * ( 9/5 ) + 32 ) );
	}
}

/****************************
*  event handler functions  *
*****************************/
const convertTemp = () => { 
	let n = document.querySelector("#degrees_entered").value;
	if (!isNaN (n) ) {
		calculate(document.querySelector("#degrees_entered").value);
	}
	else {
		alert("You must enter a valid number for degrees.");
	}	
};

const toCelsius = () => toggleDisplay("Enter F degrees:", "Degrees Celsius:");
const toFahrenheit = () => toggleDisplay("Enter C degrees:", "Degrees Fahrenheit:");

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#convert").addEventListener("click", convertTemp);
    $("#to_celsius").addEventListener("click", toCelsius);
    $("#to_fahrenheit").addEventListener("click", toFahrenheit);
	
	// move focus
	$("#degrees_entered").focus();
});
