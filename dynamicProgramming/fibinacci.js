let calculations = 0;
function fibonacci(n) { // O(2n)
  calculations++;
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

let calculations1 = 0;
function fibonacciMaster() {
  let cache = {};
  return function fib(n) { // O(n)
    calculations1++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n-1) + fib(n-2);
        return cache[n];
      }
    }
  }
}

function fibonacciMaster2(n) { // O(n)
  let answer = [0, 1];
  for (let i = 2; i <= n; i++) {
    answer.push(answer[i-2] + answer[i-1]);
  }
  return answer.pop();
}

const fastFib = fibonacciMaster();
console.log('slowFib', fibonacci(30));
console.log('calculations:', calculations);
console.log('DP1', fastFib(100));
console.log('calculations1:', calculations1);
console.log('DP2', fibonacciMaster2(100));
