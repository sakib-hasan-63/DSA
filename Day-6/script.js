// Array Question 
//find Max
//Find Min
//find Sum
//Find Even
// Array Reverse

//Find Max

function findMax(arr){
    let max=[];
    for(let i=0; i<arr.length; i++){
        if(arr[i] > max){
            max=arr[i];
        }
    }
    return max;
}
console.log(findMax([12,3,44,55,66,64,43,334,22]));

// Find Min

function findMin(arr){
    let min=arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i] < min){
            min=arr[i];
        }
    }
    return min;
}
console.log(findMin([12,3,44,55,66,64,43,334,22]));

// Find Sum


function arraySum(arr){
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum= sum + arr[i];
    }
    return sum;
}
console.log(arraySum([12,3,44,55,66,64,43,334,22]));