// 여행을 떠난 세준이는 지도를 하나 구하였다. 이 지도는 아래 그림과 같이 직사각형 모양이며 여러 칸으로 나뉘어져 있다. 한 칸은 한 지점을 나타내는데 각 칸에는 그 지점의 높이가 쓰여 있으며, 각 지점 사이의 이동은 지도에서 상하좌우 이웃한 곳끼리만 가능하다.
// 현재 제일 왼쪽 위 칸이 나타내는 지점에 있는 세준이는 제일 오른쪽 아래 칸이 나타내는 지점으로 가려고 한다. 그런데 가능한 힘을 적게 들이고 싶어 항상 높이가 더 낮은 지점으로만 이동하여 목표 지점까지 가고자 한다. 위와 같은 지도에서는 다음과 같은 세 가지 경로가 가능하다.
// 지도가 주어질 때 이와 같이 제일 왼쪽 위 지점에서 출발하여 제일 오른쪽 아래 지점까지 항상 내리막길로만 이동하는 경로의 개수를 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution() {

  let MAX = 501;
  let arr = new Array(MAX).fill(null).map( () => new Array(MAX).fill(0));
  let newArr = new Array(MAX).fill(null).map( () => new Array(MAX).fill(-1));
  let dx = [0, 0, -1, 1];
  let dy = [-1, 1, 0, 0];
  let [firstLine, ...rest] = input;
  let [M, N] = firstLine.split(" ").map( (el) => Number(el));

  const dfs = (x, y) => {
    if (x === M - 1 && y === N - 1) {
      return 1;
    }

    if (newArr[x][y] !== -1) {
      return newArr[x][y];
    }

    newArr[x][y] = 0;

    for (let i = 0; i < 4; i++) {

      let nx = x + dx[i];
      let ny = y + dy[i];

      if (nx < 0 || nx >= M || ny < 0 || ny >= N) {
        continue;
      }

      if (arr[x][y] > arr[nx][ny]) {
        newArr[x][y] += dfs(nx, ny);
      }

    }

    return newArr[x][y];
  };

  for (let i = 0; i < M; i++) {

    let row = rest[i].split(" ").map( (el) => Number(el));

    for (let j = 0; j < N; j++) {
      arr[i][j] = row[j];
      newArr[i][j] = -1;
    }

  }

  return dfs(0, 0);
}

console.log(solution());