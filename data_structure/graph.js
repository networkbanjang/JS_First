INF = 9999999; //무한의 비용선언

const graph = [
 [0,7,5],
 [7,0,INF],
 [5,INF,0],
]

const graph2 = [[],[],[]]

//노드 0에 연결된 노드저장 정보 (노드,거리)
graph2[0].push([1,7]);
graph2[0].push([2,5]);

graph2[1].push([0,7]);

graph2[2].push([0,5]);

console.log(graph2);