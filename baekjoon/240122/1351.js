// 무한 수열 A는 다음과 같다.
// A0 = 1
// Ai = A⌊i/P⌋ + A⌊i/Q⌋ (i ≥ 1)
// N, P와 Q가 주어질 때, AN을 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split(" ");

function solution(arr) {

  let answer = 0;
  let [N, P, Q] = arr;
  let map = new Map();

  const solve = (num) => {

    let ret;

    if (map.has(num)) {
      return map.get(num);
    }
    
    ret = solve(Math.floor(num / P)) + solve(Math.floor(num / Q));
    map.set(num, ret);

    return ret;
  };

  map.set(0, 1);

  if (N === 0) {
    answer = 1;
  } else {
    answer = solve(Math.floor(N / P)) + solve(Math.floor(N / Q));
  }

  return answer;
}

console.log(solution(input.map( (el) => Number(el))));