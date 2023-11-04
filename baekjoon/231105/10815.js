// 숫자 카드는 정수 하나가 적혀져 있는 카드이다. 상근이는 숫자 카드 N개를 가지고 있다. 정수 M개가 주어졌을 때, 이 수가 적혀있는 숫자 카드를 상근이가 가지고 있는지 아닌지를 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution(arr, newArr) {

  let answer = "";
  let set = new Set(arr);

  newArr.map( (el) => {
    if (set.has(el)) {
      answer = `${answer}1 `;
    } else {
      answer = `${answer}0 `;
    }
  });

  answer = answer.slice(0, answer.length - 1);

  return answer;
}

console.log(solution(input[1].split(" "), input[3].split(" ")));