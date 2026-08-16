// Find first sum zero pair
// [-5,-4,-3,-2,0,2,4,6,8]
// [-4,4]  output

function findSumZeroPair(arr){
    for(let i=0; i<arr.length;i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return([arr[i],arr[j]]);
            }
        }
    }
     return null;
}

let ans = findSumZeroPair([-5,-4,-3,-2,0,2,4,6,8]);
console.log(ans);