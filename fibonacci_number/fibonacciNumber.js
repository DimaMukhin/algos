/**
 * Calcualtes and returns the n'th fibonacci number
 */
function fibonacci(n) {
    if (n == 1 || n == 2) {
        return n - 1;
    }

    let dp = [0, 1];
    for (let i = 2; i < n; i++) {
        dp.push(dp[i - 1] + dp[i - 2]);
    }

    return dp[n - 1];
}

function main () {
	// n>0
    let n = 5;
    if (n <= 0) {
        console.log("n must be greater than 0");
        return;
    }
    console.log(fibonacci(n));
}

main();