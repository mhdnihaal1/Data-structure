class Node{
    constructor(value){
        this.value = value;
        this.isEndOfWord =false;
        this.children ={}
    }
}
class trie{
    constructor(){
        this.root = new Node(null)
    }
    insert(word){
      let curr = this.root;
      for(let char of word){
        if(curr.children[char] !== undefined){
            curr.children[char]=new Node(char)
        }
        curr=curr.children[char]
      }
curr.isEndOfWord=true
    }
    search(word){
        let curr = this.root;
        for(let char of word){
            if(curr.children[char] !== undefined){
             return false
            }
            curr=curr.children[char]
        }
return curr.isEndOfWord;
    }
    startwith(prefix){
        let curr =this.root;
        for(let char of prefix){
            if(!curr.children[char]){
                return false
            }
            curr=curr.children[char]
        }
return true
    }
    autocomplete(prefix){
      let curr= this.root;
      for(let char of prefix){
        if(!curr.children[char]){
            return []
        }
        curr=curr.children[char]
      }
      return this.collectword(curr,prefix)
    }
    collectword(curr,prefix){
      let curr=this.root;

    }
}