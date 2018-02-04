//Factorialize a Number
function factorialize(num) {
  counter = 1;
  
  for(var i = num; i>0; i--){
    counter*=i;
  }
  
  num = counter;
  return num;
}

factorialize(5);
