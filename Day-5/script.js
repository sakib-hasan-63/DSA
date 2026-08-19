// [1,2,3,4,3,5,4,6,7,8]
// count largest sum of consecutive Digits
// num=4
// sum => 25

// condition
//num > array -> error message
//10 - 4 + 1 => 7

function findLargest(arr,num){
    if(num > arr){
        throw new Error("num is not greter than array")
    }
    else{
        let max=0;
        for(let i=0; i<arr.length - num +1; i++){
             let temp=0;
            for(let j=0; j<num; j++){
                temp+=arr[i+j];
            }
            if(temp>max){
                max=temp;
            }
        }
        return max;
    }
}

const result = findLargest([1,2,3,4,3,5,4,6,7,8],4);
console.log(result);