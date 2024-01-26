// 통제 할 수 없는 미친 로봇이 평면위에 있다. 그리고 이 로봇은 N번의 행동을 취할 것이다.
// 각 행동에서 로봇은 4개의 방향 중에 하나를 임의로 선택한다. 그리고 그 방향으로 한 칸 이동한다.
// 로봇이 같은 곳을 한 번보다 많이 이동하지 않을 때, 로봇의 이동 경로가 단순하다고 한다. (로봇이 시작하는 위치가 처음 방문한 곳이다.) 로봇의 이동 경로가 단순할 확률을 구하는 프로그램을 작성하시오. 예를 들어, EENE와 ENW는 단순하지만, ENWS와 WWWWSNE는 단순하지 않다. (E는 동, W는 서, N은 북, S는 남)

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split(" ");

function solution(arr) {

  let N = arr[0];
  let MAX = 29;
  let newArr = new Array(4);
  let array = new Array(MAX).fill(null).map( () => new Array(MAX).fill(false));
  let dx = [0, 0, 1, -1];
  let dy = [1, -1, 0, 0];

  const DFS = (x, y, cnt) => {

    let result = 0.0;

    if (cnt === N) {
      return 1.0;
    }

    array[x][y] = true;

    for (let i = 0; i < 4; i++) {

      let nx = x + dx[i];
      let ny = y + dy[i];

      if (array[nx][ny] === true) {
        continue;
      }

      result += newArr[i] * DFS(nx, ny, cnt + 1);

    }

    array[x][y] = false;

    return result;
  };

  for (let i = 1; i <= 4; i++) {
    newArr[i - 1] = arr[i] / 100.0;
  }

  let R = DFS(14, 14, 0);

  return R.toFixed(10);
}

console.log(solution(input.map( (el) => Number(el))));