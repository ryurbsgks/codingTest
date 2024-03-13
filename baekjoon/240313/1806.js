// 10,000 이하의 자연수로 이루어진 길이 N짜리 수열이 주어진다. 이 수열에서 연속된 수들의 부분합 중에 그 합이 S 이상이 되는 것 중, 가장 짧은 것의 길이를 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution() {

  let [N, S] = input[0].split(" ").map( (el) => Number(el));
  let arr = input[1].split(" ").map( (el) => Number(el));
  let start = 0;
  let end = 0;
  let sum = arr[0];
  let answer = 100001;

  while (true) {
    if (sum < S) {
      end++;

      if (end === N) {
        break;
      }

      sum += arr[end];
    } else {
      sum -= arr[start];
      answer = Math.min(answer, end - start + 1);
      start++;
    }
  }

  return answer !== 100001 ? answer : 0;
}

console.log(solution());