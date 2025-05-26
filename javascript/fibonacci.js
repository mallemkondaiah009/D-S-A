function fib(n) {
    if (n <= 1) {
        console.log(n);
    } 
    else {
        console.log(fib(n-1) + fib(n-2));
    }
}

console.log(fib(5));