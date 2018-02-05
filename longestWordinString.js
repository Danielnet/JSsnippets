//Find the Longest Word in a String
function findLongestWord(str) {
  
  //split string into array, where whitespace separates each word.
  
  var x = str.split(' ');
  
  //test variable to compare every element in array to
  var y = "";

  //loop trough array and compare to test variable. Replace if bigger.
  for(var i = 0; i < x.length; i++){
   
    if(x[i].length>y.length){
      y = x[i];
       console.log(y);
    }
    }
   return y.length;
  }


findLongestWord("The quick brown fox jumped over the lazy dog");