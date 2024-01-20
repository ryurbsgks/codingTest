// 홍준이는 미로 안의 한 칸에 남쪽을 보며 서있다. 미로는 직사각형 격자모양이고, 각 칸은 이동할 수 있거나, 벽을 포함하고 있다. 모든 행과 열에는 적어도 하나의 이동할 수 있는 칸이 있다. 홍준이는 미로에서 모든 행과 열의 이동할 수 있는 칸을 걸어다녔다. 그러면서 자신의 움직임을 모두 노트에 쓰기로 했다. 홍준이는 미로의 지도를 자기 노트만을 이용해서 그리려고 한다.
// 입력으로 홍준이가 적은 내용을 나타내는 문자열이 주어진다. 각 문자 하나는 한 번의 움직임을 말한다. ‘F’는 앞으로 한 칸 움직인 것이고, ‘L'과 ’R'은 방향을 왼쪽 또는 오른쪽으로 전환한 것이다. 즉, 90도를 회전하면서, 위치는 그대로인 것이다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution() {

  let n = Number(input[0]);
  let max = 50;
  let dx = [1, 0, -1, 0];
  let dy = [0, 1, 0, -1];
  let dir = "";
  let x = max;
  let y = max;
  let lx = max;
  let ly = max;
  let rx = max;
  let ry = max;
  let num = 0;
  let arr = new Array(max * 2 + 1).fill("#").map( () => new Array(max * 2 + 1).fill("#"));
  let newArr = [];

  arr[50][50] = ".";

  for (let i = 0; i < n; i++) {
    dir = input[1][i];

    if (dir === "R") {
      num = (num + 3) % 4;
    } else if (dir === "L") {
      num = (num + 1) % 4;
    } else {
      x += dx[num];
      y += dy[num];
      lx = Math.min(lx, x);
      ly = Math.min(ly, y);
      rx = Math.max(rx, x);
      ry = Math.max(ry, y);
      arr[x][y] = ".";
    }
  }

  for (let i = lx; i <= rx; i++) {

    let row = "";

    for (let j = ly; j <= ry; j++) {
      row += arr[i][j];
    }

    newArr.push(row);

  }

  return newArr.join("\n");
}

console.log(solution());