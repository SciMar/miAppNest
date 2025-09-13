function palindrome(str) {
  let str1 = str.slice();
  let rts1 = str.slice();

  str1 = str1.toLowerCase().replace(/[\W_]/g,'');
  rts1 = rts1.toLowerCase().replace(/[\W_]/g,'');

  //console.log(str1);
  //console.log(rts1);

  let suma = 0;

  for (let i = 0; i < str1.length; i++) {
    if(str1[i] == rts1[str1.length-(i+1)])
    {
      suma += 1;
    }
  }
  if (str1.length == suma){
    return true;
  }
  else {
    return false;
  }
}

palindrome("eye");
console.log(palindrome("eye")); 