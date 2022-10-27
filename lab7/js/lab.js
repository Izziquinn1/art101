/*
* Author: Isabella Quinn-Rodriguez
*created: 24.10.2022
*license: Public Domain
*/

//sortUserName - a function that user input and sorts the letters
// of their Fav_food
function sortUserName() {
  var favfood= window.prompt("Hi. Please tell me your favorite food so I can fix it");
  console.log("userName =", userName);
  //split string to array
  var namearray= favfood.split ('');
  console.log("nameArray=", nameArraysort)
  //Sort the Array
  var nameArraySort= nameArray.sort();
  console.log("nameArraySort=",nameArraySort);
  //Join array back to a string
  var favfood=nameArraySort.join('');
  console.log ("nameSorted=", nameSorted);
  //Note that I could have done the above line as a single line:
  //UserName.toLower().split("").sort().join("")
  return nameSorted;
}

//Output
document.writteln("oh hey, I've fixed you favorte food",
    sortUserName(), "</br>");
