// 영문 문장을 입력받아 모음의 개수를 세는 프로그램을 작성하시오. 모음은 'a', 'e', 'i', 'o', 'u'이며 대문자 또는 소문자이다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution() {

  let answer = [];
  let arr = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  input.map( (el) => {
    if (el !== "#") {

      let count = 0;

      for (let element of el) {
        if (arr.includes(element)) {
          count++;
        }
      }
  
      answer.push(count);

    }
  });
  
  return answer.join("\n");
}

console.log(solution());