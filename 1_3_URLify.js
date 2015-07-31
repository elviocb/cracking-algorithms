// Write  amethod to replace all spaces in a string with %20. You may assume that
// the string has sufficient space at the end to hod the additional characters.

function URLify(url, limit) {
    url = url.substr(0,limit).split('');
    for (var i = 0; i < url.length; i++) {
        if(url[i] === " ") {
            url[i] = "%20";
        }
    }
    return url.join('');
} 

URLify("Mr John Smith    ", 13);