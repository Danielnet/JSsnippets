//Falsy Bouncer
//Remove all falsy values from an array.
function bouncer(arr) {

var filtered = arr.filter(Boolean);

  return filtered;
}

bouncer([1, null, NaN, 2, undefined]);