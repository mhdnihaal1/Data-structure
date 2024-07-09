class minheap{
    constructor(){
        this.data=[];
    }
    heapifyUp(){
        let currindex = this.data.length-1;
        while(this.data[currindex] < this.data[this.getparentindex(currindex)]){
            this.swap(currindex,this.getparentindex(currindex))
            currindex=this.getparentindex(currindex)
        }
    }
    heapfigydown(){
        let currindex = 0;
        while(this.data[this.getleftchild(currindex)] != undefined){
            let smallest = this.data[this.getleftchild(currindex)]

            if(this.data[this.getrightchild(currindex)] && this.data[this.getrightchild(currindex)] < this.data[getleftchild(currindex)]){
                smallest=this.data[this.getrightchild(currindex)]


                if(this.data[smallest] < this.data[currindex]){
                     smallest=currindex
                }
            }
        }
    }
}