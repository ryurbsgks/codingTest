// L과 R이 주어진다. 이때, L보다 크거나 같고, R보다 작거나 같은 자연수 중에 8이 가장 적게 들어있는 수에 들어있는 8의 개수를 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split(" ");

function solution(arr) {

  let answer = 0;
  let [L, R] = arr;
  
  if (L.length === R.length) {
    for (let i = 0; i < L.length; i++) {
      if (L[i] !== R[i]) {
        break;
      }

      if (L[i] === R[i] && L[i] === "8") {
        answer++;
      }
    }
  }

  return answer;
}

console.log(solution(input));