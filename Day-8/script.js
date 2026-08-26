// Bubble Sort

function bubbleSort(arr){
    for(let i=0; i<arr.length; i++){

        for(let j=0; j<arr.length - i -1; j++){

            if( arr[j] > arr[j +1]){

                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([6,23,4,55,21,2]));



function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let swapped = false; // Track if any swap occurs in this pass

        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                
                swapped = true; // Mark that a swap took place
            }
        }

        // If no two elements were swapped in the inner loop, array is sorted
        if (!swapped) break;
    }
    return arr;
}

console.log(bubbleSort([10,20,30,15])); 

//Selection Sort