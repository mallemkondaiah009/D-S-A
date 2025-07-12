function fibo(n) {
    if (n < 0) {
        console.log("incorrect input");
        return null; // Return null for invalid input
    }
    if (n <= 1) {
        return n; // Return 0 for n=0, 1 for n=1
    }

    let a = 0;
    let b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    return b;
}

console.log(fibo(5)); // Call the function and log the result