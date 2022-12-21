//.Singly linked list 

class Node {
    constructor (value){
        this.value = value 
        this.next = null 
    }
}

class SSL{
    constructor(){
        this.head = null 
    }
    isEmpty (){
        if (this.head===null){
            return true     
        }
        else return false 
    }

    addToBack (value){
       
        if (this.isEmpty()===true){
            this.head = new Node(value)
        }
        else {
            let runner = this.head ;
            while (runner.next !== null ) {
                runner = runner.next;
            }
                runner.next = new Node (value);
           
        }
        return this
 
    }
    read ()
    {
        if (this.isEmpty()===true){
            this.head = new Node(value) 
        }
        else
        { 
           let read = this.head ;
           while (read !== null){
            console.log(read.value);
            read = read.next 
           }
        }
    }

    find (value)
    {
        if (this.isEmpty()){
            return false     
        }
        else {
            let find = this.head ;
            while (find){
            if (find.value === value){
                return true
            }
            else {
                find = find.next
            }
           
            }
        } return false 
    }
    removeAtFront (value)
    {
        if (this.isEmpty()){
            return false
        }
        else 
        {
            let find = this.head ;
            while (find){
            if (find.value === value){
                return delete find.value
            }
            else {
                find = find.next
            }
           
            }

        }
    }
} 

var firstNode = new Node (5);
var secondNode = new Node (13);
firstNode.next = secondNode;

var firstSSL = new SSL ();
firstSSL.head = firstNode 
console.log(firstSSL);

var mySLL = new SSL ();
console.log(mySLL);
mySLL.addToBack(661).addToBack(200).addToBack(-2);
console.log(mySLL);
mySLL.read(mySLL)
mySLL.removeAtFront(661);
console.log(mySLL);