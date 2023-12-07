// N×M크기의 직사각형이 있다. 각 칸에는 한 자리 숫자가 적혀 있다. 이 직사각형에서 꼭짓점에 쓰여 있는 수가 모두 같은 가장 큰 정사각형을 찾는 프로그램을 작성하시오. 이때, 정사각형은 행 또는 열에 평행해야 한다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1, input.length);

function solution(arr) {

  let answer = 1;
  let [N, M] = input[0].split(" ").map( (el) => Number(el));
  let newArr = [];
  let move = [
    [1, 0],
    [1, 1],
    [0, 1]
  ];
  
  for (let i = 1; i <= N; i++) {

    let row = arr[i - 1].split("").map( (el) => Number(el));

    newArr.push(row);

  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      for (let k = 1; k < N; k++) {

        let cnt = 0;
        let temp = newArr[i][j];

        for (let [dy, dx] of move) {

          let ny = i + dy * k;
          let nx = j + dx * k;

          if (0 <= ny && ny < N && 0 <= nx && nx < M) {
            if (newArr[ny][nx] === temp) {
              cnt++;
            }
          }

        }

        if (cnt === 3) {
          answer = Math.max(answer, (k + 1) * (k + 1));
        }

      }
    }
  }

  return answer;
}

console.log(solution(newInput));