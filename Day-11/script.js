// String Anagram

function isAnagram(str1,str2){
    if(str1.length !== str2.length){
        return false;
    }
    let count = {};
    for(let char of str1){
        count[char] = (count[char] || 0 ) + 1;
    }
    for(let char of str2){
        if(!count[char]){
            return false;
        }
        count[char]--;
    }
    return true;
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("listen", "silenntt"));

// First Unique Char

function firstUniqueChar(str){
    let count = {};
    for(let char of str){
        count[char] = (count[char] || 0) + 1;
    }
    for(let char of str){
        if(count[char] === 1){
            return char;
        }
    }
    return null;
}

console.log(firstUniqueChar("programmingp"));
