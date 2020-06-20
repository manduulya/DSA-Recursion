//Counting sheeps

function CountingSheep(sheep) {
  if (sheep === 0) {
    return console.log("All sheep jumped over the fence");
  } else {
    console.log(sheep, "Another sheep jumps over the fence");
    return CountingSheep(sheep);
  }
}
CountingSheep(3);

//Power
function PowerCalculator(base, exp) {
  if (exp < 0) {
    console.log("exponent should be >= 0");
    return null;
  } else if (exp === 1) {
    return base;
  } else {
    base = base * base;
    return PowerCalculator(base, exp - 1);
  }
}

//Reverse String
function reverseString(str) {
  if (str === "") {
    return "";
  } else {
    return reverseString(str.substr(1) + str.charAt(0));
  }
}
//nth Triangular Number

function nthTriangle(n) {
  return n <= 1 ? n : n + nthTriangle(n - 1);
}
