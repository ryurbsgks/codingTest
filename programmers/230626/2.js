// N-Queen

// 가로, 세로 길이가 n인 정사각형으로된 체스판이 있습니다. 체스판 위의 n개의 퀸이 서로를 공격할 수 없도록 배치하고 싶습니다.
// 예를 들어서 n이 4인경우 다음과 같이 퀸을 배치하면 n개의 퀸은 서로를 한번에 공격 할 수 없습니다.
// 체스판의 가로 세로의 세로의 길이 n이 매개변수로 주어질 때, n개의 퀸이 조건에 만족 하도록 배치할 수 있는 방법의 수를 return하는 solution함수를 완성해주세요.

function solution(n) {
  var answer = 0;

  const dfs = (board, row) => {

    if(row === n) {
      answer++;
    } else {
      for(let i = 1; i <= n; i++) {
        board[row + 1] = i;

        if(isValid(board, row + 1)) {
          dfs(board, row + 1);
        }
      }
    }

  };

  const isValid = (board, row) => {

    for(let i = 1; i < row; i++) {
      if(board[i] === board[row]) {
        return false;
      }

      if(Math.abs(board[i] - board[row]) === Math.abs(i - row)) {
        return false;
      }
    }

    return true;
  };

  for(let i = 1; i <= n; i++) {

    const board = new Array(n + 1).fill(0);

    board[1] = i;
    dfs(board, 1);
  }

  return answer;
}

console.log(solution(4)) // 2