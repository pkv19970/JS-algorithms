const { rootCertificates } = require("tls");

class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function addToDLL(head, data){
    let temp = head
    while(temp.right!=null){
        temp = temp.right;
    }
    let newnode = new Node(data);
    temp.right = newnode;
    newnode.left = temp;
}

function createDLL(){
    let head = new Node(-8);
    addToDLL(head, -5);
    addToDLL(head, -3);
    addToDLL(head, 5);
    addToDLL(head, 8);
    addToDLL(head, 10);
    addToDLL(head, 12);
    addToDLL(head, 18);
    addToDLL(head, 23);
    return head;
}

function displayDLLAndReturnLength(head){
    let temp = head;
    let count = 0;
    while(temp!=null){
        //console.log(temp.data);
        count++;
        temp = temp.right;
    }
    return Math.floor(count);
}

function getMidNode(head, countOfNodes){
    let temp = head;
    let i = 0;
    while(i<Math.floor(countOfNodes/2)){
        temp = temp.right;
        i++;
    }
    return temp;
}

function convertToBST(head, countOfNodes){
    if(head == null||(head.right == null && head.left == null)){
        return head;
    }
    let middlenode = getMidNode(head, countOfNodes);
    let righthalf = middlenode.right;

    if(middlenode.right!=null){
        middlenode.right.left = null;
        middlenode.right = null;
    }
    if(middlenode.left!=null){
        middlenode.left.right = null;
        middlenode.left = null;
    }

    middlenode.left = convertToBST(head, Math.floor(countOfNodes/2));
    middlenode.right =  convertToBST(righthalf, Math.floor(countOfNodes/2));
    return middlenode;
}

let head = createDLL();
let countOfNodes = displayDLLAndReturnLength(head);
let root = convertToBST(head, countOfNodes);
//console.log(root);
let lastNode = convertToDLL(root);
console.log(lastNode)
/*while(lastNode.right!=null){
    lastNode = lastNode.right;
}

while(lastNode.left !=null){
    console.log(lastNode.data);
}*/

function leftSide(root){
    if(root == null)
        return;
    if(root.left!=null)
        root.left = leftSide(root.left);
    if(root.right!=null)
        root.right = leftSide(root.right);
    if(root.left!=null)
        root.left.right = root;
    if(root.right!=null){
        root.right.left = root;
        while(root.right!=null)
        {
            root = root.right;
        }
    }
    return root;
}

function RightSide(root){
    if(root == null)
        return;
    if(root.left!=null)
        root.left = RightSide(root.left);
    if(root.right!=null)
        root.right = RightSide(root.right);
    if(root.left!=null)
        root.left.right = root;
    if(root.right!=null){
        root.right.left = root;
        while(root.left!=null)
        {
            root = root.left;
        }
    }
    return root;
}

function convertToDLL(root){
    
    let temp1 = root.left;
    let temp2 = root.right;

    root.left = null;
    
    let leftsi = leftSide(temp1);
    
    root.right = null;
    let rightsi = RightSide(temp2);
    
    leftsi.right = root;
    root.left = leftsi;

    console.log("left side text")
    console.log(leftSide);
    console.log("right side text")
    console.log(rightsi);

    rightsi.left = root;
    root.right = rightsi;

    while(root.left!=null)
    {
        root = root.left;
    }
    
    return root;
}