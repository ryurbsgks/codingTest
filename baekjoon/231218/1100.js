// 체스판은 8×8크기이고, 검정 칸과 하얀 칸이 번갈아가면서 색칠되어 있다. 가장 왼쪽 위칸 (0,0)은 하얀색이다. 체스판의 상태가 주어졌을 때, 하얀 칸 위에 말이 몇 개 있는지 출력하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution() {

  let answer = 0;

  for (let i = 0; i < 8; i++) {

    let line = input[i];

    for (let j = 0; j < 8; j++) {
      if (line.charAt(j) === "F" && (i + j) % 2 === 0) {
        answer++;
      }
    }

  }

  return answer;
}

console.log(solution());