// 지민이는 종이에 색칠하기를 좋아한다. 지민이는 W×H 크기의 직사각형 종이를 가지고 있다. 지민이는 종이에 다음과 같이 색칠 하려고 한다.
// 종이를 x = f에 맞춰서 접는다. 이때, 왼쪽 종이가 오른쪽 종이 위에 올라오게 접는다.
// 종이를 가로로 c+1개의 크기가 동일 한 구간으로 나눈다. 그 다음에 c번 가장 위의 구간부터 차례대로 접는다.
// 왼쪽 아래가 (x1, y1) 이고, 오른쪽 위가 (x2, y2)인 직사각형을 찾는다. 이때, (0, 0)은 현재 접힌 상태에서 가장 왼쪽 아래 점이다. 그 직사각형을 칠한다. 이때, 페인트는 겹쳐있는 모든 곳에 스며든다.
// 종이를 편다.
// 다음 예는 5×6 종이에, x=2이고, c=2이고, (x1, y1) = (1, 1), (x2, y2) = (3, 2)인 경우이다.
// W, H, f, c, x1, y1, x2, y2가 주어질 때, 색칠되어 있지 않은 면적을 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split(" ").map( (el) => Number(el));

function solution(arr) {

  let [W, H, f, c, x1, y1, x2, y2] = arr;
  let num = (c + 1) * (x2 - x1) * (y2 - y1);

  if (f <= W / 2) {
    if (f - x1 >= 0) {
      if (x2 > f) {
        num += (c + 1) * (f - x1) * (y2 - y1);
      } else {
        num += (c + 1) * (x2 - x1) * (y2 - y1);
      }
    }
  } else {
    if (W - x1 - f >= 0) {
      if (x2 + f > W) {
        num += (c + 1) * (W - x1 - f) * (y2 - y1);
      } else {
        num += (c + 1) * (x2 - x1) * (y2 - y1);
      }
    }
  }

  return W * H - num;
}

console.log(solution(input));