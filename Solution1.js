let s1 = "pawap"
let s2 = "pawpa"

function Anagram(s1, s2) {
    let str = s1;
    let flag = 0;
    let map = new Map();
    for(let i = 0;i<str.length;i++){
    if(map.has(str.charAt(i))){
        map.set(str.charAt(i), map.get(str.charAt(i))+1);
    }
    else{
        map.set(str.charAt(i),1);
    }
    }
    for(let i = 0;i<s2.length;i++){
        if(map.has(s2.charAt(i))){
            map.set(s2.charAt(i), map.get(s2.charAt(i))-1);
            if(map.get(s2.charAt(i))<=0){
                map.delete(s2.charAt(i));
            }
        }
        else{
            flag == 1;
        }
    }
    if(flag == 1){
        return false;
    }
    else{
        return true;
    }
}
console.log(Anagram(s1,s2))