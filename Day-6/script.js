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
console.log(findMax([12,3,44,55,66,64,43,334,,22]));