function fibMemo(n, cache = []) {
    if (cache[n]) {
        return cache[n];
    } else {
        if (n <= 2) {
            return 1;
        } else {
            cache[n] = fibMemo(n - 1, cache) + fibMemo(n - 2, cache);
        }
    }

    return cache[n];
}

module.exports = fibMemo;

// fib(4)
// fib(3) + fib(2) -> cache = [, , 1]
// fib(2) + fib(1)
// 1