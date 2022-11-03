function dfs(graph, v, visited) {
  // 현재노드 방문처리
  visited[v] = true;
  console.log(v);
  // 현재 노드와 연결된 다른 노드를 재귀적으로 방문
  graph[v].forEach(i => {
      // 방문한 노드인지 확인
      if (visited[i] === false) {
          dfs(graph, i, visited);
      }
  });
}

const graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7]
]

const visited = [];           //visited = []

for(let i=0; i < graph.length; i++){
  visited.push(false);
} //visited [true,true,flase,false,false,false,false,false]
dfs(graph, 1, visited);