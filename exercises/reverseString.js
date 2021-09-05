//Implement a function that reverses a string using iteration...and then recursion!
function reverseString(str) {
  let rstr = '';
  for (var i = str.length -1; i >= 0; i--) {
    rstr = rstr + str[i];
  }
  return rstr;
}

function reverseStringRecursive(str) {
  if (str === '') {
    return '';
  } else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
}

console.log(reverseString('hello world'));
console.log(reverseStringRecursive('hello world'));
//should return: 'dlrow olleh'
