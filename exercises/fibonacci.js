// Given a number N return the index value of the fibonacci sequence. where sequence is:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...

function fibonacciIterative(n) { // O(n)
  let list = [0, 1];
  for (let i = 1; i < n; i++) {
    list.push(list[i] + list[i - 1]);
  }
  return list[n];
}

function fibonacciIterative1(n) {  // O(n)
  let left = 0;
  let right = 1;
  for (let i = 0; i < n; i++) {
    let temp = left + right;
    left = right;
    right = temp;
  }
  return left;
}


function fibonacciRecursive(n) { // O(2^n)
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}

console.log(fibonacciIterative(8))
console.log(fibonacciIterative1(8))
console.log(fibonacciRecursive(8));
