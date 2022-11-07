//최소 직사각형 구하기

function solution(sizes) {
  let a = 0;
  let b = 0;
  sizes.forEach((e) => {
    e.sort((a, b) => b - a)
    if (e[0] > a) {
      a = e[0];
    }
    if (e[1] > b) {
      b = e[1];
    }
  })
  console.log(a*b);
}


const size = [[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]

solution(size)