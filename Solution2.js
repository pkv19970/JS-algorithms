let s = 'kkkk'
function sherlockAndAnagrams(s) {
    let count = 0;
    let size = 1;
    let map = new Map();
    let ss = '';
    let str = '';
    for(let i = 0;i<s.length;i++){
        for(let j = i;j<s.length;j++){
            let c = s.substring(i,j+1).split("");
            c.sort();
            let ss = String(c);
            if(map.get(ss)){
                map.set(ss, map.get(ss)+1);
            }
            else
            {
                map.set(ss, 1);
            }
        }
    }
     let keys = map.keys()
    for(let ele of keys){
        n = map.get(ele);
        count = count + n*(n-1)/2;
    }
    
    console.log(count);
}
 
//sherlockAndAnagrams(s);

sherlockAndAnagrams(s)