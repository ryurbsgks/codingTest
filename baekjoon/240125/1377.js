// 버블 소트 알고리즘을 다음과 같이 C++로 작성했다.
// bool changed = false;
// for (int i=1; i<=N+1; i++) {
//     changed = false;
//     for (int j=1; j<=N-i; j++) {
//         if (A[j] > A[j+1]) {
//             changed = true;
//             swap(A[j], A[j+1]);
//         }
//     }
//     if (changed == false) {
//         cout << i << '\n';
//         break;
//     }
// }
// 위 소스에서 N은 배열의 크기이고, A는 정렬해야 하는 배열이다. 배열은 A[1]부터 사용한다.
// 위와 같은 소스를 실행시켰을 때, 어떤 값이 출력되는지 구해보자.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1);

function solution(N) {

  let answer = [];
  let arr = [];

  for (let i = 0; i < N; i++) {
    arr.push([Number(newInput[i]), i]);
  }

  let newArr = [...arr].sort( (a, b) => a[0] - b[0]);

  for (let i = 0; i < N; i++) {
    answer.push(newArr[i][1] - arr[i][1]);
  }

  return Math.max(...answer) + 1;
}

console.log(solution(Number(input[0])));