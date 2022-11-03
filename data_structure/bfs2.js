const graph = [
  [],
  [2, 3, 4],
  [1, 5, 6],
  [1],
  [1, 7, 8],
  [2, 9, 10],
  [2],
  [4, 11, 12],
  [4],
  [5],
  [5],
  [11],
  [12],
]

const BFS = (graph, start, visited) => {
  const need_visited = [];
  need_visited.push(start);
  visited[start] = true; //방문처리
  while (need_visited.length !== 0) {
    const temp = need_visited.shift();
    console.log(temp);
    for(let i of graph[temp]){
      if (!visited[i]){
        need_visited.push(i);
        visited[i] = true;
      }
    }
  }
};
const visited = []
for (let i = 0; i < graph.length; i++) {
  visited.push(false);
}

BFS(graph, 1, visited);
