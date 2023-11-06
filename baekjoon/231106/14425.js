// 총 N개의 문자열로 이루어진 집합 S가 주어진다.
// 입력으로 주어지는 M개의 문자열 중에서 집합 S에 포함되어 있는 것이 총 몇 개인지 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map( (el) => Number(el));
const S = input.slice(1, N + 1);
const arr = input.slice(N + 1, input.length);

function solution(S, arr) {

  let answer = 0;
  let set = new Set(S);

  arr.map( (el) => {
    if (set.has(el)) {
      answer++;
    }
  });

  return answer;
}

console.log(solution(S, arr));