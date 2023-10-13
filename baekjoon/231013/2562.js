// 9개의 서로 다른 자연수가 주어질 때, 이들 중 최댓값을 찾고 그 최댓값이 몇 번째 수인지를 구하는 프로그램을 작성하시오.
// 예를 들어, 서로 다른 9개의 자연수
// 3, 29, 38, 12, 57, 74, 40, 85, 61
// 이 주어지면, 이들 중 최댓값은 85이고, 이 값은 8번째 수이다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n").map( (el) => Number(el));

function solution(arr) {

  let answer;
  let index;
  let newArr = arr.slice();
  
  newArr.sort( (a, b) => b - a);

  arr.map( (el, idx) => {
    if (el === newArr[0]) {
      index = idx + 1;
    }
  });

  answer = `${newArr[0]}\n${index}`;

  return answer;
}

console.log(solution(input));