//1레벨 비밀지도 구하기

function solution(n, arr1, arr2) {
  const answer =[]
  const first = []
  const second = []
  for (i of arr1) {
    let temp = i.toString(2) + ""
    temp = temp.padStart(n, '0');
    first.push(temp);
  }
  for (i of arr2) {
    let temp = i.toString(2) + ""
    temp = temp.padStart(n, '0');
    second.push(temp);
  }
  for (let i = 0; i < first.length; i++) {
    answer.push('')
    for (let j = 0; j < second.length; j++) {
      if (first[i][j] === '1' || second[i][j] === '1') {
        answer[i] += '#'
      } else {
        answer[i] += ' '
      }
    }
  }
  return answer
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));