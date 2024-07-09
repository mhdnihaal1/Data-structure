class Node{
    constructor(value){
        this.value = value;
        this.left=null;
        this.right=null;
    }
}
class bst{
    constructor(){
        this.root=null
    }

    levelorder(){
        let queue=[];
        queue.push(this.root)
        while(queue.length >0){
            let current = queue.shift()
            console.log(current.value)
            if(current.left){
                queue.push(current.left)
            }
            if(current.right){
                queue.push(right.left)
            }
        }
    }
}