// 그래프의 정점의 집합을 둘로 분할하여, 각 집합에 속한 정점끼리는 서로 인접하지 않도록 분할할 수 있을 때, 그러한 그래프를 특별히 이분 그래프 (Bipartite Graph) 라 부른다.
// 그래프가 입력으로 주어졌을 때, 이 그래프가 이분 그래프인지 아닌지 판별하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution(K) {

  let answer = "";
  let lineIndex = 1;

  const DFS = (start, visited, graph, group) => {
    visited[start] = group;
    
    for (let el of graph[start]) {
      if (visited[el] === 0) {

        let result = DFS(el, visited, graph, -group);

        if (!result) {
          return false;
        }

      } else {
        if (visited[el] === group) {
          return false;
        }
      }
    }

    return true;
  };
  
  for (let i = 0; i < K; i++) {

    let [V, E] = input[lineIndex++].split(" ").map( (el) => Number(el));
    let arr = Array.from({ length: V + 1 }, () => []);
    let newArr = Array(V + 1).fill(0);

    for (let j = 0; j < E; j++) {

      let [u, v] = input[lineIndex++].split(" ").map( (el) => Number(el));

      arr[u].push(v);
      arr[v].push(u);

    }

    let result = true;

    for (let j = 1; j <= V; j++) {
      if (newArr[j] === 0) {
        result = DFS(j, newArr, arr, 1);

        if (!result) {
          break;
        }
      }
    }

    answer += result ? "YES\n" : "NO\n";

  }

  return answer.slice(0, answer.length - 1);
}

console.log(solution(Number(input[0])));