// 알파벳 소문자로 이루어진 N개의 단어가 들어오면 아래와 같은 조건에 따라 정렬하는 프로그램을 작성하시오.
// 길이가 짧은 것부터
// 길이가 같으면 사전 순으로
// 단, 중복된 단어는 하나만 남기고 제거해야 한다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1, input.length);

function solution(arr) {

  let answer = "";
  let newArr = [];

  arr.map( (el) => {
    if (!newArr.includes(el)) {
      newArr.push(el);
    }
  });

  newArr.sort().sort( (a, b) => a.length - b.length);

  newArr.map( (el) => {
    answer = `${answer}${el}\n`;
  });

  answer = answer.slice(0, answer.length - 1);

  return answer;
}

console.log(solution(newInput));