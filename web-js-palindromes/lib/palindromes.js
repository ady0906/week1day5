function isPalindrome(s) {
  var stringReverse = s.split("").reverse().filter(function(str) {return /\S/.test(str);}).join("");
  return s.split('').filter(function(str) {return /\S/.test(str);}).join('') == stringReverse;
}

console.log(isPalindrome('a man a plan a canal panama'));

module.exports = isPalindrome;
