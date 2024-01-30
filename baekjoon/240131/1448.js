// 세준이는 N개의 빨대를 가지고 있다. N개의 빨대 중에 3개의 빨대를 선택했을 때, 이 빨대로 삼각형을 만들 수 있다면, 세 변의 길이의 합의 최댓값을 구하고 싶다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1);

function solution(N, arr) {

  let answer = -1;

  for (let i = 0; i < N - 2; i++) {
    if (arr[i] < arr[i + 1] + arr[i + 2]) {
      answer = arr[i] + arr[i + 1] + arr[i + 2];
      
      break;
    }
  }

  return answer;
}

console.log(solution(Number(input[0]), newInput.map( (el) => Number(el)).sort( (a, b) => b - a)));