/**
* Author: Isabella Quinn-Rodriguez
*created: 24.10.2022
*license: Public Domain
*/
function namesorter(inputName){
  var nameArray=inputName;

  var sortedName= sortedArray.join('');

  return(sortedName);
}

var buttonEl= document.getElementById("my-button");
var ouputEl= document.getElementById("output");

buttonEl.addEventListener("click", function(){
  var enterName= document.getElementById("user-name").value;
  var sortedName= nameSorter(enteredName);
  outputEl.innerHTML=sortedName;
})
