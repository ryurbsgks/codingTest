// 미로 탈출

// 1 x 1 크기의 칸들로 이루어진 직사각형 격자 형태의 미로에서 탈출하려고 합니다. 각 칸은 통로 또는 벽으로 구성되어 있으며, 벽으로 된 칸은 지나갈 수 없고 통로로 된 칸으로만 이동할 수 있습니다. 통로들 중 한 칸에는 미로를 빠져나가는 문이 있는데, 이 문은 레버를 당겨서만 열 수 있습니다. 레버 또한 통로들 중 한 칸에 있습니다. 따라서, 출발 지점에서 먼저 레버가 있는 칸으로 이동하여 레버를 당긴 후 미로를 빠져나가는 문이 있는 칸으로 이동하면 됩니다. 이때 아직 레버를 당기지 않았더라도 출구가 있는 칸을 지나갈 수 있습니다. 미로에서 한 칸을 이동하는데 1초가 걸린다고 할 때, 최대한 빠르게 미로를 빠져나가는데 걸리는 시간을 구하려 합니다.
// 미로를 나타낸 문자열 배열 maps가 매개변수로 주어질 때, 미로를 탈출하는데 필요한 최소 시간을 return 하는 solution 함수를 완성해주세요. 만약, 탈출할 수 없다면 -1을 return 해주세요.

function solution(maps) {
  var answer = 0;

  let start = [];
  let lever = [];
  let map = maps.map( (el) => el.split(""));
  let newMap = maps.map( (el) => el.split(""));

  const getShortDistance = (start, arr, target) => {

    let time = 0;
    let x = [-1, 1, 0, 0];
    let y = [0, 0, -1, 1];
    let q = [start];
    let n = arr.length;
    let m = arr[0].length;

    arr[start[0]][start[1]] = "X";

    while (q.length > 0) {

      let size = q.length;

      for (let i = 0; i < size; i++) {

        let [X, Y] = q.shift();

        for (let j = 0; j < 4; j++) {

          let newX = X + x[j];
          let newY = Y + y[j];

          if (newX >= 0 && newX < n && newY >= 0 && newY < m && arr[newX][newY] !== "X") {
            if (arr[newX][newY] === target) {
              return time + 1;
            }

            q.push([newX, newY]);
            arr[newX][newY] = "X";
          }

        }

      }

      time++;
    }

    return -1;
  };

  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[i].length; j++) {
      if (maps[i][j] === "S") {
        start = [i, j];
      } else if (maps[i][j] === "L") {
        lever = [i, j];
      }
    }
  }

  let a = getShortDistance(start, [...map], "L");
  let b = getShortDistance(lever, [...newMap], "E");

  if (a === -1 || b === -1) {
    return -1;
  }

  answer = a + b;

  return answer;
}

console.log(solution(["SOOOL","XXXXO","OOOOO","OXXXX","OOOOE"])) // 16
console.log(solution(["LOOXS","OOOOX","OOOOO","OOOOO","EOOOO"])) // -1