//그림수, 넓이 구하기
let temp = 0;
let cnt = 0;
const needVisited = [];
function solution(n, m, graph) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] === 1) {
        cnt++;
        let width = bfs(i, j, n, m)
        if (temp < width) {
          temp = width
        }
      }
    }
  }
  console.log(cnt);
  return temp
}

function bfs(x, y, n, m) {
  graph[x][y] = false;
  let width = 1;
  needVisited.push([x, y]);
  const dx = [0, 0, -1, 1]  //좌 우 상 하
  const dy = [-1, 1, 0, 0];

  while (needVisited.length !== 0) {
    const ex = needVisited[0][0];
    const ey = needVisited[0][1];
    needVisited.shift();
    for (let i = 0; i < dx.length; i++) {
      const nx = ex + dx[i];
      const ny = ey + dy[i];
      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if (graph[nx][ny] === 1) {
        width++;
        graph[nx][ny] = 0;
        needVisited.push([nx, ny]);
      }
    }
  }
  return width
}

const graph = [
  [1, 1, 0, 1, 1],
  [0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [1, 0, 1, 1, 1],
  [0, 0, 1, 1, 1],
  [0, 0, 1, 1, 1]]

console.log(solution(6, 5, graph))

