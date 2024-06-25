class HashTable {

     constructor(size){
        this.table = new Array(size)
        this.size = size;
     }

     hash(key){
      let total =0;
      for(let i=0; i < key.length;i++){
         total += key.charCodeAt(i)
      }
      return total % this.size
     }
   

     set(key,value){
      let index = this.hash(key)
      this.table[index] = value
     }

     get(key){
      const index = this.hash(key)
      return this.table[index]
     }

     remove(key){
    const index = this.hash(key)
    this.table[index] = undefined

     }

     display(){
      
        for(let i=0;i< this.table.length;i++){
            if(this.table[i]){
                console.log(this.table[i])
            }
        }
       
     }

}
const table = new HashTable(50)

table.set("name","Basith")
// table.set("age",16)
table.display()
// console.log(table.get("name"))
// table.remove("name")
// table.display()
// console.log(table.hash("age"))
// console.log(table.size)

class hash{
   constructor(size){
      this.table=new Array(size)
      this.size = size;
   }

    hash(key){
      let total=0;
      for(let i=0;i<key.length;i++){
         total += key.charCodeAt(i)
      }
      return total % this.size
    }

    set(key,value){
      let index = this.hash(key)
      let bucket = this.table[index]
      for(let i=0;i<key.length;i++){
         if(!bucket){
            this.table[index]=[[key,value]]
         }else{
            let samekeyitem = bucket.find(item =>item[0] === key)
            if(samekeyitem){
               samekeyitem[1]=value
            }else{
               bucket.push([key,value])
            }
         }
      }
   }
    get(key){
      let index =this.hash(key)
      let bucket = this.table[index]
      for(let i=0;i<key.length;i++){
         if(bucket){
            let same = bucket.find(item => item[0] === key)
            if(same){
               return same[1]
            }
         }
      }
      return undefined
   }

    remove(key){
      let index = this.hash(key)
      let bucket = this.table[index]
      for(let i=0;i<key.length;i++){
         if(bucket){
            let same = bucket.find(item => item[0] === key)
            if(same){
                bucket.splice(bucket.indexOf(same),1)
            }
         }
      }    
   }

    display(key){
      for(let i=0;i<key.length;i++){
         if(this.table[i]){
         console.log(this.table[i])
         }
      }
    }

}