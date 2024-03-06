// 코레스코 콘도미니엄 8층은 학생들이 3끼의 식사를 해결하는 공간이다. 그러나 몇몇 비양심적인 학생들의 만행으로 음식물이 통로 중간 중간에 떨어져 있다. 이러한 음식물들은 근처에 있는 것끼리 뭉치게 돼서 큰 음식물 쓰레기가 된다. 
// 이 문제를 출제한 선생님은 개인적으로 이러한 음식물을 실내화에 묻히는 것을 정말 진정으로 싫어한다. 참고로 우리가 구해야 할 답은 이 문제를 낸 조교를 맞추는 것이 아니다. 
// 통로에 떨어진 음식물을 피해가기란 쉬운 일이 아니다. 따라서 선생님은 떨어진 음식물 중에 제일 큰 음식물만은 피해 가려고 한다. 
// 선생님을 도와 제일 큰 음식물의 크기를 구해서 “10ra"를 외치지 않게 도와주자.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution() {

  let answer = 0;
  let [N, M, K] = input[0].split(" ").map( (el) => Number(el));
  let arr = new Array(N).fill(0).map( () => new Array(M).fill(0));
  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];

  const BFS = (row, col) => {

    let que = [];
    let cnt = 1;

    que.push([row, col]);

    while (que.length > 0) {

      let [newRow, newCol] = que.shift();

      for (let i = 0; i < 4; i++) {

        let nRow = newRow + dx[i];
        let nCol = newCol + dy[i];

        if (nRow < 0 || nRow >= N || nCol < 0 || nCol >= M) {
          continue;
        }

        if (arr[nRow][nCol] !== 1) {
          continue;
        }

        que.push([nRow, nCol]);
        arr[nRow][nCol] = 0;
        cnt++;

      }

    }

    return cnt;
  };

  for (let i = 1; i <= K; i++) {

    let [r, c] = input[i].split(" ").map( (el) => Number(el));

    arr[r - 1][c - 1] = 1;

  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (arr[i][j] === 1) {
        arr[i][j] = 0;

        let cur = BFS(i, j);

        if (cur > answer) {
          answer = cur;
        }

      }
    }
  }

  return answer;
}

console.log(solution());