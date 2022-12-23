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
    delete (value)
    {
        if (this.isEmpty()){
            return false
        }
        else 
        {
            let find = this.head ;
            while (find.next){
            if (find.value == value){
                find.next = find.next.next
                return this
            }
            else {
                find = find.next
            } 
            }
        }

    }

    removeAtFront()
    {
        if (this.isEmpty()){
            return false
        }
        else {
            this.head = this.head.next
            return  this
        }
    }


size()
{
   let find =this.head ;
   count = 1 ;
   while (find.next!== null){
    find = find.next
    count ++
   }
   return count
}
insertAtFront(value)
{

    let newNode = new Node (value);
    newNode.next = this.head;
    this.head = newNode 
    
return this

}


reverse()
{
    if (this.isEmpty()){
        return false
    }
    let prev = null;
    let current = this.head;
    let next = null;
    while(current!==null)
    {
        next = current.next;
        current.next = prev;
        prev = current ;
        current=next;
        
        
    }
    this.head=prev
    return this.head

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
mySLL.insertAtFront(200);
mySLL.read(mySLL);
mySLL.reverse()
mySLL.read(mySLL);