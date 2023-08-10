console.log(`<=================================Assignment 2====================================>`);
function isprime (n){
    if (n===1) {
        return `You entered 1 & is not prime number`
    }
    else if (n===2){
        return `Is prime`
    }
    else {
        for (let index = 3; index < n; index++) {
            if (n%index===0) {
                return `Entered number is ${n} & it is not prime number`
            }
            
        }
        return`Entered number is ${n} & it is prime number `;
         
    }
  }
  console.log(isprime(11));
  console.log(isprime(21));
