//Where i belong
//Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
function getIndexToIns(arr, num) {

  var cloneArray = arr.slice(0);
  cloneArray.push(num);
  cloneArray.sort(function(a, b) {
return a-b;
});
  
  for (var i = 0;i<cloneArray.length;i++){
    if(num==cloneArray[i]){
      return i;
    }
  }
}

getIndexToIns([40, 60], 50);