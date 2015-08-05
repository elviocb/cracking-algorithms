/* There are three types of edits that can be performed on strings: 
  - insert a character
  - remove a character
  - replace a character
  Given two strings, write a function to check if they are one-edit or zero-edit away.

  Example:

  force  fork  --> true
  force  forc  --> true
  forces force --> true
  force  fark  --> false
*/

function oneAway(str1, str2){
  // return if the length diff is greater than 1
  if(Math.abs(str1.length - str2.length) > 1) return false;
  // check if it's a replacement problem
  if(str1.length === str2.length) {
      return checkReplacement(str1,str2);
  } else {
      // separate the shortest and longest string
      var s1 = (str1.length < str2.length) ? str1 : str2;
      var s2 = (str1.length < str2.length) ? str2 : str1;
      var changes = 0;
      
      // compare the strings 
      for (var i = 0, j = 0; i < s1.length; i++, j++) {
          // compare the elements
          if(s1[i] != s2[j]) {
              // add by one the biggest string and add +1 to changes;
              j++, changes++;
              // check if the difference is on the maximum limit of one;
              if (changes > 1) return false;
          }
      }
      return true;
  }
}

function checkReplacement(str1,str2){
    console.log('replacement!');
    var changed = false;
    for (var i = 0; i < str1.length; i++){
        if (str1[i] != str2[i]) {
            if(changed) return false;
            else changed = true;
        }
    }
    return true;
}

