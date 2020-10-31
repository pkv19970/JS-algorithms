let words = ['data', 'draw','drew','dark','algorithm','stack','structure','string',
            'store','dare','link','list','linked','sort','search','drunk','drank']

words.sort();


for(word of words){
    console.log(word)
}

/****one way***
function findNumberOfTimes(words,query){
    let count = 0;
    for(let i = 0;i<words.length;i++){
        let str = words[i];
        let isValid = 1;
        let k = 0;
        for(let j = 0;j<query.length;j++){
            if(query[j] == str[k]){
                k++;
            }
            else{
                isValid = 0;
                break;
            }
        }
        if(isValid == 1){
            count++;
        }
    }
    return count;
}
**/

//second way using binary searches

findNumberOfTimes = (words, query)=>{
    let p1 = 0, p2 = words.length - 1;
    for(let i = 0;i<query.length;i++){
        p1 = BS1(query[i], words, p1, p2, i);
        p2 = BS2(query[i], words, p1, p2, i);
    }
    return p2 - p1 + 1;
}

function BS1(q, words, p1, p2, k){
    let low = p1, high = p2
    var j = k;
    while(low <= high){
        let mid = Math.floor((low+high)/2);
       
        if(words[mid].charAt(j) == q){
            p1 = mid;
            high = mid - 1;
        }
        else if(words[mid].charAt(j) < q){
            low = mid + 1;
        }
        else{
            high = mid - 1;
        }
    }
    return p1;
}

function BS2(q, words, p1, p2, j){
    let low = p1, high = p2;
    while(low <= high){
        let mid = Math.floor((low+high)/2);
        if(words[mid].charAt(j) == q){
            p2 = mid;
            low = mid + 1;
        }
        else if(words[mid].charAt(j) < q){
            low = mid + 1;
        }
        else{
            high = mid - 1;
        }
    }
    return p2;
}

console.log(findNumberOfTimes(words,'li'));