function checkPrime(number) {
    for(let j=2; j < number; j++) {
        if(number % j == 0) {
            return false; 
        }
    }
    return true;
}

// Find Prime Numbers

function findPrime(...numbers) {
    for(let i=0; i< numbers.length; i++) {
        let currentNumber = numbers[i];
        let isPrime = false;
        if(currentNumber > 1) {
            isPrime = checkPrime(currentNumber);      
        } 
        console.log(isPrime ? currentNumber + " is prime" : currentNumber + " is not prime");   
    }
}

//findPrime(-100,1,2,5,6)

// Amicable Numbers
function amicableNumbers(number1,number2) {
  let total1 = 0;
  let total2 = 0;
    for(let i =0; i<number1; i++) {
        if(number1 % i == 0) {
                total1 += i;
        }
    }
    for(let i =0; i<number2; i++) {
        if(number2 % i == 0) {
                total2 += i;
        }
    }
    console.log((total1 === number2 && total2 === number1) ? number1 +  " - " + number2 + " are amicable numbers" : number1 +  " - " + number2 + " are not amicable numbers")
   
}
// amicableNumbers(5020,5564)

// Perfect Numbers

 function perfectNumbers() {
       for(let num=1; num<1000; num++) {
        let total = 0;
           for(let i=1; i<num; i++) {
            if(num % i == 0) {
                    total += i;
            }
       }
       if (total == num) console.log(num);
    }
    
}
// perfectNumbers()

 // Prime Numbers

 function primeNumbers() {
     for(let i=2; i<1000; i++) {
        if(checkPrime(i)) {
                console.log(i);
            }
     }
 }
//  primeNumbers()
