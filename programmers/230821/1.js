// 블록 이동하기

// 로봇개발자 "무지"는 한 달 앞으로 다가온 "카카오배 로봇경진대회"에 출품할 로봇을 준비하고 있습니다. 준비 중인 로봇은 2 x 1 크기의 로봇으로 "무지"는 "0"과 "1"로 이루어진 N x N 크기의 지도에서 2 x 1 크기인 로봇을 움직여 (N, N) 위치까지 이동 할 수 있도록 프로그래밍을 하려고 합니다. 로봇이 이동하는 지도는 가장 왼쪽, 상단의 좌표를 (1, 1)로 하며 지도 내에 표시된 숫자 "0"은 빈칸을 "1"은 벽을 나타냅니다. 로봇은 벽이 있는 칸 또는 지도 밖으로는 이동할 수 없습니다. 로봇은 처음에 아래 그림과 같이 좌표 (1, 1) 위치에서 가로방향으로 놓여있는 상태로 시작하며, 앞뒤 구분없이 움직일 수 있습니다.
// 로봇이 움직일 때는 현재 놓여있는 상태를 유지하면서 이동합니다. 예를 들어, 위 그림에서 오른쪽으로 한 칸 이동한다면 (1, 2), (1, 3) 두 칸을 차지하게 되며, 아래로 이동한다면 (2, 1), (2, 2) 두 칸을 차지하게 됩니다. 로봇이 차지하는 두 칸 중 어느 한 칸이라도 (N, N) 위치에 도착하면 됩니다.
// 로봇은 다음과 같이 조건에 따라 회전이 가능합니다.
// 위 그림과 같이 로봇은 90도씩 회전할 수 있습니다. 단, 로봇이 차지하는 두 칸 중, 어느 칸이든 축이 될 수 있지만, 회전하는 방향(축이 되는 칸으로부터 대각선 방향에 있는 칸)에는 벽이 없어야 합니다. 로봇이 한 칸 이동하거나 90도 회전하는 데는 걸리는 시간은 정확히 1초 입니다.
// "0"과 "1"로 이루어진 지도인 board가 주어질 때, 로봇이 (N, N) 위치까지 이동하는데 필요한 최소 시간을 return 하도록 solution 함수를 완성해주세요.

function solution(board) {
  var answer = 0;

  let N = board.length;
  let goal = N + "" + N;
  let queue = [[[1, 1], [1, 2], 0]];
  let visit = new Set(["1112"]);
  let new_board = new Array(N + 2).fill().map( () => new Array(N + 2).fill(1));

  const getNextPosition = (left, right, board) => {

    let result = [];
    let X = 1;
    let Y = 0;
    let moves = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let toward = [-1, 1];
    
    moves.map( (el) => {

      let [dy, dx] = el;
      let next_left = [left[Y] + dy, left[X] + dx];
      let next_right = [right[Y] + dy, right[X] + dx];

      if (board[next_left[Y]][next_left[X]] === 0 && board[next_right[Y]][next_right[X]] === 0) {
        result.push([next_left, next_right]);
      }

    });
    
    if (left[Y] === right[Y]) {
      toward.map( (el) => {
        if (board[left[Y] + el][left[X]] === 0 && board[right[Y] + el][right[X]] === 0) {
          result.push([left, [left[Y] + el, left[X]]]);
          result.push([[right[Y] + el, right[X]], right]);
        }
      });
    } else {
      toward.map( (el) => {
        if (board[left[Y]][left[X] + el] === 0 && board[right[Y]][right[X] + el] === 0) {
          result.push([[left[Y], left[X] + el], left]);
          result.push([right, [right[Y], right[X] + el]]);
        }
      });
    }                  
    
    return result;
  };
  
  for(let i = 0; i < N; i++) {
    for(let j = 0; j < N; j++) {
      new_board[i + 1][j + 1] = board[i][j];
    }
  }

  while (queue.length) {

    let [left, right, count] = queue.shift();
    
    if (left.join("") === goal || right.join("") === goal) {
      return count;
    }
    
    let nextPosition = getNextPosition(left, right, new_board);

    for (let el of nextPosition) {

      let [next_left, next_right] = el;
      let key = next_left.join("") + next_right.join("");

      if(!visit.has(key)) {
        queue.push([next_left, next_right, count + 1]);
        visit.add(key);
      }

    }

  }

  return answer;
}

console.log(solution([[0, 0, 0, 1, 1],[0, 0, 0, 1, 0],[0, 1, 0, 1, 1],[1, 1, 0, 0, 1],[0, 0, 0, 0, 0]])) // 7