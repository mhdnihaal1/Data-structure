class Node{
    constructor(value){
      this.value = value 
      this.left = null
      this.right = null
    }
  }

  //12
  
  class BinarySearchTree{
    constructor(){
      this.root = null
    }
  
    isEmpty(){
      return this.root === null
    }
  
    insert(value){
      const node = new Node(value)
      if(!this.root){
        this.root = node
      }else{
        this.insertNode(this.root , node)
      }
    }
  
    insertNode(root,node){
      if(node.value < root.value){
        if(root.left === null){
          root.left = node
        }else{
          this.insertNode(root.left,node)
        }
      }else{
        if(root.right === null){
          root.right = node
        }else{
          this.insertNode(root.right , node)
        }
      }
    }
  
    search(value){
      return this.searchNode(this.root , value)
    }
    searchNode(root , value){
      if(!root){
        return false
      }else{
        if(root.value === value){
          return true
        }else if(value < root.value){
          return this.searchNode(root.left , value)
        }else if(value > root.value){
          return this.searchNode(root.right , value)
        }else{
          return false
        }
      }
    }


    
  //root,left,right
    preOrder(root){
      if(root){
        console.log(root.value);
        this.preOrder(root.left);
        this.preOrder(root.right);
      }
    }
  //eft,right,root
    postOrder(root){
      if(root){
        this.postOrder(root.left);
        this.postOrder(root.right);
        console.log(root.value);
      }
    }
  //left,root,right
    inOrder(root){
      if(root){
        this.inOrder(root.left)
        console.log(root.value);
        this.inOrder(root.right)
      }
    }
  
    levelOrder(){
      const queue = [] 
      queue.push(this.root)
      while(queue.length){
        let current = queue.shift()
        console.log(current.value);
        if(current.left){
          queue.push(current.left)
        }
        if(current.right){
          queue.push(current.right)
        }
      }
    }
  
  
    min(root){
      if( root == null){
        return false
      }
      if(root.left ==null){
        return root.value 
      }else{
        return this.min(root.left)
      }
    }
  
    max(root){
      if(!root){
        return false
      }
      if(!root.right){
        return root.value
      }else{
        return this.max(root.right)
      }
    }
  
 
  
  
  isEqual(root1, root2){
    if(root1 === null && root2 === null){ 
      return true
    }
    if(root1 === null || root2 === null){
      return false
    }
    if(root1.value !== root2.value ){
      return false
    }
    return this.isEqual(root1.left , root2.left) && this.isEqual(root2.right , root2.right)
  }


   isValidBST(root){
    function validate(node, low, high) {
        if (!node) {
            return true;
        }

        if (node.value <= low || node.value >= high) {
            return false;
        }
        return validate(node.left, low, node.value) && validate(node.right, node.value, high);
    }
    return validate(root, -Infinity, Infinity);
}

//================================find the closest value=============================================

closest(root, target) {
    let closestValue = root.value
    let curr = this.root

    while (curr !== null) {
      if (Math.abs(curr.value - target) < Math.abs(closestValue - target)) {
        closestValue = curr.value
      }


      if (target < curr.value) {
        curr = curr.left
      } else if (target > curr.value) {
        curr = curr.right
      } else {
        break;
      }
    }
    return closestValue
  }
//==================================find the  second largest ========================================
 // Method to find the second largest element in the BST
 findSecondLargest() {
    if (this.root === null || (this.root.left === null && this.root.right === null)) {
        throw new Error('Tree must have at least two nodes');
    }
    return this.findSecondLargestHelper(this.root, null);
}

findSecondLargestHelper(node, parent) {
    // Traverse to the rightmost node
    while (node.right !== null) {
        parent = node;
        node = node.right;
    }

    // If the rightmost node has a left subtree
    if (node.left !== null) {
        return this.findLargest1(node.left);
    }

    // If the rightmost node doesn't have a left subtree, parent is the second largest
    return parent.val;
}

findLargest1(node) {
    while (node.right !== null) {
        node = node.right;
    }
    return node.val;
}



  }
  
  
  
  const bst = new BinarySearchTree()
  const bst2 = new BinarySearchTree()
  
  bst.insert(1)
  bst.insert(4)
  bst.insert(3)
  bst.insert(2)
  // bst.insert(7)
//   console.log(bst.isValidBST())

// console.log(bst.findClosestValueInBST(14))
// console.log(bst.findLargest())
// console.log(bst.findSecondLargest())

  
//   bst2.insert(12)
//   bst2.insert(16)
//   bst.insert(19)
//   bst2.insert(1)
  
  
//   console.log(bst.search(199));         
  

//   bst.preOrder(bst.root)
//   bst.postOrder(bst.root)
  bst.inOrder(bst.root)

// bst.levelOrder()
  
//   console.log(bst.isEqual(bst.root , bst2.root ));
  
  // bst.preOrder(bst.root)
  // console.log(bst.min(bst.root));
//   console.log(bst.max(bst.root));