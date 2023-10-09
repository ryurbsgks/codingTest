// 흔한 수학 문제 중 하나는 주어진 점이 어느 사분면에 속하는지 알아내는 것이다. 사분면은 아래 그림처럼 1부터 4까지 번호를 갖는다. "Quadrant n"은 "제n사분면"이라는 뜻이다.
// 예를 들어, 좌표가 (12, 5)인 점 A는 x좌표와 y좌표가 모두 양수이므로 제1사분면에 속한다. 점 B는 x좌표가 음수이고 y좌표가 양수이므로 제2사분면에 속한다.
// 점의 좌표를 입력받아 그 점이 어느 사분면에 속하는지 알아내는 프로그램을 작성하시오. 단, x좌표와 y좌표는 모두 양수나 음수라고 가정한다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution(x, y) {
  if (Number(x) > 0 && Number(y) > 0) {
    return 1;
  } else if (Number(x) < 0 && Number(y) > 0) {
    return 2;
  } else if (Number(x) < 0 && Number(y) < 0) {
    return 3;
  } else {
    return 4;
  }
}

console.log(solution(input[0], input[1]));

// fs모듈 error로 인한 제출용 답안

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let input = [];

// rl.on("line", function (line) {
//   input.push(line);
// }).on("close", function () {

//   let [x, y] = input;

//   if (Number(x) > 0 && Number(y) > 0) {
//     console.log(1);
//   } else if (Number(x) < 0 && Number(y) > 0) {
//     console.log(2);
//   } else if (Number(x) < 0 && Number(y) < 0) {
//     console.log(3);
//   } else {
//     console.log(4);
//   }

//   process.exit();
// });