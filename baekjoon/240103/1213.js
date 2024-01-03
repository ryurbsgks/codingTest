// 임한수와 임문빈은 서로 사랑하는 사이이다.
// 임한수는 세상에서 팰린드롬인 문자열을 너무 좋아하기 때문에, 둘의 백일을 기념해서 임문빈은 팰린드롬을 선물해주려고 한다.
// 임문빈은 임한수의 영어 이름으로 팰린드롬을 만들려고 하는데, 임한수의 영어 이름의 알파벳 순서를 적절히 바꿔서 팰린드롬을 만들려고 한다.
// 임문빈을 도와 임한수의 영어 이름을 팰린드롬으로 바꾸는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim();

function solution(arr) {

  let answer = "";
  let newArr = Array(27).fill(0);
  let result = "";
  let cnt = 0;
  let idx = 0;

  for (let el of arr) {
    newArr[el.charCodeAt(0) - 65] += 1;
  }

  for (let i = 0; i < 27; i++) {

    let num = Math.floor(newArr[i] / 2);

    if (newArr[i] % 2 !== 0) {
      cnt += 1;
      idx = i;
    }

    for (let j = 0; j < num; j++) {
      result += String.fromCharCode(i + 65);
    }

  }

  if (cnt > 1) {
    answer = "I'm Sorry Hansoo";
  } else if (cnt === 1) {

    let newResult = String.fromCharCode(idx + 65);

    answer = result + newResult + result.split("").reverse().join("");

  } else {
    answer = result + result.split("").reverse().join("");
  }

  return answer;
}

console.log(solution(input.split("")));