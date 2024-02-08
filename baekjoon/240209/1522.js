// a와 b로만 이루어진 문자열이 주어질 때,  a를 모두 연속으로 만들기 위해서 필요한 교환의 회수를 최소로 하는 프로그램을 작성하시오.
// 이 문자열은 원형이기 때문에, 처음과 끝은 서로 인접해 있는 것이다.
// 예를 들어,  aabbaaabaaba이 주어졌을 때, 2번의 교환이면 a를 모두 연속으로 만들 수 있다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim();

function solution(str) {

  let length = (str.match(/a/g) || []).length;
  let answer = Infinity;

  str += str.slice(0, length - 1);
  
  for (let i = 0; i < str.length - (length - 1); i++) {

    let newStr = str.slice(i, i + length);
    let newLength = (newStr.match(/b/g) || []).length;

    answer = Math.min(answer, newLength);

  }

  return answer;
}

console.log(solution(input));