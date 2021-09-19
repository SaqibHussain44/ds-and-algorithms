// Write a program that prints 1 2 3 4 5 6 7 ... up to some +ve integer N
// the natural number series, but
// with all numbers that also show up in the fibonacci series replaced with -1
// so a refresher on fibonacci if you need it:
// the fibonacci series starts with the numbers 0 and 1
// and then you can generate all subsequent numbers by summing the previous 2 numbers in the series
// so the series goes 0 1 1 2 3 5 8 13 21 .. etc
// so in your program, it should print the natural number series, but any number that also occurs in the fibonacci series
// needs to be replaced with -1
// the output should look like -1 -1 -1 4 -1 6 7 -1 9 10 ... etc

function fibonacciReplaced(limit) {
  const list = [];
  const fibSequence = { };
  let left = 1, right = 1;
  fibSequence[right] = true;
  for (let i = 1; i <= limit; i++) {
    if (fibSequence[i]) {
      list.push(-1);
    } else {
      list.push(i);
    }
    const temp = left;
    left = right;
    right = temp + right;
    fibSequence[right] = true;
  }
  return list;
}

console.log('fibSequence', '0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377');
console.log(fibonacciReplaced(21));