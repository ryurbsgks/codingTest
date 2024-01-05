// N개의 수 중에서 어떤 수가 다른 수 두 개의 합으로 나타낼 수 있다면 그 수를 “좋다(GOOD)”고 한다.
// N개의 수가 주어지면 그 중에서 좋은 수의 개수는 몇 개인지 출력하라.
// 수의 위치가 다르면 값이 같아도 다른 수이다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1).toString().split(" ").map( (el) => Number(el));

function solution(N, arr) {

  let answer = 0;

  arr.sort();

  for (let i = 0; i < N; i++) {

    let goal = arr[i];
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
      if (arr[start] + arr[end] === goal) {
        if (start === i) {
          start += 1;
        } else if (end === i) {
          end -= 1;
        } else {
          answer += 1;
          
          break;
        }
      } else if (arr[start] + arr[end] > goal) {
        end -= 1;
      } else if (arr[start] + arr[end] < goal) {
        start += 1;
      }
    }

  }

  return answer;
}

console.log(solution(Number(input[0]), newInput));