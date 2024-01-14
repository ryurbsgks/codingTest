// 김형택은 탑문고의 직원이다. 김형택은 계산대에서 계산을 하는 직원이다. 김형택은 그날 근무가 끝난 후에, 오늘 판매한 책의 제목을 보면서 가장 많이 팔린 책의 제목을 칠판에 써놓는 일도 같이 하고 있다.
// 오늘 하루 동안 팔린 책의 제목이 입력으로 들어왔을 때, 가장 많이 팔린 책의 제목을 출력하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1);

function solution(N) {

  let answer = "";
  let map = new Map();
  let max = 0;

  for (let i = 1; i <= N; i++) {

    let str = newInput[i - 1];

    if (!map.has(str)) {
      map.set(str, 1);
    } else {
      map.set(str, map.get(str) + 1);
    }

  }

  for (let [key, value] of map) {
    if (value > max) {
      answer = key;
      max = value;
    } else if (value === max) {
      if (answer > key) {
        answer = key;
      }
    }
  }

  return answer;
}

console.log(solution(Number(input[0])));