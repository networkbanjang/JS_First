//DFS 네트워크 체크

function solution(n, computers) {
  n--;
  let answer = 0;
  const visited = [];

  for (let i = n; i >= 0; i--) {
    if (!visited.includes(i)) {
      dfs(i, computers, visited);
      answer++;
    }
  }
  console.log(answer)
}

function dfs(n, computers, visited) {
  visited.push(n)
  Array.from(computers[n]).forEach((e, i) => {
    if (e === 1) {
      if (!visited.includes(i))
        dfs(i, computers, visited);
    }
  })
};

const computers = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1]
];
const n = 3


solution(n, computers);