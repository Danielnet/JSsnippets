// Reverse the provided string.
function reverseString(str) {
  
  //create split array
  var splitArray = str.split("");
  
  //reverse split array
  var reverseArray = splitArray.reverse();
  
  //create new string obj using .join()
  str = reverseArray.join('');
  
  return str;
}

reverseString("hello");
