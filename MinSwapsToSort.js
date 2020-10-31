function minimumSwaps(arr) {
    let count = 0;
    for(let i = 0;arr.length;i++){
        if(arr[i]!=i+1){
           let index = BS(i+1, arr);
           let t = arr[i];
           arr[i] = arr[index];
           arr[index] = t;
           count++;
        }
    }
    return count;
}



console.log(minimumSwaps([2,3,4,1,5]))