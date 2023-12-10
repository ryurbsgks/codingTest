// 은진이는 지금 (X, Y)에 있고, (0, 0)에 있는 집으로 가능한 빨리 가려고 한다. 이동할 수 있는 방법은 다음 두 가지이다.
// 첫 번째 방법은 걷는것이다. 걸을 때는 1초에 1만큼 움직인다. 두 번째 방법은 점프하는 것이다. 점프를 하게 되면, T초에 D만큼 움직인다. 점프는 일직선으로만 할 수 있고, 정확하게 D칸만 움직일 수 있다.
// 위의 두 가지 방법을 이용해서 집에 돌아오는데 걸리는 시간의 최솟값을 구하는 프로그램을 작성하시오. 꼭 한 가지 방법만 사용해야 되는것이 아니고, 두 가지 방법을 적절히 조합해서 가장 빠른 시간을 구하는 것이다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split(" ");

function solution(arr) {

  let [X, Y, D, T] = arr;
  let dist = Math.sqrt(X * X + Y * Y);
  let jump = Math.floor(dist / D);
  let remain = dist - jump * D;
  let answer = Math.min(dist, remain + jump * T);

  answer = Math.min(answer, (jump + 1) * D - dist + (jump + 1) * T);

  if (jump > 0) {
    answer = Math.min(answer, (jump + 1) * T);
  } else {
    if (dist < D) {
      answer = Math.min(answer, T * 2.0);
    }
  }

  return answer.toFixed(9);
}

console.log(solution(input.map( (el) => Number(el))));