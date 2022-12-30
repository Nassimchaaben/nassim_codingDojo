class Node {
    constructor (value){
        this.value = value 
        this.right = null 
        this.left = null
    }
}

class BST{
    constructor(){
        this.root = null 
    }
    isEmpty (){
        
            return this.root===null   
        }
    min (){
        let runner =this.root;
        let minVal = runner.value ;
        while (runner.left!==null){
            if (minVal < runner.left.value){
                minVal=runner.left.value
            } 
            runner = runner.left 
        }
        return minVal
       
    }
    minRecusive(runner)
    {
        if(this.isEmpty())
        {
            return false
        }
        
        if (runner.left===null)
        {
            return runner.value
        }
        return this.minRecusive(runner.left)
    }


    max (){
        if (this.isEmpty())
        {
            return false
        }
        let runner = this.root;
        let maxVal = runner.value
        while(runner.right!==null){
            if (maxVal>runner.right.value){
                maxVal=runner.right.value
            }
        }
        return maxVal

    }

    maxRecusive(runner)
    {
        if(this.isEmpty())
        {
            return false
        }
        
        if (runner.right===null)
        {
            return runner.value
        }
        return this.maxRecusive(runner.right)
    }
    find(value){
        if (this.isEmpty()!==null){
            let runner = this.root;
            while(runner){
                if(runner.value == value){
                    return true
                }
                else{
                    if(runner.value>value){
                        runner=runner.left
                    }
                    runner=runner.right
                }
        }return false
        
        {
            
        }
    }
}
insertValue(value)
    {
        const newNode =  new Node(value)
        if (this.isEmpty() ) 
        {
            this.root= new Node(value)
            return this
        }
        else
        {
            let runner= this.root
            while(runner)
            {
                if(runner.value<=value)
                {
                    if( runner.right===null)
                    {
                        runner.right= newNode
                        return this
                    }
                    runner= runner.right
                }
                else 
                {
                    if (runner.value>value )
                    {
                        if (runner.left===null) 
                        {
                            runner.left=newNode
                            return this
                        }
                        runner=runner.left
                    }
                }
            }
        }
    }

printPreOrder(runner,arr=[])
{
    if(this.isEmpty())
    {
        return false
    }
    if(runner){
        console.log(runner.value);
        arr.push(runner.value)
        this.printPreOrder(runner.left,arr)
        this.printPreOrder(runner.right,arr)
    }
    return arr
}
}
   


// var node1 = new Node (8);
// var node2 = new Node (45);
// var node3 = new Node (6);
// node1.right = node2 ;
// node1.left = node3 ; 
var myBst = new BST ();
// console.log(myBst.isEmpty());
// myBst.root= node1;
// console.log(myBst.isEmpty());
// console.log(myBst.min());
// console.log(myBst.find(8));
myBst.insertValue(10);
myBst.insertValue(7);
myBst.insertValue(12);
myBst.insertValue(4);
myBst.insertValue(50);
myBst.insertValue(15);
myBst.insertValue(9);
myBst.insertValue(3);
// console.log(myBst.minRecusive(myBst.root));
// console.log(myBst.maxRecusive(myBst.root));
console.log(myBst.printPreOrder(myBst.root));