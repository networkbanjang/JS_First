const graph = {
  A: ['B', 'C'],
  B: ['A', 'D'],
  C: ['A', 'G', "H", 'I'],
  D: ['B', 'E', 'F'],
  E: ['D'],
  F: ['D'],
  G: ['C'],
  H: ['C'],
  I: ['C', 'J'],
  J: ['I']
}


const bfs = (graph, start) => {
  const checked = [];    // 탐색 완료 데이터
  const willCheck = [];  // 탐색 예정 데이터               

  willCheck.push(start);               //willcheck=["A"]

  while (willCheck.length !== 0) {
    const node = willCheck.pop();  
    if (!checked.includes(node)) {   
      checked.push(node);   
      willCheck.push(...graph[node].reverse());      
    }
  }
  return checked;
}
console.log(bfs(graph, "A"));
