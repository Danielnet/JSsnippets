//Title Case a Sentence
function titleCase(str) {
  
  //split obj into array, make all elements lower case
  var lowerCaseArray = str.toLowerCase().split(' ');
 
  //empty array to fill in new elements in for loop with first letter capitalized
  var emptyArray= [];
  
  //var to convert new array to string obj
  var result;
  
  for(i = 0; i < lowerCaseArray.length; i++){
   emptyArray[i] =  lowerCaseArray[i].replace(lowerCaseArray[i].charAt(0), lowerCaseArray[i].charAt(0).toUpperCase());
      
  }
  
 result = emptyArray.join(' ');

  return result;
}

titleCase("I'm a little tea pot");