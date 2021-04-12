//create your own Map function similar to javascript  builtin function

//use array and function as argument
function ownMapFunction(array,myMapFunction) {
    // take an empty array
    const resultMapArray=[];

    //create loop array
    for(let i=0;i<array.length;i++)
    {
        const result=myMapFunction(array[i],i,array);
        resultMapArray.push(result);
    }

    return resultMapArray;
    
}
//declare array object and call the function

let sampleArray=[2,4,8,7,3,9];
squareArray=ownMapFunction(sampleArray, (value)=>value*2);
console.log(squareArray);