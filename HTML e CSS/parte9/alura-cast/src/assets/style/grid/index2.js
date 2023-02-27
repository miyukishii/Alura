// function verify(string) {
//     let sum = 0;
//     for (let i = 0; i < string.length; i ++) {
//         sum += Number(string[i]);
//       }
//     return sum.toString();
// }

function superDigit(n, k) {
  let string = '';
  let result = '';
  let sum = 0;
  if (k > 0) {
    for (let i = 0; i < k; i ++) {
        string += n;
      }
  }
  
  while (string.length !== 1) {
    for (let i = 0; i < string.length; i ++) {
        sum += Number(string[i]);
      }
   result = sum.toString();
   string = result;
   sum = 0;
  }
  return string;
}

console.log(superDigit('9875',4));