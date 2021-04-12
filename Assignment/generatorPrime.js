
 //create find prime number using generator


//make generator function for print prime by yield
function* genPrime(number) {
    var prime;
    var count = 0;
    while(count <= number) {
        if(getPrimes(count)) {
            yield prime = count;
        }
        count++;
    }
}

//here i created to check number is prime or not
function getPrimes(n) {
    
    if (isNaN(n) || !isFinite(n) || n%1 || n<2) 
        return false;

    for(let factor = 2; factor < n; factor++){
        if(n % factor == 0){
            return false;
        }
    }

    // n is prime
    return true;
}
const iterator = genPrime(10)

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
