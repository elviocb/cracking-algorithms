// Given two strings, write a method to decide if one is a permutation of the other.

// Important question: Ask if case sensitive matters. Answer: yes

// first solution - O(n2)
function checkPermutation(str1, str2){
  if (str1.length != str2.length) return false;
  var arr1 = str1.split(''), arr2 = str2.split('');
  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr1.length; j++) {
        if (arr1[i] === arr2[j]) {
            arr2.splice(j,1);
        }
    } 
  }
  return arr2.length === 0;
}

// clever solution -- sort the strings first, than compare. O(n)
function checkPermutation(str1, str2) {
  // check the length
  if (str1.length != str2.length) return false;
  // Convert the string to arrays and sort it.
  var arr1 = str1.split('').sort(), arr2 = str2.split('').sort();
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}