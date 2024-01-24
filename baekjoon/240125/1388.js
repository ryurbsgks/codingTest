// 형택이는 건축가이다. 지금 막 형택이는 형택이의 남자 친구 기훈이의 집을 막 완성시켰다. 형택이는 기훈이 방의 바닥 장식을 디자인했고, 이제 몇 개의 나무 판자가 필요한지 궁금해졌다. 나무 판자는 크기 1의 너비를 가졌고, 양수의 길이를 가지고 있다. 기훈이 방은 직사각형 모양이고, 방 안에는 벽과 평행한 모양의 정사각형으로 나누어져 있다.
// 이제 ‘-’와 ‘|’로 이루어진 바닥 장식 모양이 주어진다. 만약 두 개의 ‘-’가 인접해 있고, 같은 행에 있다면, 두 개는 같은 나무 판자이고, 두 개의 ‘|’가 인접해 있고, 같은 열에 있다면, 두 개는 같은 나무 판자이다.
// 기훈이의 방 바닥을 장식하는데 필요한 나무 판자의 개수를 출력하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1);

function solution() {

  let answer = 0;
  let [N, M] = input[0].split(" ").map( (el) => Number(el));
  let arr = [];
  let newArr = [];

  const dfs = (x, y) => {
    if (x < 0 || x > N - 1 || y < 0 || y > M - 1) {
      return false;
    }
  
    if (newArr[x][y] === true) {
      return false;
    }
  
    newArr[x][y] = true;
  
    if (arr[x][y] === "-" && (y === M - 1 || arr[x][y + 1] === "-")) {
      dfs(x, y + 1);
    } else if (arr[x][y] === "|" && (x === N - 1 || arr[x + 1][y] === "|")) {
      dfs(x + 1, y);
    }
  
    return true;
  };

  for (let i = 0; i < N; i++) {
    arr.push(newInput[i].split(""));
  }
  
  for (let i = 0; i < N; i++) {
    newArr.push(new Array(M).fill(false));
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (dfs(i, j)) {
        answer++;
      }
    }
  }

  return answer;
}

console.log(solution());