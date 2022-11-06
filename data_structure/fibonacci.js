// function fibo(x) {
//   if (x === 1 || x === 2)
//     return 1;
//   return fibo(x - 1) + fibo(x - 2)
// }
//단순 계산

const a = [];

function fibo(x) {   //재귀방식
  if (x === 1 | x === 2) return 1;
  if (a[x]) return a[x];  //한번 계산한적 있는 문제라면 그대로 반환
  a[x] = fibo(x - 1) + fibo(x - 2) //계산한적없으면 결과반환
  return a[x]
}

console.log(fibo(99));

const b = [];
b[1] = 1;
b[2] = 1;

n = 99;
for (let i = 3; i <= n ; i++) {
  b[i] = b[i - 1] + b[i - 2];
}
console.log(b[n])