// 리코쳇 로봇

// 리코쳇 로봇이라는 보드게임이 있습니다.
// 이 보드게임은 격자모양 게임판 위에서 말을 움직이는 게임으로, 시작 위치에서 목표 위치까지 최소 몇 번만에 도달할 수 있는지 말하는 게임입니다.
// 이 게임에서 말의 움직임은 상, 하, 좌, 우 4방향 중 하나를 선택해서 게임판 위의 장애물이나 맨 끝에 부딪힐 때까지 미끄러져 이동하는 것을 한 번의 이동으로 칩니다.
// 다음은 보드게임판을 나타낸 예시입니다.
// ...D..R
// .D.G...
// ....D.D
// D....D.
// ..D....
// 여기서 "."은 빈 공간을, "R"은 로봇의 처음 위치를, "D"는 장애물의 위치를, "G"는 목표지점을 나타냅니다.
// 위 예시에서는 "R" 위치에서 아래, 왼쪽, 위, 왼쪽, 아래, 오른쪽, 위 순서로 움직이면 7번 만에 "G" 위치에 멈춰 설 수 있으며, 이것이 최소 움직임 중 하나입니다.
// 게임판의 상태를 나타내는 문자열 배열 board가 주어졌을 때, 말이 목표위치에 도달하는데 최소 몇 번 이동해야 하는지 return 하는 solution함수를 완성하세요. 만약 목표위치에 도달할 수 없다면 -1을 return 해주세요.

function solution(board) {
  var answer = 0;

  let col = board.length;
  let row = board[0].length;
  let arr = new Array(col).fill().map( () => new Array(row).fill(0));
  let udrl = ["U", "D", "R", "L"];
  let dPos = [0, 0];
  let curPos;

  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (board[i][j] === "R") {
        curPos = [i, j];
        arr[i][j] = 1;

        break;
      }
    }

    if (curPos) {
      break;
    }
  }

  let move = (dir, pos) => {

    if (dir === "U") {
      dPos[0] = -1;
    } else if (dir === "D") {
      dPos[0] = 1;
    } else if (dir === "R") {
      dPos[1] = 1;
    } else if (dir === "L") {
      dPos[1] = -1;
    }

    let newPos = [pos[0], pos[1]];

    while (board[newPos[0]] && board[newPos[0]][newPos[1]] && board[newPos[0]][newPos[1]] !== "D") {
      newPos[0] = newPos[0] + dPos[0];
      newPos[1] = newPos[1] + dPos[1];
    }

    newPos[0] = newPos[0] - dPos[0];
    newPos[1] = newPos[1] - dPos[1];
    dPos[0] = 0;
    dPos[1] = 0;

    return newPos;
  }

  let positions = [curPos];

  while (positions.length) {

    let newArr = [];

    answer = answer + 1;

    for (let el of positions) {
      for (let element of udrl) {

        let pos = move(element, el);

        if (board[pos[0]][pos[1]] === "G") {
          return answer;
        }

        if (!arr[pos[0]][pos[1]]) {
          arr[pos[0]][pos[1]] = 1;
          newArr.push(pos);
        }

      }
    }

    positions = newArr;
  }

  answer = -1;

  return answer;
}

console.log(solution(["...D..R", ".D.G...", "....D.D", "D....D.", "..D...."])) // 7
console.log(solution([".D.R", "....", ".G..", "...D"])) // -1