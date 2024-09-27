function checkPalindromo(word) {
  if(word.split('').reverse().join('') === word) {
    return true;
  }

  return false
}

console.log(checkPalindromo("levels"));
