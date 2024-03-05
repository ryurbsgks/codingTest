// 히스토그램에 대해서 알고 있는가? 히스토그램은 아래와 같은 막대그래프를 말한다.
// 각 칸의 간격은 일정하고, 높이는 어떤 정수로 주어진다. 위 그림의 경우 높이가 각각 2 1 4 5 1 3 3이다.
// 이러한 히스토그램의 내부에 가장 넓이가 큰 직사각형을 그리려고 한다. 아래 그림의 빗금 친 부분이 그 예이다. 이 직사각형의 밑변은 항상 히스토그램의 아랫변에 평행하게 그려져야 한다.
// 주어진 히스토그램에 대해, 가장 큰 직사각형의 넓이를 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution(N) {

  let answer = 0;
  let arr = new Array(N).fill(0);
  let newArr = [];

  for (let i = 0; i < N; i++) {
    arr[i] = Number(input[i + 1]);
  }

  for (let i = 0; i < N; i++) {
    while (newArr.length > 0 && arr[newArr[newArr.length - 1]] > arr[i]) {

      let h = arr[newArr.pop()];
      let w = newArr.length === 0 ? i : i - newArr[newArr.length - 1] - 1;

      answer = Math.max(answer, h * w);

    }

    newArr.push(i);
  }

  while (newArr.length > 0) {

    let h = arr[newArr.pop()];
    let w = newArr.length === 0 ? N : N - newArr[newArr.length - 1] - 1;

    answer = Math.max(answer, h * w);

  }

  return answer;
}

console.log(solution(Number(input[0])));