//문자열로 합쳤을때 가장 큰 수 구하기

function solution(numbers) {
  const temp = [];
  numbers.forEach(element => {
    temp.push(element + '');
  });
  temp.sort((a, b) => {
    if (a+b<b+a) return 1; 
    else if (a+b>b+a) return -1;
    else if (a+b===b+a) return 0;
  })
  let answer =temp.join('');
  answer = answer.replace(/(^0+)/, "");  
  return answer;
}

console.log(solution([3, 30, 34, 5, 9]))