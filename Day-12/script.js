// recurise Function

function printNumber(num){
    if(num === 0){
        return;
    }

    printNumber(num-1);
    console.log(num);
}

printNumber(10);