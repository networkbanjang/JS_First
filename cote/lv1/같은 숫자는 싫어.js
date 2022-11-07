//1레벨 같은 숫자는 싫어
function solution(arr) {
  const answer = [];

  for (let i of arr) {
    if(i === answer[answer.length-1]) continue;
      answer.push(i)
  }
  return answer;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));