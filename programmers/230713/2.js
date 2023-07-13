// 삼각 달팽이

// 정수 n이 매개변수로 주어집니다. 다음 그림과 같이 밑변의 길이와 높이가 n인 삼각형에서 맨 위 꼭짓점부터 반시계 방향으로 달팽이 채우기를 진행한 후, 첫 행부터 마지막 행까지 모두 순서대로 합친 새로운 배열을 return 하도록 solution 함수를 완성해주세요.

function solution(n) {
  var answer = [];

  let arr = Array.from({ length: n }, () => new Array(n).fill(0));
  let direction = [
    [1, 0],
    [0, 1],
    [-1, -1]
  ];
  let row = -1;
  let col = 0;
  let count = 1;
  let index = 0;

  for (let i = n; i > 0; i = i - 1) {

    let [x, y] = direction[index];

    for (let j = 0; j < i; j = j + 1) {
      row = row + x;
      col = col + y;
      arr[row][col] = count;
      count = count + 1;
    }

    index = (index + 1) % 3;
  }

  for (let i = 0; i < n; i = i + 1) {
    for (let j = 0; j < n; j = j + 1) {
      if (arr[i][j]) {
        answer.push(arr[i][j]);
      }
    }
  }

  return answer;
}

console.log(solution(4)) // [1,2,9,3,10,8,4,5,6,7]
console.log(solution(5)) // [1,2,12,3,13,11,4,14,15,10,5,6,7,8,9]
console.log(solution(6)) // [1,2,15,3,16,14,4,17,21,13,5,18,19,20,12,6,7,8,9,10,11]