// 세준이는 크기가 N×N인 배열 A를 만들었다. 배열에 들어있는 수 A[i][j] = i×j 이다. 이 수를 일차원 배열 B에 넣으면 B의 크기는 N×N이 된다. B를 오름차순 정렬했을 때, B[k]를 구해보자.
// 배열 A와 B의 인덱스는 1부터 시작한다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution(arr) {

  let answer = 0;
  let [N, K] = arr;
  let start = 1;
  let end = N * N;
  
  while (start <= end) {

    let cnt = 0;
    let mid = Math.floor((start + end) / 2);

    for (let i = 1; i <= N; i++) {
      cnt += Math.min(Math.floor(mid / i), N);
    }

    if (cnt >= K) {
      answer = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }

  }

  return answer;
}

console.log(solution(input.map( (el) => Number(el))));