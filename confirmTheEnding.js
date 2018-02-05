//Confirm the Ending
//Check if a string (first argument, str) ends with the given target string (second argument, //target).
function confirmEnding(str, target) {
 
  //using String.prototype.substr() we find the string to compare to "target"
  var x=  str.substr(str.length-target.length,target.length);
   console.log(x);
     return target == x;
}

confirmEnding("Bastian", "n");