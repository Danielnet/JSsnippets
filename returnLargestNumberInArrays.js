//Return Largest Numbers in Arrays
function largestOfFour(arr) {
  
  //change number of entries in result if inner array is more than 4 elements in size
  var result = [0,0,0,0];
  
  for(var i =0; i< arr.length ; i++ ){
    for(var j =0; j< arr[i].length ; j++ ){
      
      if(arr[i][j]>result[i]){
         result[i] = arr[i][j];
      }
    }
  }
  return result;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);