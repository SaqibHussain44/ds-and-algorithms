function addto80(n) {
  return 80 + n;
}

let cache = {
  // 5: 85
};

function memoizedAddTo80(n) {
  if (n in cache) {
    return cache[n];
  } else {
    console.log('long time');
    cache[n] = n + 80;
    return cache[n];
  }
}

console.log(memoizedAddTo80(5));
console.log(memoizedAddTo80(5));