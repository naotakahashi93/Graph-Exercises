class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex)    
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for(let vertex of vertexArray){
      // console.log(vertex, "addVertices VERTEXX")
      this.addVertex(vertex)
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2)
    v2.adjacent.add(v1)
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2)
    v2.adjacent.delete(v1)
    
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    this.nodes.delete(vertex)
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    let returnArr = []
    let seen = new Set()

    function traverse(vertex){
      if(!vertex){
        return null
      }
      seen.add(vertex)
      returnArr.push(vertex.value)
      // console.log(vertex, "VERTEXX", returnArr, "RETURN ARR")

      for(let neighbor of vertex.adjacent){
        // console.log(vertex.value, "neightbors are",vertex.adjacent)
        if(!seen.has(neighbor)){
          // console.log("traverse with", neighbor)
          traverse(neighbor)
        }
      }
    }
    traverse(start)
    return returnArr

  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    let queue = [start]
    let seen = new Set(queue)
    let returnArr = []
    // console.log(queue, "QUEUE", seen, "SEEN")

    while(queue.length){
      let currNode = queue.shift()
      // console.log("CURRENT NODE IS", currNode)
      returnArr.push(currNode.value)
      // console.log(returnArr, "RETURN ARRAY IS")
      for(let neighbor of currNode.adjacent){
        if(!seen.has(neighbor)){
        seen.add(neighbor)
        queue.push(neighbor)
        }
      }
    }

    return returnArr
  }
}

module.exports = {Graph, Node}