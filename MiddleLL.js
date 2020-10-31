class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

function createLL(ar){
    head = new Node(ar[0]);
    thead = head;
    for(i = 1;i<=ar.length-1;i++){
        newnode = new Node(ar[i]);
        head.next = newnode;
        head = head.next;
    }
    return thead;
}

function displayLL(head){
    while(head!=null){
        console.log(head.data);
        head = head.next;
    }
}

function MiddleElement(head, flag){
    sp = head;
    fp = head;
    while(fp.next!=null && fp.next.next!=null){
        sp = sp.next;
        fp = fp.next.next;
    }
    if(fp.next!=null && flag == false)
        return sp.next.data;
    
    return sp.data;
}

function LLcreation(){
    ar1 = [5,10,12,18,21,23];
    flag = true;
    head1 = createLL(ar1);
    console.log(MiddleElement(head1, flag));
}

LLcreation();
