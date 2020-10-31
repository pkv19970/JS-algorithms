class MinHeap{
    constructor(){
        this.getSize = (ar)=>{
            return ar.length;
        }

        this.addElement = (ar, data)=>{
            let size = this.getSize(ar);
            ar.push(data);
            while(size/2>=1){
                if(ar[size]<ar[size/2]){
                    let t = ar[size];
                    ar[size] = ar[size/2];
                    ar[size/2] = t;
                }
                size = size/2;
            }
        }

        this.getindex = (data, ar)=>{
            let index = 1;
            let found = false;
            while(!found){
                if(data == ar[index])
                {
                    found = true;
                    return index;
                }
                else if(data == ar[2*index]){
                    found = true;
                    return 2*index;
                }
                else if(data == ar[2*index+1]){
                    found = true;
                    return 2*index + 1;
                }
                else{
                    if(data > ar[2*index] && data > ar[2*index] && ar[2*index]> ar[2*index+1]){
                        index = 2*index;
                    }
                    else{
                        index = 2*index+1;
                    }
                }
        }
        }

        this.deleteElement = (ar, data)=>{  
            let i = this.getindex(data, ar);
            console.log("index returned is "+i);
                while(i<this.getSize(ar)-1){
                    ar[i] = ar[2*i];
                    i = 2*i;
                }
            ar.pop();
        }
    }
}

let minheap = new MinHeap();
let ar = [];
ar.push(Number.NEGATIVE_INFINITY);
minheap.addElement(ar, 8);
minheap.addElement(ar, 15);
minheap.addElement(ar, 12);
minheap.addElement(ar, 10);
minheap.addElement(ar,18);
minheap.addElement(ar, 7);
minheap.addElement(ar, 9);
minheap.addElement(ar, 3);
minheap.deleteElement(ar,18);
console.log(ar);