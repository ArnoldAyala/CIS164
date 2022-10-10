"use strict";
const $ = selector => document.querySelector(selector);

const processEntry = () => {
	if (document.querySelector("#income").value > 0){
		calculateTax(document.querySelector("#income").value);
	}
	else {
		alert("wrong number please input a number over 0");
	}
};

function calculateTax(inc) {
	if (inc <= 9875) {
		$("#tax").value = inc * .10;
	}
	else if (inc <= 40125) {
		$("#tax").value = inc * .12 + 987.50;
	}
	else if (inc <= 85525) {
		$("#tax").value = inc * .22 + 4617.50;
	}
	else if (inc <= 163300) {
		$("#tax").value = inc * .24 + 14605.50;
	}
	else if (inc <= 207350) {
		$("#tax").value = inc * .32 + 33271.50;
	}
	else if (inc <= 518400) {
		$("#tax").value = inc * .35 + 47367.50;
	}
	else {
		$("#tax").value = inc * .37 + 156235.00;
	}
}

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#calculate").addEventListener("click", processEntry);

});