// 세준이는 N*M크기로 직사각형에 수를 N*M개 써놓았다.
// 세준이는 이 직사각형을 겹치지 않는 3개의 작은 직사각형으로 나누려고 한다. 각각의 칸은 단 하나의 작은 직사각형에 포함되어야 하고, 각각의 작은 직사각형은 적어도 하나의 숫자를 포함해야 한다.
// 어떤 작은 직사각형의 합은 그 속에 있는 수의 합이다. 입력으로 주어진 직사각형을 3개의 작은 직사각형으로 나누었을 때, 각각의 작은 직사각형의 합의 곱을 최대로 하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution() {

  let [N, M] = input[0].split(" ").map( (el) => Number(el));
  let arr = new Array(101).fill(null).map( () => new Array(101).fill(0));
  let max = -1;

  const getSum = (startX, startY, endX, endy) => {

    let sum = 0;

    for (let i = startX; i <= endX; i++) {
      for (let j = startY; j <= endy; j++) {
        sum += arr[i][j];
      }
    }

    return sum;
  };

  for (let i = 0; i < N; i++) {

    let row = input[i + 1].split(" ").map( (el) => Number(el));

    arr[i] = [...row];

  }

  for (let i = 0; i < N - 2; i++) {
    for (let j = i + 1; j < N - 1; j++) {

      let square1 = getSum(0, 0, i, M - 1);
      let square2 = getSum(i + 1, 0, j, M - 1);
      let square3 = getSum(j + 1, 0, N - 1, M - 1);

      max = Math.max(max, square1 * square2 * square3);

    }
  }

  for (let i = 0; i < M - 2; i++) {
    for (let j = i + 1; j < M - 1; j++) {

      let square1 = getSum(0, 0, N - 1, i);
      let square2 = getSum(0, i + 1, N - 1, j);
      let square3 = getSum(0, j + 1, N - 1, M - 1);

      max = Math.max(max, square1 * square2 * square3);

    }
  }

  for (let i = M - 1; i > 0; i--) {
    for (let j = 0; j < N - 1; j++) {

      let square1 = getSum(0, i, N - 1, M - 1);
      let square2 = getSum(0, 0, j, i - 1);
      let square3 = getSum(j + 1, 0, N - 1, i - 1);

      max = Math.max(max, square1 * square2 * square3);

    }
  }

  for (let i = 0; i < M - 1; i++) {
    for (let j = 0; j < N - 1; j++) {

      let square1 = getSum(0, 0, N - 1, i);
      let square2 = getSum(0, i + 1, j, M - 1);
      let square3 = getSum(j + 1, i + 1, N - 1, M - 1);

      max = Math.max(max, square1 * square2 * square3);

    }
  }

  for (let i = 0; i < N - 1; i++) {
    for (let j = 0; j < M - 1; j++) {

      let square1 = getSum(0, 0, i, M - 1);
      let square2 = getSum(i + 1, 0, N - 1, j);
      let square3 = getSum(i + 1, j + 1, N - 1, M - 1);

      max = Math.max(max, square1 * square2 * square3);

    }
  }

  for (let i = N - 1; i > 0; i--) {
    for (let j = 0; j < M - 1; j++) {

      let square1 = getSum(i, 0, N - 1, M - 1);
      let square2 = getSum(0, 0, i - 1, j);
      let square3 = getSum(0, j + 1, i - 1, M - 1);

      max = Math.max(max, square1 * square2 * square3);

    }
  }

  return max;
}

console.log(solution());