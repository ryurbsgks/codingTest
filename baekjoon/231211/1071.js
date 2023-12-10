// N개의 정수가 주어지면, 이것을 연속된 두 수가 연속된 값이 아니게 정렬(A[i] + 1 ≠ A[i+1])하는 프로그램을 작성하시오. 가능한 것이 여러 가지라면 사전순으로 가장 앞서는 것을 출력한다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution(N, arr) {

  arr.sort( (a, b) => a - b);
  
  for (let i = 0; i < N; i++) {
    if (arr[i] + 1 === arr[i + 1]) {

      let end = i + 2;

      if (end !== N) {
        while (arr[end] === arr[i + 1]) {
          end++;
        }
      }

      if (end === N) {

        let start = i - 1;

        if (start >= 0) {
          while (arr[start] === arr[i]) {
            start--;
          }
        }

        arr[start + 1]++;
        arr[i + 1]--;

      } else {

        let tmp = arr[end];

        arr[end] = arr[i + 1];
        arr[i + 1] = tmp;

      }

    }
  }

  return arr.join(" ");
}

console.log(solution(Number(input[0]), input[1].split(" ").map( (el) => Number(el))));