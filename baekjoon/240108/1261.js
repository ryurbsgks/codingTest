// 알고스팟 운영진이 모두 미로에 갇혔다. 미로는 N*M 크기이며, 총 1*1크기의 방으로 이루어져 있다. 미로는 빈 방 또는 벽으로 이루어져 있고, 빈 방은 자유롭게 다닐 수 있지만, 벽은 부수지 않으면 이동할 수 없다.
// 알고스팟 운영진은 여러명이지만, 항상 모두 같은 방에 있어야 한다. 즉, 여러 명이 다른 방에 있을 수는 없다. 어떤 방에서 이동할 수 있는 방은 상하좌우로 인접한 빈 방이다. 즉, 현재 운영진이 (x, y)에 있을 때, 이동할 수 있는 방은 (x+1, y), (x, y+1), (x-1, y), (x, y-1) 이다. 단, 미로의 밖으로 이동 할 수는 없다.
// 벽은 평소에는 이동할 수 없지만, 알고스팟의 무기 AOJ를 이용해 벽을 부수어 버릴 수 있다. 벽을 부수면, 빈 방과 동일한 방으로 변한다.
// 만약 이 문제가 알고스팟에 있다면, 운영진들은 궁극의 무기 sudo를 이용해 벽을 한 번에 다 없애버릴 수 있지만, 안타깝게도 이 문제는 Baekjoon Online Judge에 수록되어 있기 때문에, sudo를 사용할 수 없다.
// 현재 (1, 1)에 있는 알고스팟 운영진이 (N, M)으로 이동하려면 벽을 최소 몇 개 부수어야 하는지 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1);

function solution(arr) {

  let [N, M] = input[0].split(" ").map( (el) => Number(el));
  let board = [];
  let dist = [];
  let dx = [1, 0, -1, 0];
  let dy = [0, 1, 0, -1];
  let dq = [{ x: 0, y: 0 }];

  for (let i = 0; i < M; i++) {
    board.push(arr[i]);
    dist.push(Array(N).fill(-1));
  }

  dist[0][0] = 0;

  while (dq.length > 0) {

    let cur = dq.shift();

    for (let i = 0; i < 4; i++) {

      let nx = cur.x + dx[i];
      let ny = cur.y + dy[i];

      if (nx < 0 || ny < 0 || nx >= M || ny >= N) {
        continue;
      }

      if (dist[nx][ny] !== -1) {
        continue;
      }

      if (board[nx][ny] === "0") {
        dq.unshift({ x: nx, y: ny });
        dist[nx][ny] = dist[cur.x][cur.y];
      }

      if (board[nx][ny] === "1") {
        dq.push({ x: nx, y: ny });
        dist[nx][ny] = dist[cur.x][cur.y] + 1;
      }

    }

  }

  return dist[M - 1][N - 1];
}

console.log(solution(newInput));