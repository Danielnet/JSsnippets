//Seek and Destroy
//You will be provided with an initial array (the first argument in the destroyer function), followed //by one or more arguments. Remove all elements from the initial array that are of the same value as //these arguments.
function destroyer(arr) {
//creating array containing only arguments after initial array "arr"
  var argArray = [];
  
  for(var i = 1 ; i<arguments.length; i++){
    argArray.push(arguments[i]);
  }
   
  //match argArray elements on each element in "arr" . Deletes element if elements match by returning //false in filter function
  var filteredArray = arr.filter(function(y) {
    if(argArray.includes(y)){
       return false;
    }
    else{
      return true;
    }
                    
                     });
  
  return filteredArray;

}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);