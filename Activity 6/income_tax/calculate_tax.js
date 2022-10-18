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
	else if (inc > 9875 && inc <= 40125) {
		$("#tax").value = 987.50 + (inc - 9875) * .12;
	}
	else if (inc > 40125 && inc <= 85525) {
		$("#tax").value = 4617.50 + (inc - 40125) * .22;
	}
	else if (inc > 85525 && inc <= 163300) {
		$("#tax").value = 14605.50 + (inc - 85525) * .24;
	}
	else if (inc > 163300 && inc <= 207350) {
		$("#tax").value = 33271.50 + (inc - 163300) * .32;
	}
	else if (inc > 207350 && inc <= 518400) {
		$("#tax").value = 47367.50 + (inc - 207350) * .35;
	}
	else {
		$("#tax").value = 156235.00 + (inc - 518400) * .37;
	}
}

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#calculate").addEventListener("click", processEntry);

});