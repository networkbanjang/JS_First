function binary_Search(array, target, start, end) {
  if (start > end) return '찾지 못했습니다.';   // 탐색하는게없을경우
  const mid = parseInt((start + end) / 2)

  if (array[mid] == target) return mid;  //찾은경우
  else if (array[mid] > target) return binary_Search(array, target, start, mid - 1);  //중간점이 찾는 값보다 작을경우 왼쪽으로 이동
  else return binary_Search(array, target, mid + 1, end);
}

const array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];


console.log(binary_Search(array, 7, 0, array.length - 1) + 1)

function loop(array, target, start, end) {
  while (start <= end) {
    const mid = parseInt((start + end) / 2)
    if (array[mid] == target) return mid //찾은경우
    else if (array[mid] > target) end = mid - 1;  //중간점의 값이 보다 작은경우 왼쪽확인
    else start = mid + 1
  }
  return '찾지 못했습니다'  //탐색하는게 없을경우
}

console.log(loop(array, 7, 0, array.length - 1) + 1)
