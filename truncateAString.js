//Truncate a string
//Ps. this could probably be done alot cleaner..
function truncateString(str, num) {

  var y;
  
  
  if(!(str.length==num || num<=3)){
    if(num < str.length){
   var x = str.slice(num-3,str.length);
   y = str.replace(x,"");
     y+="...";
       console.log(str);
        return y;
    }
  }

  if(num>=str.length){
    return str;
  }
  if(num<=3){
       var z = str.slice(num,str.length);
   y = str.replace(z,"");
     y+="...";
     return y;
  }
}

truncateString("Absolutely Longer", 2);
