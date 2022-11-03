/**
* Author: Isabella Quinn-Rodriguez
*created: 24.10.2022
*license: Public Domain
*/

var outputEl = document.getElementById("output");
var new1El=document.createElement("p");
var new2El=document.createElement("p");

new1El.innerHTML="This paragraph says to stop talking.";
new2El.innerHTML="This paragraph talks alot.";

outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

new1El.style.color="Blue";
new2El.style.frontsize="80px";
