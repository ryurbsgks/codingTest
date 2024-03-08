// 79를 영어로 읽되 숫자 단위로 하나씩 읽는다면 "seven nine"이 된다. 80은 마찬가지로 "eight zero"라고 읽는다. 79는 80보다 작지만, 영어로 숫자 하나씩 읽는다면 "eight zero"가 "seven nine"보다 사전순으로 먼저 온다.
// 문제는 정수 M, N(1 ≤ M ≤ N ≤ 99)이 주어지면 M 이상 N 이하의 정수를 숫자 하나씩 읽었을 때를 기준으로 사전순으로 정렬하여 출력하는 것이다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split(" ");

function solution() {

  let answer = "";
  let [M, N] = input.map( (el) => Number(el));
  let obj = {"1": "one", "2": "two", "3": "three", "4": "four", "5": "five", "6": "six", "7": "seven", "8": "eight", "9": "nine", "0": "zero"};
  let arr = [];

  for (let i = M; i <= N; i++) {

    let a = Array.from(String(i), (el) => obj[el]).join(" ");
    
    arr.push([i, a]);

  }
  
  arr.sort( (a, b) => a[1].localeCompare(b[1]));

  for (let i = 0; i < arr.length; i++) {
    if (i % 10 === 0 && i !== 0) {
      answer += "\n";
    }

    answer += `${arr[i][0]} `;
  }
  
  return answer.trim();
}

console.log(solution());