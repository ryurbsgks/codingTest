// august14는 세상에서 가장 맛있는 칵테일이다. 이 칵테일을 만드는 정확한 방법은 아직 세상에 공개되지 않았지만, 들어가는 재료 N개는 공개되어 있다. 
// 경근이는 인터넷 검색을 통해서 재료 쌍 N-1개의 비율을 알아냈고, 이 비율을 이용해서 칵테일에 들어가는 전체 재료의 비율을 알아낼 수 있다.
// 총 재료 쌍 N-1개의 비율이 입력으로 주어진다. 이때, 칵테일을 만드는데 필요한 각 재료의 양을 구하는 프로그램을 작성하시오. 이때, 필요한 재료의 질량을 모두 더한 값이 최소가 되어야 한다. 칵테일을 만드는 재료의 양은 정수이고, 총 질량은 0보다 커야한다.
// 비율은 "a b p q"와 같은 형식이고, a번 재료의 질량을 b번 재료의 질량으로 나눈 값이 p/q라는 뜻이다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1, input.length);

function solution(arr) {

  let answer = [];
  let N = Number(input[0]);
  let dp = new Array(N).fill(0);
  let graph = new Array(N).fill(null).map(() => []);
  let lcm = 1;
  
  const GCD = (a, b) => {
    while (b !== 0) {

      let t = a % b;

      a = b;
      b = t;

    }

    return a;
  };
  
  const dfs = (x, parent) => {
    for (let [child, ratio] of graph[x]) {
      if (child === parent) {
        continue;
      }

      dp[child] = (dp[x] * ratio[1]) / ratio[0];
      dfs(child, x);
    }
  };

  for (let i = 0; i < N - 1; i++) {

    let [a, b, c, d] = newInput[i].split(" ").map(Number);

    graph[a].push([b, [c, d]]);
    graph[b].push([a, [d, c]]);
    lcm *= (c * d) / GCD(c, d);
    
  }

  dp[0] = lcm;
  dfs(0, -1);

  let global = dp[0];

  for (let i = 1; i < N; i++) {
    if (dp[i] === 0) {
      continue;
    }

    global = GCD(global, dp[i]);
  }

  dp.map( (el) => {
    answer.push(el / global);
  });

  return answer.join(" ").trim();
};

console.log(solution(newInput));