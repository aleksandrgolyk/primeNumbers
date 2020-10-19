function primes(yoursNumber) {
    let arrayWithPrimes = [];
    let deletedNumbers = [];
    for (let i = 2; i <= yoursNumber; i++) {
        if (!deletedNumbers[i]) {
            arrayWithPrimes.push(i);
            for (let j = i * 2; j <= yoursNumber; j = j + i) {
                deletedNumbers[j]=true;
            }
        }
    }
    return arrayWithPrimes;
}
console.log(primes(91))


