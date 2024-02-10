// 은민이는 4와 7을 좋아하고, 나머지 숫자는 싫어한다. 금민수는 어떤 수가 4와 7로만 이루어진 수를 말한다.
// A와 B가 주어졌을 때, A보다 크거나 같고, B보다 작거나 같은 자연수 중에 금민수인 것의 개수를 출력하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split(" ");

function solution() {

  let answer = 0;
  let [A, B] = [Number(input[0]), Number(input[1])];
  let arr = ["4", "7"];
  let str = "";

  const solve = (cnt) => {
    if (cnt === 10) {
      return;
    }

    for (let i = 0; i < 2; i++) {
      str += arr[i];

      let num = BigInt(str);

      if (num >= BigInt(A) && num <= BigInt(B)) {
        answer++;
      }

      solve(cnt + 1);

      str = str.slice(0, -1);

    }
  }

  solve(0);
  
  return answer;
}

console.log(solution());