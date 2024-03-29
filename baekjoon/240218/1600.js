// 동물원에서 막 탈출한 원숭이 한 마리가 세상구경을 하고 있다. 그 녀석은 말(Horse)이 되기를 간절히 원했다. 그래서 그는 말의 움직임을 유심히 살펴보고 그대로 따라 하기로 하였다. 말은 말이다. 말은 격자판에서 체스의 나이트와 같은 이동방식을 가진다. 다음 그림에 말의 이동방법이 나타나있다. x표시한 곳으로 말이 갈 수 있다는 뜻이다. 참고로 말은 장애물을 뛰어넘을 수 있다.
//  	x	 	x	 
// x	 	 	 	x
//  	 	말	 	 
// x	 	 	 	x
//  	x	 	x	 
// 근데 원숭이는 한 가지 착각하고 있는 것이 있다. 말은 저렇게 움직일 수 있지만 원숭이는 능력이 부족해서 총 K번만 위와 같이 움직일 수 있고, 그 외에는 그냥 인접한 칸으로만 움직일 수 있다. 대각선 방향은 인접한 칸에 포함되지 않는다.
// 이제 원숭이는 머나먼 여행길을 떠난다. 격자판의 맨 왼쪽 위에서 시작해서 맨 오른쪽 아래까지 가야한다. 인접한 네 방향으로 한 번 움직이는 것, 말의 움직임으로 한 번 움직이는 것, 모두 한 번의 동작으로 친다. 격자판이 주어졌을 때, 원숭이가 최소한의 동작으로 시작지점에서 도착지점까지 갈 수 있는 방법을 알아내는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution(K) {

  let [W, H] = input[1].split(" ").map( (el) => Number(el));
  let arr = [];
  let newArr = [];
  let array = [];

  for (let i = 2; i < H + 2; i++) {
    arr.push(input[i].split(" ").map( (el) => Number(el)));
    newArr.push(new Array(W).fill().map( () => new Array(K + 1).fill(false)));
  }

  array.push([0, 0, 0, 0]);

  for (let i = 0; i < K; i++) {
    newArr[0][0][i] = true;
  }

  while (array.length > 0) {

    let [x, y, horse, dist] = array.shift();
    let move = [[x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]];
    let newMove = [[x - 2, y + 1], [x - 2, y - 1], [x - 1, y + 2], [x - 1, y - 2], [x + 2, y + 1], [x + 2, y - 1], [x + 1, y + 2], [x + 1, y - 2]];

    if (x === H - 1 && y === W - 1) {
      return dist;
    }

    if (horse < K) {
      for (let [nx, ny] of move) {
        if (nx >= 0 && nx < H && ny >= 0 && ny < W && arr[nx][ny] === 0 && !newArr[nx][ny][horse]) {
          newArr[nx][ny][horse] = true;
          array.push([nx, ny, horse, dist + 1]);
        }
      }
      
      for (let [nx, ny] of newMove) {
        if (nx >= 0 && nx < H && ny >= 0 && ny < W && arr[nx][ny] === 0 && !newArr[nx][ny][horse + 1]) {
          newArr[nx][ny][horse + 1] = true;
          array.push([nx, ny, horse + 1, dist + 1]);
        }
      }
    } else {
      for (let [nx, ny] of move) {
        if (nx >= 0 && nx < H && ny >= 0 && ny < W && arr[nx][ny] === 0 && !newArr[nx][ny][horse]) {
          newArr[nx][ny][horse] = true;
          array.push([nx, ny, horse, dist + 1]);
        }
      }
    }

  }

  return -1;
}

console.log(solution(Number(input[0])));