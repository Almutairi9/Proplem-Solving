// I used if-else because I want to compare between years and search for LeapYear ...

function isLeapYear(year) {
  if (0 == year % 400) return true;
  else if (0 == year % 100) return false;
  else if (0 == year % 4) return true;
  else return false;
}

////////////////////////////////////////////////////////

function primes(start, end) {
  let arr = [];
  for (let i = start; i < end; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
      }
    }
    if (i === 1) {
      isPrime = false;
    }
    if (isPrime) {
      arr[arr.length] = i;
    }
  }
  return arr.length > 0 ? arr : null;
}
