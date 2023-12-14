// 0과 1로만 이루어진 행렬 A와 행렬 B가 있다. 이때, 행렬 A를 행렬 B로 바꾸는데 필요한 연산의 횟수의 최솟값을 구하는 프로그램을 작성하시오.
// 행렬을 변환하는 연산은 어떤 3×3크기의 부분 행렬에 있는 모든 원소를 뒤집는 것이다. (0 → 1, 1 → 0)

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1, input.length);

function solution(arr) {

  let answer = 0;
  let [N, M] = input[0].split(" ").map( (el) => Number(el));
  let newArr = [];
  
  const flipSubmatrix = (matrix, row, col) => {
    for (let i = row; i < row + 3; i++) {
      for (let j = col; j < col + 3; j++) {
        matrix[i][j] = 1 - matrix[i][j];
      }
    }
  };

  for (let i = 1; i <= N; i++) {

    let row = arr[i - 1];

    newArr.push(row.split("").map( (el) => Number(el)));

  }

  for (let i = N + 1; i <= 2 * N; i++) {

    let row = arr[i - 1];
    let numArr = row.split("").map( (el) => Number(el));
  
    for (let j = 0; j < M; j++) {
      newArr[i - N - 1][j] = (newArr[i - N - 1][j] !== numArr[j]) ? 1 : 0;
    }

  }
  
  if (N >= 3 && M >= 3) {
    for (let i = 0; i < N - 2; i++) {
      for (let j = 0; j < M - 2; j++) {
        if (newArr[i][j] === 1) {
          flipSubmatrix(newArr, i, j);
          answer++;
        }
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (newArr[i][j] === 1) {
        return -1;
      }
    }
  }
  
  return answer;
}

console.log(solution(newInput));