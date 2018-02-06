//Mutations
//Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
function mutation(arr) {
  
  var e1 = arr[0].toLowerCase();
  var e2 = arr[1].toLowerCase();
  
  for (i=0;i<e2.length;i++) {
    if (e1.indexOf(e2.charAt(i)) == -1)
      return false;
  }
  
  return true;
 }


mutation(["voodoo", "no"]);