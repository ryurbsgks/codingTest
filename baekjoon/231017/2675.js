// 문자열 S를 입력받은 후에, 각 문자를 R번 반복해 새 문자열 P를 만든 후 출력하는 프로그램을 작성하시오. 즉, 첫 번째 문자를 R번 반복하고, 두 번째 문자를 R번 반복하는 식으로 P를 만들면 된다. S에는 QR Code "alphanumeric" 문자만 들어있다.
// QR Code "alphanumeric" 문자는 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ\$%*+-./: 이다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution(str, n) {

  let answer = "";

  for (let i = 0; i < str.length; i++) {
    answer = answer + str[i].repeat(n);
  }

  return answer;
}

for (let i = 1; i < input.length; i++) {
  console.log(solution(input[i].split(" ")[1], Number(input[i].split(" ")[0])));
}