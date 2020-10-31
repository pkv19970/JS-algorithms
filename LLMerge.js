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

function MergeLL(){
    ar1 = [5,10,12,18,21];
    ar2 = [3,7,9,40,43];
    head1 = createLL(ar1);
    head2 = createLL(ar2);
    // displayLL(head1);
    // displayLL(head2);
    dummy = new Node(-1000);
    dd = dummy;
    while(head1!=null && head2!=null){
        if(head1.data<head2.data){
            dummy.next = head1;
            head1 = head1.next;
            dummy = dummy.next;
        }
        else{
            dummy.next = head2;
            head2 = head2.next;
            dummy = dummy.next;
        }
    }
    if(head1!=null){
        dummy.next = head1;
    }
    else{
        dummy.next = head2;
    }
    displayLL(dd.next);
}

MergeLL();
