

const isPrime = num => {
    let count = 2;
    while(count < (num / 2)+1){
       if(num % count !== 0){
          count++;
          continue;
       };
       return false;
    };
    return true;
 };


 
const primeBetween = (a, b) => {
   const event=new EventEmitter();

     let count=0;
     let maxValue=Math.min(a+10,b);
     let percent=0;
     let tid=setInterval(()=>{
        let delta=Math.floor(Math.random()*5)+1;
        percent+=delta;
      for(let i = Math.min(a, b); i <= maxValue; i++){
         if(isPrime(i)){
            count++;
            event.emit('event',{action:"Prime", a,b, index:count,value:i})
            }
     
        }

        a=maxvalue;
        maxvalue=Math.min(a+10,b)
        if(a>=b){
           clearInterval(tid);
           event.emit('events',{action:"Done",a,b, primes:count})
        }
     },1)

    
 }
primeBetween(2, 100);
primeBetween(100, 200);
primeBetween(50, 100);


