/**
* Author: Isabella Quinn-Rodriguez
*created: 24.10.2022
*license: Public Domain
*/

$('#challenge').append('<button id="buttonChalEl">Click me to change my class</button');

$('#problems').append('<button id="buttonProEl">click me to change the problem');

$('#results').append('<button id="buttonResEl">click me to show my results');



$('#buttonChalEl').click(function(){
  $('#challenge').toggleClass("special");
});

$('#buttonProEl').click(function(){
  $('#problems').toggleClass("not-Special");
});

$('#buttonResEl').click(function(){
  $('#results').toggleClass("so-So");
});
