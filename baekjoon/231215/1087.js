// 이번에 김지민은 쥐를 잡는 게임을 만들어냈다. 이 게임은 큰 보드 위를 움직이는 로봇 쥐를 가지고 한다. 이 게임의 참가자는 정사각형 모양의 우리를 움직일 수 있다.
// 참가자는 이 우리를 보드 위라면 어느 곳이든지 이동할 수 있고, 떨어뜨려서 쥐를 잡을 수 있다.
// 하지만 김지민은 모든 쥐를 한 번에 잡는 것이 불가능하도록 우리의 크기를 작게 하고 싶다.
// 로봇 쥐는 2차원 평면에서 움직인다. 쥐는 항상 일정한 속도로 움직이고, 처음 위치가 알려져 있다고 가정한다. 우리는 길이가 L이고 축에 평행한 정사각형 모양이고 회전시키지 못한다. 우리는 게임이 시작된 직후부터 움직이거나 떨어뜨릴 수 있다.
// 게임은 쥐가 우리 내부에 완벽하게 포함되어야 잡혔다고 간주한다. 만약 쥐가 우리의 경계에 있다면 그 쥐는 잡힌 쥐가 아니다. 한 번에 모든 쥐를 절대로 잡을 수 없는 가장 큰 L을 구하는 프로그램을 작성하시오..

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1, input.length);

function solution(arr) {

  let start = 0;
  let end = 2000;

  const f = (t) => {

    let points = arr.map( ([px, py, vx, vy]) => [px + vx * t, py + vy * t]);

    points.sort( (a, b) => a[0] - b[0]);

    let result = points[points.length - 1][0] - points[0][0];

    points.sort( (a, b) => a[1] - b[1]);
    result = Math.max(result, points[points.length - 1][1] - points[0][1]);

    return result;
  };

  for (let i = 0; i < 500; i++) {

    let mid_1 = (start * 2 + end) / 3;
    let mid_2 = (start + end * 2) / 3;

    if (f(mid_1) <= f(mid_2)) {
      end = mid_2;
    } else {
      start = mid_1;
    }

  }

  return f(start);
}

console.log(solution(newInput.map( (el) => el.split(" ").map( (element) => Number(element)))));