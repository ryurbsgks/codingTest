// 그래프를 DFS로 탐색한 결과와 BFS로 탐색한 결과를 출력하는 프로그램을 작성하시오. 단, 방문할 수 있는 정점이 여러 개인 경우에는 정점 번호가 작은 것을 먼저 방문하고, 더 이상 방문할 수 있는 점이 없는 경우 종료한다. 정점 번호는 1번부터 N번까지이다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1);

function solution(arr) {

  let [N, M, V] = input[0].split(" ").map( (el) => Number(el));
  let newArr = Array.from({ length: 10002 }, () => []);
  let array = Array(1002).fill(false);
  let resultBfs = [];
  let resultDfs = [];
  
  const bfs = (temp) => {

    let queue = [];

    queue.push(temp);
    array[temp] = true;
    
    while (queue.length > 0) {

      let x = queue.shift();

      resultBfs.push(x);
  
      for (let i = 0; i < newArr[x].length; i++) {
        if (!array[newArr[x][i]]) {
          queue.push(newArr[x][i]);
          array[newArr[x][i]] = true;
        }
      }

    }

  };
  
  const dfs = (x) => {
    array[x] = true;
    resultDfs.push(x);
  
    for (let i = 0; i < newArr[x].length; i++) {
      if (!array[newArr[x][i]]) {
        dfs(newArr[x][i]);
      }
    }
  };

  for (let i = 0; i < M; i++) {

    let [a, b] = arr[i].split(" ").map( (el) => Number(el));

    newArr[a].push(b);
    newArr[b].push(a);

  }
  
  for (let i = 1; i <= N; i++) {
    newArr[i].sort( (a, b) => a - b);
  }
  
  bfs(V);
  array.fill(false);
  dfs(V);

  return `${resultDfs.join(" ")}\n${resultBfs.join(" ")}`
}

console.log(solution(newInput));