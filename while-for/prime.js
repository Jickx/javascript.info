let num = 100;
let primeNum = "2\n";

NextPrime:
for (let i = 3; i <= num; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue NextPrime;       
    }
    primeNum += `${i}\n`;
}
console.log(primeNum);