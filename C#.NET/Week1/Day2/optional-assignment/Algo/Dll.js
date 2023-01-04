class Node {
    constructor (value){
        this.value = value 
        this.next = null 
        this.prev = null 
    }
}
class DLL{
    constructor(){
        this.head = null 
        this.tail = null
    }
    isEmpty (){
        if (this.head===null){
            return true     
        }
        else return false 
    }
    addToFront (value){
       let newNode = new Node (value);
        if (!this.head){
            newNode = new Node(value)
            this.head=newNode
            this.tail=newNode
        }
        else {
            newNode = new Node(value)
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
        return this
 
    }
    addToBack(value){
        let newNode = new Node(value)
        if (!this.head){
            newNode = new Node(value)
            this.head = newNode
            this.tail = newNode
        }
        else {
            newNode = new Node(value)
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
           
        }
        return this
    }
 
}

var Dll = new DLL ;
Dll.addToBack(5);
Dll.addToBack(10);
Dll.addToBack(17);
console.log(Dll);

