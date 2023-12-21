// 0부터 N-1까지 모든 정수를 한 번씩 포함하고 있는 순열 A[0], A[1], ..., A[N-1]이 있다. 순열 A를 이용해서 A와 길이가 같은 자식 배열 B을 아래와 같은 방법으로 구할 수 있다.
// B[0] = 0
// B[i] = A[B[i-1]] (1 ≤ i ≤ N-1)
// 위의 과정을 통해서 만든 순열 A의 자식 배열 B가 순열인 경우에 순열 A를 완벽한 순열이라고 한다.
// 아래 표는 길이가 3인 모든 순열과 그 순열의 자식 배열을 나타낸다. {1, 2, 0}과 {2, 0, 1}은 자식 배열도 순열이기 때문에, 두 순열은 완벽한 순열이다.
// A	        B
// 0, 1, 2	  0, 0, 0
// 0, 2, 1	  0, 0, 0
// 1, 0, 2	  0, 1, 0
// 1, 2, 0	  0, 1, 2
// 2, 0, 1	  0, 2, 1
// 2, 1, 0	  0, 2, 0
// 길이가 N인 순열 P가 주어진다. 이때, P와 차이가 가장 작은 완벽한 순열 Q를 구하는 프로그램을 작성하시오. 두 순열 P와 Q의 차이는 P[i]와 Q[i]의 값이 다른 i의 개수이다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution(N, P) {

  let answer = 0;
  let arr = new Array(N).fill(false);

  for (let i = 0; i < N; i++) {

    let s = i;

    if (arr[i]) {
      continue;
    }

    answer++;

    while (!arr[s]) {
      arr[s] = true;
      s = P[s];
    }

  }

  return answer === 1 ? 0 : answer;
}

console.log(solution(Number(input[0]), input[1].split(" ").map( (el) => Number(el))));