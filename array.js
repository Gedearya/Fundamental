function palindrome(string){
string = string.split('');
string = string.toLowerCase()
let wrd = string.length;
for (var i = 0; i < wrd/2; i++) {
    if (str[i] !== str[wrd - 1 - i]) {
        return false;
    }
  }
  return true;
}

console.log(palindrome("katak"));


// var re = /[^A-Za-z0-9]/g;
//  str = str.toLowerCase().replace(re, '');
//  var len = str.length;
//  for (var i = 0; i < len/2; i++) {
//    if (str[i] !== str[len - 1 - i]) {
//        return false;
//    }
//  }
//  return true;