// String Anagram
// "hello" -> "llheo"
// "sakib" -> "kisab"

// Condition 
// Length Check (for both string)
//string "sakib"
// {s:1,a:1,k:1,i:1,b:1}

function isAnagarm(str1,str2){
    if(str1.length !== str2.length){
        return false;
    }
    let counter = {};
    for(let letter of str1){
        counter[letter] = (counter[letter] || 0) + 1;
        console.log(counter[letter]);
    }
    for(let items of str2){
        if(!counter[items]){
            return false;
        }
        counter[items] -= 1;
    }

    return true;
}

const checkAnagram = isAnagarm("sakib","kisab")
console.log(checkAnagram);


// Linear Complexity o(n)