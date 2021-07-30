// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Did parents allow you?');
//     }
//   }


function checkAge(age) {
    return (age > 18 ? true : 'Did parents allow you?');
}

console.log(checkAge(17))