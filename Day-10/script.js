// String Operation

// String Traversal

let str = "sakib";

for(let i=0; i<str.length; i++){
    console.log(str[i]);
}

// Reverse String 

function reverseString(str){
    let result = "";
    for(let i= str.length-1; i>=0; i--){
        result += str[i];
    }
    return result;
}
console.log(reverseString("sakib"));