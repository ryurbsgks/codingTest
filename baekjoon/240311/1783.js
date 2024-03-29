// 병든 나이트가 N × M 크기 체스판의 가장 왼쪽아래 칸에 위치해 있다. 병든 나이트는 건강한 보통 체스의 나이트와 다르게 4가지로만 움직일 수 있다.
// 1. 2칸 위로, 1칸 오른쪽
// 2. 1칸 위로, 2칸 오른쪽
// 3. 1칸 아래로, 2칸 오른쪽
// 4. 2칸 아래로, 1칸 오른쪽
// 병든 나이트는 여행을 시작하려고 하고, 여행을 하면서 방문한 칸의 수를 최대로 하려고 한다. 병든 나이트의 이동 횟수가 4번보다 적지 않다면, 이동 방법을 모두 한 번씩 사용해야 한다. 이동 횟수가 4번보다 적은 경우(방문한 칸이 5개 미만)에는 이동 방법에 대한 제약이 없다.
// 체스판의 크기가 주어졌을 때, 병든 나이트가 여행에서 방문할 수 있는 칸의 최대 개수를 구해보자.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split(" ");

function solution() {

  let answer = 0;
  let [N, M] = input.map( (el) => Number(el));

  if (N === 1) {
    answer = 1;
  } else if (N === 2) {
    if (M >= 1 && M <= 6) {
      answer = Math.floor((M + 1) / 2);
    } else if (M >= 7) {
      answer = 4;
    }
  } else if (N >= 3) {
    if (M <= 6) {
      answer = Math.min(M, 4);
    } else if (M >= 7) {
      answer = M - 2;
    }
  }
  
  return answer;
}

console.log(solution());