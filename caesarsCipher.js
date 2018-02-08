//Caesars Cipher
//One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
function rot13(str) { 
 var shift = 13;
 var stringToArray = Array.from(str);
 var result = [];
  var finalResult = "";
 var i= 0;
    
  while(i<stringToArray.length){
   
    if(stringToArray[i].charCodeAt(0)>=65 && stringToArray[i].charCodeAt(0)<=90){
    if(stringToArray[i].charCodeAt(0)+13 > 90)  {
  var x1 = 90-(stringToArray[i].charCodeAt(0)+shift);
  var x2 = x1*(-1);
  var y = String.fromCharCode(x2+64);
  result.push(y);
  
}
  else{
    var x3 = (stringToArray[i].charCodeAt(0)+shift);
      var x4 = String.fromCharCode(x3);
    result.push(x4);
 
  }
      }
    else{
      result.push(String.fromCharCode(stringToArray[i].charCodeAt(0)));
    }
      
   i++;
}
 
  for(var j=0; j < result.length; j++) {
    if(result[j]=="-"){
      finalResult += " ";
    }
    else{
      finalResult += result[j];
    }
}
  return finalResult;

}

// Change the inputs below to test
rot13("SERR PBQR PNZC");