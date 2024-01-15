// 전쟁은 어느덧 전면전이 시작되었다. 결국 전투는 난전이 되었고, 우리 병사와 적국 병사가 섞여 싸우게 되었다. 그러나 당신의 병사들은 흰색 옷을 입고, 적국의 병사들은 파란색 옷을 입었기 때문에 서로가 적인지 아군인지는 구분할 수 있다. 문제는 같은 팀의 병사들은 모이면 모일수록 강해진다는 사실이다.
// N명이 뭉쳐있을 때는 N2의 위력을 낼 수 있다. 과연 지금 난전의 상황에서는 누가 승리할 것인가? 단, 같은 팀의 병사들이 대각선으로만 인접한 경우는 뭉쳐 있다고 보지 않는다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1);

function solution(arr) {

  let [N, M] = arr;
  let newArr = [];
  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];
  let power = [0, 0];

  const bfs = (x, y, a) => {

    let que = [];
    let cnt = 1;

    que.push([x, y]);
    newArr[x][y] = -1;

    while (que.length > 0) {
      [x, y] = que.shift();
  
      for (let i = 0; i < 4; i++) {

        let nx = dx[i] + x;
        let ny = dy[i] + y;
  
        if (nx < 0 || nx >= M || ny < 0 || ny >= N) {
          continue;
        }
  
        if (newArr[nx][ny] === a) {
          newArr[nx][ny] = -1;
          que.push([nx, ny]);
          cnt += 1;
        }

      }
    }
  
    return cnt * cnt;
  };

  for (let i = 0; i < M; i++) {
    newArr.push(newInput[i].split(""));
  }
  
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (newArr[i][j] == "W") {
        power[0] += bfs(i, j, "W");
      }

      if (newArr[i][j] == "B") {
        power[1] += bfs(i, j, "B");
      }
    }
  }

  return power.join(" ");
}

console.log(solution(input[0].split(" ").map( (el) => Number(el))));