// 빛의 경로 사이클

// 각 칸마다 S, L, 또는 R가 써져 있는 격자가 있습니다. 당신은 이 격자에서 빛을 쏘고자 합니다. 이 격자의 각 칸에는 다음과 같은 특이한 성질이 있습니다.
// 빛이 "S"가 써진 칸에 도달한 경우, 직진합니다.
// 빛이 "L"이 써진 칸에 도달한 경우, 좌회전을 합니다.
// 빛이 "R"이 써진 칸에 도달한 경우, 우회전을 합니다.
// 빛이 격자의 끝을 넘어갈 경우, 반대쪽 끝으로 다시 돌아옵니다. 예를 들어, 빛이 1행에서 행이 줄어드는 방향으로 이동할 경우, 같은 열의 반대쪽 끝 행으로 다시 돌아옵니다.
// 당신은 이 격자 내에서 빛이 이동할 수 있는 경로 사이클이 몇 개 있고, 각 사이클의 길이가 얼마인지 알고 싶습니다. 경로 사이클이란, 빛이 이동하는 순환 경로를 의미합니다.
// 예를 들어, 다음 그림은 격자 ["SL","LR"]에서 1행 1열에서 2행 1열 방향으로 빛을 쏠 경우, 해당 빛이 이동하는 경로 사이클을 표현한 것입니다.
// 이 격자에는 길이가 16인 사이클 1개가 있으며, 다른 사이클은 존재하지 않습니다.
// 격자의 정보를 나타내는 1차원 문자열 배열 grid가 매개변수로 주어집니다. 주어진 격자를 통해 만들어지는 빛의 경로 사이클의 모든 길이들을 배열에 담아 오름차순으로 정렬하여 return 하도록 solution 함수를 완성해주세요.

function solution(grid) {
  var answer = [];
  
  let [X, Y] = [grid.length, grid[0].length];
  let obj = {};

  for (let i = 0; i < X; i++) {
    obj[i] = {};

    for (let j = 0; j < Y; j++) {
      obj[i][j] = {
        u: 0,
        d: 0,
        l: 0,
        r: 0
      };
    }
  }

  const bfs = (x, y, z) => {

    let arr = [[x, y, z, 0]];

    while (true) {

      let [nx, ny, nz, length] = arr.pop(0);

      nx = nx === X ? 0 : nx === -1 ? X - 1 : nx;
      ny = ny === Y ? 0 : ny === -1 ? Y - 1 : ny;

      if (nx === x && ny === y && nz === z && length) {
        return length;
      }

      obj[nx][ny][nz] = 1;

      switch (grid[nx][ny]) {
        case "S": 
          arr.push(nz === "u" ? [nx + 1, ny, "u", length + 1] : nz === "d" ? [nx - 1, ny, "d", length + 1] : nz === "l" ? [nx, ny + 1, "l", length + 1] : [nx, ny - 1, "r", length + 1]);
          break;
        case "L": 
          arr.push(nz === "u" ? [nx, ny + 1, "l", length + 1] : nz === "d" ? [nx, ny - 1, "r", length + 1] : nz === "l" ? [nx - 1, ny, "d", length + 1] : [nx + 1, ny, "u", length + 1]);
          break;
        case "R": 
          arr.push(nz === "u" ? [nx, ny - 1, "r", length + 1] : nz === "d" ? [nx, ny + 1, "l", length + 1] : nz === "l" ? [nx + 1, ny, "u", length + 1] : [nx - 1, ny, "d", length + 1]);
          break;
      }

    }

  };

  let dir = ["u", "d", "l", "r"];

  for (let i = 0; i < X; i++) {
    for (let j = 0; j < Y; j++) {
      dir.map( (el) => {
        if (!obj[i][j][el]) {
          answer.push(bfs(i, j, el));
        }
      });
    }
  }

  answer.sort( (a, b) => a - b);

  return answer;
}

console.log(solution(["SL","LR"])) // [16]
console.log(solution(["S"])) // [1,1,1,1]
console.log(solution(["R","R"])) // [4,4]