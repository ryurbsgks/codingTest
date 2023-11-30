// N행 M열의 표 A가 있고, 표의 각 칸에는 숫자가 하나씩 적혀있다.
// 연두는 서로 다른 1개 이상의 칸을 선택하려고 하는데, 행의 번호가 선택한 순서대로 등차수열을 이루고 있어야 하고, 열의 번호도 선택한 순서대로 등차수열을 이루고 있어야 한다. 이렇게 선택한 칸에 적힌 수를 순서대로 이어붙이면 정수를 하나 만들 수 있다.
// 연두가 만들 수 있는 정수 중에서 가장 큰 완전 제곱수를 구해보자. 완전 제곱수란 어떤 정수를 제곱한 수이다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1, input.length);

function solution(arr) {

  let answer = -1;
  let [N, M] = input[0].split(" ").map( (el) => Number(el));
  let newArr = [];
  
  const sqr = (s) => {

    let num = parseInt(s, 10);

    return Math.pow(Math.floor(Math.sqrt(num)), 2) === num;
  };

  arr.map( (el) => {
    newArr.push(el.split(""));
  });

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      for (let k = -N; k < N; k++) {
        for (let l = -M; l < M; l++) {

          let s = "";
          let x = i;
          let y = j;

          if (k === 0 && l === 0) {
            continue;
          }

          while (0 <= x && x < N && 0 <= y && y < M) {
            s += newArr[x][y];

            if (sqr(s)) {
              answer = Math.max(answer, parseInt(s, 10));
            }

            x += k;
            y += l;
          }
        }
      }
    }
  }

  return answer;
}

console.log(solution(newInput));