// Implement an algorithm to determine if a string has all unique characters. 
// Extra credit: What if you cannot use additional data structure.

// Good practice questions:
// Is it a unicode string or a ASCII string?

// Answer: ASCII (ASCII has 128 characters length)

// Solution O(n2) - No using data structures. // 
function isUnique(string){
  if (string.length > 128) return false;
  var unique = true;
  
  for (var i = 0; i < string.length; i++) {
      for (var j = 0; j < string.length; j++){
          if (unique) {
              if (string[i] === string[j] && i != j) {
                  unique = false;
              }
          } else {
              return false;
          }             
      }
  }
  return unique;
}

// Solution O(n) - Using data structures
function isUnique(string){
  if (string.length > 128) return false;
  var set = Array.apply(null, Array(128)).map(Boolean.prototype.valueOf, false);
  for (var i = 0; i < string.length; i++) {
    if (set[string.codePointAt(i)]) {
      return false;
    }
    set[string.codePointAt(i)] = true;
  }
  return true;
}


