// Slasher Flick
// Return the remaining elements of an array after chopping off n elements from the head.
function slasher(arr, howMany) {
  return arr.slice(howMany, arr.length);
}

slasher([1, 2, 3], 2);
