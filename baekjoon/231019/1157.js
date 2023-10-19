// 알파벳 대소문자로 된 단어가 주어지면, 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오. 단, 대문자와 소문자를 구분하지 않는다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().toUpperCase();

function solution(str) {

  let obj = {};
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] === undefined) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]] = obj[str[i]] + 1;
    }
  }

  for (let el in obj) {
    arr.push([el, obj[el]]);
  }

  arr.sort( (a, b) => b[1] - a[1]);

  if (arr.length === 1) {
    return arr[0][0];
  }

  if (arr[0][1] === arr[1][1]) {
    return "?";
  }

  return arr[0][0];
}

console.log(solution(input));