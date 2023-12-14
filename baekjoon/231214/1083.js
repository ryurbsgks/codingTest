// 크기가 N인 배열 A가 있다. 배열에 있는 모든 수는 서로 다르다. 이 배열을 소트할 때, 연속된 두 개의 원소만 교환할 수 있다. 그리고, 교환은 많아봐야 S번 할 수 있다. 이때, 소트한 결과가 사전순으로 가장 뒷서는 것을 출력한다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution(N, S, arr) {

  let start = 0;

  while (start < N && S > 0) {

    let maxIdx = start;
  
    for (let i = start; i <= Math.min(N - 1, start + S); i++) {
      if (arr[maxIdx] < arr[i]) {
        maxIdx = i;
      }
    }

    for (let i = maxIdx; i > start; i--) {
      [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
      S--;
    }
  
    start++;
  }

  return arr.join(" ");;
}

console.log(solution(Number(input[0]), Number(input[2]), input[1].split(" ").map( (el) => Number(el))));