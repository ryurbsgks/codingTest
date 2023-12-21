// 지민이는 수영장을 만들려고 한다. 수영장을 만들 곳의 크기는 N*M이고, 각 칸은 직육면체이다. 따라서, 각 칸의 직육면체의 높이가 쓰여 있는 다음과 같은 땅을 생각할 수 있다.
// 16661
// 61116
// 16661
// 이 수영장은 15만큼의 물이 들어있는 수영장을 만들 수 있다. 가운데 3개의 칸에 5만큼 물을 채우면 되기 때문이다.
// 자 이제 가운데 물을 더 추가했다고 생각하면, 벽(높이가 6인 직육면체)을 넘어서 밖으로 나갈 것이다. 물은 항상 높이가 더 낮은 곳으로만 흐르고, 직육면체 위의 표면에는 물이 없다. 그리고, 땅의 높이는 0이고, 땅은 물을 무한대로 흡수 할 수 있다.
// 땅의 모양이 주어질 때, 수영장에 물이 얼마만큼 있을 수 있는지 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1);

function solution(arr) {

  let answer = 0;
  let [N, M] = input[0].split(" ").map( (el) => Number(el));
  let newArr = Array.from({ length: N }, () => Array(M).fill(false));
  let array = arr.map( (el) => el.split("").map( (el) => Number(el)));
  let dx = [-1, 0, 0, 1];
  let dy = [0, -1, 1, 0];
  
  const bfs = (x, y, h) => {

    let que = [[x, y]];
    let check = true;
    let num = 1;

    newArr[x][y] = true;
    
    while (que.length > 0) {

      let [X, Y] = que.shift();

      for (let i = 0; i < 4; i++) {

        let nx = X + dx[i];
        let ny = Y + dy[i];

        if (nx === -1 || nx === N || ny === -1 || ny === M) {
          check = false;

          continue;
        }

        if (array[nx][ny] <= h && !newArr[nx][ny]) {
          newArr[nx][ny] = true;
          que.push([nx, ny]);
          num += 1;
        }

      }

    }

    if (check) {
      answer += num;
    }

  };
  
  for (let i = 1; i < 9; i++) {
    newArr = Array.from({ length: N }, () => Array(M).fill(false));

    for (let j = 0; j < N; j++) {
      for (let k = 0; k < M; k++) {
        if (array[j][k] <= i && !newArr[j][k]) {
          bfs(j, k, i);
        }
      }
    }
  }

  return answer;
}

console.log(solution(newInput));