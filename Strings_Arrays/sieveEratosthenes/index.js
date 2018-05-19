/*
* Return all prime numbers up to num in an array
*/
function sieveEratosthenes(num) {
    let primes = new Array(num).fill(true);
    primes[0] = false;
    primes[1] = false;
    for(let i = 2; i <= num; i++) {
        for(let j = 2; i * j <= 9; j++) {
            primes[i*j] = false;
        }
    }

    let results = [];
    primes.forEach((isPrime, index) => {
        if(isPrime) {
            results.push(index);
        }
    });

    return results;
}

module.exports = sieveEratosthenes;