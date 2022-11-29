/**
* Author: Isabella Quinn-Rodriguez
*created: 24.10.2022
*license: Public Domain
*/

//Return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff
//depending of length mod 4
function sortingHat(str){
  len=str.length;
  mod=len % 4;
  if (mod==0){
    return "Gryffindor"
  }
  else if (mod==1){
    return "Ravenclaw"
  }
  else if (mode==2){
    return "Hufflepuff"
  }
}

Var mybutton = document.getElementById("button");
myButton.addEventListener("click", function() {
  var name= document.getElementById("input").value;
  var house=sortingHat(name);
  newText="<p> The Sorting Hat has sorted you into" + house + "</p>";
  document.getElemnetById("output").innerHTML=newText;
})
