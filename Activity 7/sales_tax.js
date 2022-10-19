"use strict";

const $ = selector => document.querySelector(selector);
const input = document.getElementById('subtotal');

//sets cursor to subtotal text box
input.setSelectionRange(0, 0);
input.focus();

//checks the input to see if it's a correct input
const processEntry = () => {
	if (document.querySelector("#subtotal").value > 0 && 
		document.querySelector("#subtotal").value < 10000){
		if (document.querySelector("#tax_rate").value > 0 && 
			document.querySelector("#tax_rate").value < 12){
			calculate(document.querySelector("#subtotal").value, document.querySelector("#tax_rate").value);
		}
		else {
			alert("Subtotal must be > 0 and < 10000 \nTax Rate must be > 0 and < 12");
		}
	}
	else {
		alert("Subtotal must be > 0 and < 10000 \nTax Rate must be > 0 and < 12");
	}
};

//clears all text boxes
const clearAll = () => {
	$('#subtotal').value = null;
	$('#tax_rate').value = null;
	$('#sales_tax').value = null;
	$('#total').value = null;
};

//clears subtotal text box
const clearSub = () => {
	$('#subtotal').value = null;
};

//clears tax_rate text box
const clearTax = () => {
	$('#tax_rate').value = null;
};

//calculates and outputs sales taxa and total 
function calculate(sub, tax) {
	tax /= 100;
	let salesTax = sub * tax;
	salesTax = Math.round(salesTax * 100) / 100;
	$('#sales_tax').value = salesTax;
	$('#total').value = parseFloat(sub) + salesTax;
}

//sets cursor to subtotal text box after a click
const btn = document.getElementById('calculate');
const cl = document.getElementById('clear');

//event handlers for clicking 
document.addEventListener("DOMContentLoaded", () => {
	$("#calculate").addEventListener("click", processEntry);
});

document.addEventListener("DOMContentLoaded", () => {
	$("#clear").addEventListener("click", clearAll);
});

document.addEventListener("DOMContentLoaded", () => {
	$("#subtotal").addEventListener("click", clearSub);
});

document.addEventListener("DOMContentLoaded", () => {
	$("#tax_rate").addEventListener("click", clearTax);
});

btn.addEventListener('click', function handleClick() {
  input.setSelectionRange(0, 0);
  input.focus();
});

cl.addEventListener('click', function handleClick() {
  input.setSelectionRange(0, 0);
  input.focus();
});