class hash{

constructor(key){
    this.table = new Array(key)
    this.size=0
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
this.table[index]=value
}

get(key){
    let 

}



}