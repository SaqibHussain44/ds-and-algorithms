function findFactorialRecursive(num) {
  if (num <= 2) {
    return num;
  }
  return num * findFactorialRecursive(num - 1);
}

function findFactorialIterative(num) {
  let answer = num;
  for (var i = 1; i < num; i++) {
    answer = answer * (num - i);
  }
  return answer;
}

console.log(findFactorialIterative(5));
console.log(findFactorialRecursive(5));
