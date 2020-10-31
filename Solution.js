'use strict';

let magazine = "two times three is not four".split(' ');
let notes = "two times two is four".split(' ');

function checkMagazine(magazine, note) {
    let map = new Map();
    let flag = 0;
    magazine.forEach(element=>{
        if(map.has(element)){
            map.set(element, map.get(element)+1);
        }
        else{
            map.set(element, 1);
        }
    })

    note.forEach(element=>{
        if(map.get(element)>0){
            map.set(element, map.get(element)-1);
            if(map.get(element)<=0){
                map.delete(element);
            }
        }
        else{
            flag = 1;
        }
    })
    if(flag == 1){
        console.log("No");
    }
    else{
        console.log("Yes")
    }
}

checkMagazine(magazine, notes)