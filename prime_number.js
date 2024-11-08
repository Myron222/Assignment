// Students write their code between these lines. 
//
// Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
//
// Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
//
// Stuents should carefully read the test cases for the correct output. 
//

// Write isPrime(num), which returns true if the number is prime and false otherwise.
function isPrime(num) {
    // Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
    if (num < 2) {
        return messageFormatter(num, false);
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return messageFormatter(num, false);
        }
    }
    

    // students must use polymorphic messageFormatter function to display answer
    return messageFormatter(num,true); 
    // Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
}

// Extend with findPrimesInRange(start, end) to return all prime numbers within a specified range.
function findPrimesInRange(start, end) {
    // Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
    if (typeof start !== 'number' || typeof end !== 'number') {
        return messageFormatter('invalid'); // Fixed input check
    }

    const primes = [];
    for (let i = start; i <= end; i++) {
        if (isPrime(i) === `${i} is a prime number.`) {
            primes.push(i);
        }
    }
    // reuse isPrime() function here
    
    // students must use polymorphic messageFormatter function to display answer
    return messageFormatter([start, end], primes); 
    // Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
}

// Polymorphic messageFormatter function
function messageFormatter(input,result) {
    // Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
    if (typeof input === 'number') {
        if (result) {
            return `${input} is a prime number.`;
        } else {
            return `${input} is NOT a prime number.`;
        }
    }

    if (Array.isArray(input)) {
        if (result.length === 0) {
            return `No prime numbers found between ${input[0]} and ${input[1]}.`;
        } else {
            return `Primes between ${input[0]} and ${input[1]}: [${result.join(', ')}]`;
        }
    }
    if (input === 'invalid') {
        return 'Invalid input. Please provide a number or a valid range (array of two numbers).';
    }
}
    // Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
function checkPrimeNum(num) {
    return isPrime(num);
}

// Instructor's test cases
// ===== ===== ===== ===== =====

console.log(checkPrimeNum(2));
// Expected Output: 2 is a prime number.

console.log(checkPrimeNum(1));
// Expected Output: 1 is NOT a prime number.

console.log(checkPrimeNum(13));
// Expected Output: 13 is a prime number.

console.log(checkPrimeNum(25));
// Expected Output: 25 is NOT a prime number.

console.log(findPrimesInRange([10, 20]));
// Expected Output: Primes between 10 and 20: [11, 13, 17, 19]

console.log(findPrimesInRange([30, 50]));
// Expected Output: Primes between 30 and 50: [31, 37, 41, 43, 47]

console.log(findPrimesInRange('test'));
// Expected Output: Invalid input. Please provide a number or a valid range (array of two numbers).
