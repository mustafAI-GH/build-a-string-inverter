function reverseString(str) {

  let reverseString = str.split('');
  reverseString.reverse();
  return reverseString.join('');
  
}

console.log(reverseString("hello"));