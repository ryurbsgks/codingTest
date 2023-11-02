// 2차원 평면 위의 점 N개가 주어진다. 좌표를 x좌표가 증가하는 순으로, x좌표가 같으면 y좌표가 증가하는 순서로 정렬한 다음 출력하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1, input.length).map( (el) => el.split(" ").map( (element) => Number(element)));

function solution(arr) {

  let answer = "";
  
  arr.sort( (a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });

  arr.map( (el) => {
    answer = `${answer}${el[0]} ${el[1]}\n`;
  });

  answer = answer.slice(0, answer.length - 1);

  return answer;
}

console.log(solution(newInput));