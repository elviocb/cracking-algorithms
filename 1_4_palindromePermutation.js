// Given a string, write a function  to check if it is a permutation of a palindrome.

/* Ex:

Input: "Tact Coa"
Output: boolean (valid permutations --> "taco cat", "atco cta")

*/

function palindromePermutation(string) {
  var str = string.toLowerCase();
  var indices = {};
  var oddLimit = 2;
  for (var i = 0; i < str.length;i++) {
    if(str[i] != " ") {
      indices[str[i]] = indices[str[i]] || 0;
      indices[str[i]]++;  
    } 
  }

  for (var key in indices) {
    if(indices[key] % 2 !== 0) oddLimit--;
    if(!oddLimit) return false;
  }

  return true;
}