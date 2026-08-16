// Find first sum zero pair
// [-5,-4,-3,-2,0,2,4,6,8]
// [-4,4]  output
// Different way to solve this problem and efficient way and linear way

// if we want to all the sum zero pair print then we have to

function findAllSumZeroPairs(array) {
    let left = 0;
    let right = array.length - 1;
    const result = [];

    while (left < right) {
        let sum = array[left] + array[right];

        if (sum === 0) {
            result.push([array[left], array[right]]);
            left++;
            right--;
        } 
        else if (sum > 0) {
            right--;
        } 
        else {
            left++;
        }
    }

    return result;
}

let anss = findAllSumZeroPairs([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(anss);


// it find only one pair of sum zero

function findSumZeroPair(arr){
    let left = 0;
    let right = arr.length-1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return([arr[left],arr[right]]);
        }
        else if(sum > 0){
            right --;
        }
        else{
            left++;
        }
    }
}

let ans = findSumZeroPair([-5,-4,-3,-2,0,2,4,6,8]);
console.log(ans);