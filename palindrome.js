//Check for Palindromes
function palindrome(str) {
   // Ps : /[\W_]/g is the equivalent of [^0-9a-zA-Z_] - it includes the underscore character.
  
  // remove all non-alphanumeric characters
  // turn everything lower case
  var newString = str.replace(/[\W_]/g, '').toLowerCase();
  
  // compare "both ends" of newString
    return newString === rmv.split('').reverse().join('');
}

palindrome("_eye");
