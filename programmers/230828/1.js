// 퍼즐 조각 채우기

// 테이블 위에 놓인 퍼즐 조각을 게임 보드의 빈 공간에 적절히 올려놓으려 합니다. 게임 보드와 테이블은 모두 각 칸이 1x1 크기인 정사각 격자 모양입니다. 이때, 다음 규칙에 따라 테이블 위에 놓인 퍼즐 조각을 게임 보드의 빈칸에 채우면 됩니다.
// 조각은 한 번에 하나씩 채워 넣습니다.
// 조각을 회전시킬 수 있습니다.
// 조각을 뒤집을 수는 없습니다.
// 게임 보드에 새로 채워 넣은 퍼즐 조각과 인접한 칸이 비어있으면 안 됩니다.
// 다음은 퍼즐 조각을 채우는 예시입니다.
// 위 그림에서 왼쪽은 현재 게임 보드의 상태를, 오른쪽은 테이블 위에 놓인 퍼즐 조각들을 나타냅니다. 테이블 위에 놓인 퍼즐 조각들 또한 마찬가지로 [상,하,좌,우]로 인접해 붙어있는 경우는 없으며, 흰 칸은 퍼즐이 놓이지 않은 빈 공간을 나타냅니다. 모든 퍼즐 조각은 격자 칸에 딱 맞게 놓여있으며, 격자 칸을 벗어나거나, 걸쳐 있는 등 잘못 놓인 경우는 없습니다.
// 이때, 아래 그림과 같이 3,4,5번 조각을 격자 칸에 놓으면 규칙에 어긋나므로 불가능한 경우입니다.
// 3번 조각을 놓고 4번 조각을 놓기 전에 위쪽으로 인접한 칸에 빈칸이 생깁니다.
// 5번 조각의 양 옆으로 인접한 칸에 빈칸이 생깁니다.
// 다음은 규칙에 맞게 최대한 많은 조각을 게임 보드에 채워 넣은 모습입니다.
// 최대한 많은 조각을 채워 넣으면 총 14칸을 채울 수 있습니다.
// 현재 게임 보드의 상태 game_board, 테이블 위에 놓인 퍼즐 조각의 상태 table이 매개변수로 주어집니다. 규칙에 맞게 최대한 많은 퍼즐 조각을 채워 넣을 경우, 총 몇 칸을 채울 수 있는지 return 하도록 solution 함수를 완성해주세요.

function solution(game_board, table) {
  var answer = 0;

  let blanks = [];
  let blocks = [];

  const moveBlock = (block) => {

    let minX = Math.min(...block.map( (el) => el[0]));
    let minY = Math.min(...block.map( (el) => el[1]));
   
    return block.map( (el) => [el[0] - minX, el[1] - minY]).sort();
  };

  const rotate = (block) => {

    let max = Math.max(...block.map( (el) => Math.max(el[0], el[1])));
    let rotateBlock = block.map( (el)=> [max - el[1], el[0]]);
   
    return moveBlock(rotateBlock);
  };

  const bfs = (start, table, k) => {

    let dx = [0, 0, 1, -1];
    let dy = [1, -1, 0, 0];
    let needVisit = start;
    let block = [];

    while (needVisit.length > 0) {

      let [cx, cy] = needVisit.shift();

      block.push([cx, cy]);

      for (let i = 0; i < 4; i++) {

        let nx = cx + dx[i];
        let ny = cy + dy[i];
      
        if (nx < 0 || ny < 0 || nx >= table.length || ny >= table.length) {
          continue;
        } else if (table[nx][ny] === k) {
          continue;
        } else {
          needVisit.push([nx, ny]);
          table[nx][ny] = k;
        }
      }

    }

    return moveBlock(block);
  };

  for (let i = 0; i < game_board.length; i++) {
    for (let j = 0; j < game_board.length; j++) {
      if (game_board[i][j] === 0) {
        game_board[i][j] = 1;
        blanks.push(bfs([[i, j]], game_board, 1));
      }
    }
  }

  for (let i = 0; i < table.length; i++) {
    for (let j = 0; j < table.length; j++) {
      if (table[i][j] === 1) {
        table[i][j] = 0;
        blocks.push(bfs([[i, j]], table, 0));
      }
    }
  }

  blocks.map( (el) => {
    for (let i = 0; i < blanks.length; i++) {

      let match = false;

      for (let j = 0; j < 4; j++) {
        el = rotate(el);

        if (JSON.stringify(el) === JSON.stringify(blanks[i])) {
          blanks.splice(i, 1);
          answer += el.length;
          match = true;

          break;
        }
      }

      if (match) {
        break;
      }

    }
  });

  return answer;
}

console.log(solution([[1,1,0,0,1,0],[0,0,1,0,1,0],[0,1,1,0,0,1],[1,1,0,1,1,1],[1,0,0,0,1,0],[0,1,1,1,0,0]], [[1,0,0,1,1,0],[1,0,1,0,1,0],[0,1,1,0,1,1],[0,0,1,0,0,0],[1,1,0,1,1,0],[0,1,0,0,0,0]])) // 14
console.log(solution([[0,0,0],[1,1,0],[1,1,1]], [[1,1,1],[1,0,0],[0,0,0]])) // 0