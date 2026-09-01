//Binary search Recurive 

function binarySearchRecursive(arr, target, left, right) {

    if (left > right) {
        return -1;
    }

    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
        return mid;
    }

    if (arr[mid] < target) {
        return binarySearchRecursive(
            arr,
            target,
            mid + 1,
            right
        );
    }

    return binarySearchRecursive(
        arr,
        target,
        left,
        mid - 1
    );
}

const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];

console.log(
    binarySearchRecursive(arr, 60, 0, arr.length - 1)
);