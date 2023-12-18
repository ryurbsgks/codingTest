// 형택이는 1부터 9까지의 숫자와, 구멍이 있는 직사각형 보드에서 재밌는 게임을 한다.
// 일단 보드의 가장 왼쪽 위에 동전을 하나 올려놓는다. 그다음에 다음과 같이 동전을 움직인다.
// 동전이 있는 곳에 쓰여 있는 숫자 X를 본다.
// 위, 아래, 왼쪽, 오른쪽 방향 중에 한가지를 고른다.
// 동전을 위에서 고른 방향으로 X만큼 움직인다. 이때, 중간에 있는 구멍은 무시한다.
// 만약 동전이 구멍에 빠지거나, 보드의 바깥으로 나간다면 게임은 종료된다. 형택이는 이 재밌는 게임을 되도록이면 오래 하고 싶다.
// 보드의 상태가 주어졌을 때, 형택이가 최대 몇 번 동전을 움직일 수 있는지 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1);

function solution(arr) {

  let answer = -1;
  let [N, M] = input[0].split(" ").map( (el) => Number(el));
  let newArr = [];
  let array = [];
  let newArray = [];

  const dfs = (x, y, dist) => {

    let move = Number(newArr[x][y]);
    let list = [
      [x - move, y],
      [x + move, y],
      [x, y - move],
      [x, y + move]
    ];

    answer = Math.max(answer, dist);
    
    for (let el of list) {

      let [nx, ny] = el;

      if (nx >= 0 && nx < N && ny >= 0 && ny < M && newArr[nx][ny] !== "H" && dist + 1 > newArray[nx][ny]) {
        if (!array[nx][ny]) {
          newArray[nx][ny] = dist + 1;
          array[nx][ny] = true;
          dfs(nx, ny, dist + 1);
          array[nx][ny] = false;
        } else {
          console.log(-1);
          process.exit();
        }
      }
      
    }

  };

  for (let i = 0; i < N; i++) {
    newArr.push(arr[i].trim());
  }

  array = Array.from({ length: N }, () => Array(M).fill(false));
  newArray = Array.from({ length: N }, () => Array(M).fill(0));

  dfs(0, 0, 1);

  return answer;
}

console.log(solution(newInput));