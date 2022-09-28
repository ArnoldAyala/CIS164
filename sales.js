"use strict";

//Arrays for all regions
const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];

//Summing sales by Quarter
document.write("<h2>Sales by Quarter</h2>"); 
let qNum = 1;

for (let i = 0; i < region1.length; i++) {
	let quarterTotal = region1[i] + region2[i] + region3[i] + region4[i] + region5[i];
	document.write("Q", qNum, ": $", quarterTotal, "<br>");
	qNum++;
}

//Summing sales by Region

document.write("<h2>Sales by Region</h2>");
let total1 = 0;
let total2 = 0;
let total3 = 0;
let total4 = 0;
let total5 = 0;

for (let i = 0; i < region1.length; i++) {
	total1 += region1[i];
}
document.write("Region 1: $", total1, "<br>");

for (let i = 0; i < region2.length; i++) {
	total2 += region2[i];
}
document.write("Region 2: $", total2, "<br>");

for (let i = 0; i < region3.length; i++) {
	total3 += region3[i];
}
document.write("Region 3: $", total3, "<br>");

for (let i = 0; i < region4.length; i++) {
	total4 += region4[i];
}
document.write("Region 4: $", total4, "<br>");

for (let i = 0; i < region5.length; i++) {
	total5 += region5[i];
}
document.write("Region 5: $", total5, "<br>");

//total overall
document.write("<h2>Total Sales</h2>");

let totaloverall = total1 + total2 + total3 + total4 + total5;
document.write("$", totaloverall);