/* Implement a method to perform basic string compression using the 
counts of repeated characters. For example, the string aaabbbccc 
wiuld become a3b3c3. If the size of the 'compressed' string would not 
become smaller than the original string, return the original string instead.
*/

function stringCompression(str) {
  var result = [], count = 0;

  for(var i = 0; i < str.length; i++) {
    count++;
    if(i + 1 >= str.length || str[i] !== str[i+1]) {
        result.push(str[i], count);
        count = 0;
    }
  }
  return result.length < str.length ? result.join('') : str;
}