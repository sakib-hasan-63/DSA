// [1,1,2,3,3,3,4,5,5,6,7,7,8,9,]
// Given array and find its unique value

// output 9

//Condition 
// i=0 j=1
//arr[i] !== arr[j]
// 1. i++
// 2. arr[i] = arr[j]

function countUnique(arr) {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}

const ans = countUnique([1, 1, 2, 3, 3, 3, 4, 5, 5, 6, 7, 7, 8, 9,]);
console.log(ans);