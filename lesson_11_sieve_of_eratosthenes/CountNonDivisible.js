function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    const counters = [];

    A.forEach(a => {
        counters[a] = counters[a] || 0;
        counters[a]++;
    });

    function countDivisors(n) {
        if (n === 1) return counters[1] || 0;
        let divisors = (counters[1] || 0) + (counters[n] || 0);
        for (let i = 2; i * i <= n; i++) {
            if (n % i === 0) {
                divisors += counters[i] || 0;
                if (n / i !== i) {
                    divisors += counters[n / i] || 0;
                }
            }
        }
        return divisors;
    }
    
    const divisors = [];
    for (let i = 0; i < counters.length; i++) {
        if (counters[i]) {
            divisors[i] = countDivisors(i);
        }
    }

    const result = [];
    for (let i = 0; i < A.length; i++) {
        result[i] = A.length - divisors[A[i]] || 0;
    }
    
    return result;
}