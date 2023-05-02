// 정수를 나선형으로 배치하기

// 양의 정수 n이 매개변수로 주어집니다. n × n 배열에 1부터 n2 까지 정수를 인덱스 [0][0]부터 시계방향 나선형으로 배치한 이차원 배열을 return 하는 solution 함수를 작성해 주세요.

function solution(n) {
  var answer = [[]];

  let arr = new Array(n).fill(0).map( () => new Array(n).fill(0));
  let value = 1;
  let row = 0;
  let col = 0;
  let direction = 0;

  while (value <= n * n) {

    arr[row][col] = value++; 

    if (direction === 0) {
      if (col === n - 1 || arr[row][col + 1] !== 0) {
        direction = 1;
        row++;
      } else {
        col++;
      }
    } else if (direction === 1) {
      if (row === n - 1 || arr[row + 1][col] !== 0) {
        direction = 2;
        col--;
      } else {
        row++;
      }
    } else if (direction === 2) {
      if (col === 0 || arr[row][col - 1] !== 0) {
        direction = 3;
        row--;
      } else {
        col--;
      }
    } else if (direction === 3) {
      if (row === 0 || arr[row - 1][col] !== 0) {
        direction = 0;
        col++;
      } else {
        row--;
      }
    }

  }

  answer = arr;

  return answer;
}

console.log(solution(4)) // [[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]]
console.log(solution(5)) // [[1, 2, 3, 4, 5], [16, 17, 18, 19, 6], [15, 24, 25, 20, 7], [14, 23, 22, 21, 8], [13, 12, 11, 10, 9]]