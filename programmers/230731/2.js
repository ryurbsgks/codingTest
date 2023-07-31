// 무인도 여행

// 메리는 여름을 맞아 무인도로 여행을 가기 위해 지도를 보고 있습니다. 지도에는 바다와 무인도들에 대한 정보가 표시돼 있습니다. 지도는 1 x 1크기의 사각형들로 이루어진 직사각형 격자 형태이며, 격자의 각 칸에는 'X' 또는 1에서 9 사이의 자연수가 적혀있습니다. 지도의 'X'는 바다를 나타내며, 숫자는 무인도를 나타냅니다. 이때, 상, 하, 좌, 우로 연결되는 땅들은 하나의 무인도를 이룹니다. 지도의 각 칸에 적힌 숫자는 식량을 나타내는데, 상, 하, 좌, 우로 연결되는 칸에 적힌 숫자를 모두 합한 값은 해당 무인도에서 최대 며칠동안 머물 수 있는지를 나타냅니다. 어떤 섬으로 놀러 갈지 못 정한 메리는 우선 각 섬에서 최대 며칠씩 머물 수 있는지 알아본 후 놀러갈 섬을 결정하려 합니다.
// 지도를 나타내는 문자열 배열 maps가 매개변수로 주어질 때, 각 섬에서 최대 며칠씩 머무를 수 있는지 배열에 오름차순으로 담아 return 하는 solution 함수를 완성해주세요. 만약 지낼 수 있는 무인도가 없다면 -1을 배열에 담아 return 해주세요.

function solution(maps) {
  var answer = [];

  let arr = maps.map( (el) => el.split(""));
  let X = [1, 0, -1, 0];
  let Y = [0, 1, 0, -1];

  const dfs = (x, y, num) => {

    let sum = Number(num);

    for (let i = 0; i < 4; i++) {

      let newX = x + X[i];
      let newY = y + Y[i];

      if (newX >= 0 && newY >= 0 && newX < arr.length && newY < arr[0].length) {
        if (arr[newX][newY] !== "X") {

          let next = arr[newX][newY];

          arr[newX][newY] = "X";
          sum = sum + dfs(newX, newY, next);
        }
      }

    }

    return sum;
  };

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] !== "X") {

        let start = arr[i][j];

        arr[i][j] = "X";
        answer.push(dfs(i, j, start));
      }
    }
  }

  answer = answer.length ? answer.sort( (a, b) => a - b) : [-1];

  return answer;
}

console.log(solution(["X591X","X1X5X","X231X", "1XXX1"])) // [1, 1, 27]
console.log(solution(["XXX","XXX","XXX"])) // [-1]