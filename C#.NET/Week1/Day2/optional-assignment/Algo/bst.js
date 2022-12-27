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
}    


var node1 = new Node (8);
var node2 = new Node (45);
var node3 = new Node (6);
node1.right = node2 ;
node1.left = node3 ; 
var myBst = new BST ();
console.log(myBst.isEmpty());
myBst.root= node1;
console.log(myBst.isEmpty());
console.log(myBst.min());
console.log(myBst.find(8));