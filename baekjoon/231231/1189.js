// 한수는 캠프를 마치고 집에 돌아가려 한다. 한수는 현재 왼쪽 아래점에 있고 집은 오른쪽 위에 있다. 그리고 한수는 집에 돌아가는 방법이 다양하다. 단, 한수는 똑똑하여 한번 지나친 곳을 다시 방문하지는 않는다.
//        cdef    ...f    ..ef    ..gh    cdeh    cdej    ...f 
//        bT..    .T.e    .Td.    .Tfe    bTfg    bTfi    .Tde 
//        a...    abcd    abc.    abcd    a...    a.gh    abc. 
// 거리 :   6       6       6       8       8      10       6
// 위 예제는 한수가 집에 돌아갈 수 있는 모든 경우를 나타낸 것이다. T로 표시된 부분은 가지 못하는 부분이다. 문제는 R x C 맵에 못가는 부분이 주어지고 거리 K가 주어지면 한수가 집까지도 도착하는 경우 중 거리가 K인 가짓수를 구하는 것이다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1);

function solution(arr) {

  let answer = 0;
  let [R, C, K] = input[0].split(" ").map( (el) => Number(el));
  let newArr = [];
  let dx = [1, -1, 0, 0];
  let dy = [0, 0, 1, -1];

  const dfs = (x, y, distance) => {
    if (distance === K && y === C - 1 && x === 0) {
      answer++;
    } else {
      newArr[x][y] = "T";

      for (let i = 0; i < 4; i++) {

        let nx = x + dx[i];
        let ny = y + dy[i];

        if (0 <= nx && nx < R && 0 <= ny && ny < C && newArr[nx][ny] === ".") {
          newArr[nx][ny] = "T";
          dfs(nx, ny, distance + 1);
          newArr[nx][ny] = ".";
        }

      }
    }
  };

  for (let i = 0; i < R; i++) {
    newArr.push(arr[i].split(""));
  }

  newArr[R - 1][0] = "T";
  dfs(R - 1, 0, 1);

  return answer;
}

console.log(solution(newInput));