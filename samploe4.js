class graph{
    constructor(){
        this.vertices = new Map()
    }

    addvertex(vertex){
        if(!this.vertices.has(vertex)){
            this.vertices.set(vertex,[])
        }
    }
    addedges(vertex1,vertex2){
        this.addvertex(vertex1)
        this.addvertex(vertex2)

        this.vertices.get(vertex1).push(vertex2)
        this.vertices.get(vertex2).push(vertex1)
    }
    removevertex(vertex){
      if(!this.vertices.has(vertex)){
        this.vertices.delete(vertex)
      }
      for(let adjacentVertex of this.vertices.value()){
        let index = this.vertices.get(adjacentVertex)
        if(index !== -1){
            adjacentVertex.splice(index,1)
        }
      }
    }
    removeedges(vertex1,vertex2){
        if(this.vertices.has(vertex1)&&this.vertices.has(vertex2)){
            let index1 = this.vertices.get(vertex1).indexOf(vertex2)
            let index2 = this.vertices.get(vertex2).indexOf(vertex1)

            if(index1 !== -1){
                this.vertices.get(vertex1).splice(index1,1)
            }
            if(index2 !== -1){
                this.vertices.get(vertex2).splice(index2,1)
            }
        }
    }

    dfs(startvertex,visited =new Set(),callback){
        if(!visited.has(startvertex)){
            visited.add(startvertex)
            callback(startvertex)
        }

        for(let neighbor of this.vertices.get(startvertex)){
            this.dfs(neighbor,new Set([...visited]),callback)
        }
    }

    bfs(startVertex,callback){
        const visited = new Set()
        const queue =[startVertex];
        while(queue.length >0){
            let currentvertex = queue.shift()

            if(!visited.has(currentvertex)){
                callback(currentvertex)
                visited.add(currentvertex)

                for(let neighbor of this.vertices.has(currentvertex)){
                    if(!visited.has(neighbor)){
                        queue.push(neighbor)
                    }
                }
            }
        }
    }

}

