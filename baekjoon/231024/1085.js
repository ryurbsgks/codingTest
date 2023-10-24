// 한수는 지금 (x, y)에 있다. 직사각형은 각 변이 좌표축에 평행하고, 왼쪽 아래 꼭짓점은 (0, 0), 오른쪽 위 꼭짓점은 (w, h)에 있다. 직사각형의 경계선까지 가는 거리의 최솟값을 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split(" ");

function solution(x, y, w, h) {

  let arr = [x, y, w - x, h - y];

  arr.sort( (a, b) => a - b);

  return arr[0];
}

console.log(solution(Number(input[0]), Number(input[1]), Number(input[2]), Number(input[3])));