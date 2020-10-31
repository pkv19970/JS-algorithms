function countTriplets(arr, r) {
    let n = arr.length;
    let ans = 0;
    
    let left = new Map()
    let right = new Map()

    for(let i = 0;i<n;i++){
        if(right.has(arr[i])){
            right.set(arr[i], right.get(arr[i])+1);
        }
        else right.set(arr[i],1);
    }

    for(let i = 0;i<n;i++){
        let c1 = 0, c2 = 0;

        if(arr[i]%r == 0){
            if(left.get(arr[i]/r)){
                c1 = left.get(arr[i]/r)
            }
        }

        right.set(arr[i], right.get(arr[i])-1);

        if(right.get(arr[i]*r))
        {
            c2 = right.get(arr[i]*r);
        }
        ans = ans+c1*c2;

        if(left.get(arr[i])){
            left.set(arr[i], left.get(arr[i])+1);
        }
        else{
            left.set(arr[i], 1);
        }
    }

    return ans;
}

console.log(countTriplets([1, 2, 2, 4], 2))