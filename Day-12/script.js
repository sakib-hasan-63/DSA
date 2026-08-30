// recurise Function

function printNumber(num){
    if(num === 0){
        return;
    }

    printNumber(num-1);
    console.log(num);
}

printNumber(10);

// Call Stack

function count(n) {

    if (n === 0) {
        return;
    }

    console.log(n);

    count(n - 1);
}

count(3);

// Recursive factorial 

function factorial(num){
    if(num === 0 || num === 1){
        return 1;
    }

    return num * factorial(num - 1);
}

console.log(factorial(5));