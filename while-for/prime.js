// Write the code which outputs prime numbers in the interval from 2 to n.
// For n = 10 the result will be 2,3,5,7.
// P.S. The code should work for any n, not be hard-tuned for any fixed value.

let num = 10;
let primeNum = "2 ";

NextPrime:
for (let i = 3; i <= num; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue NextPrime;       
    }
    primeNum += `${i} `;
}
console.log(primeNum);