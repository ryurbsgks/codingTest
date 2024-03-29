// 서기 2012년! 드디어 2년간 수많은 국민들을 기다리게 한 게임 ACM Craft (Association of Construction Manager Craft)가 발매되었다.
// 이 게임은 지금까지 나온 게임들과는 다르게 ACM크래프트는 다이나믹한 게임 진행을 위해 건물을 짓는 순서가 정해져 있지 않다. 즉, 첫 번째 게임과 두 번째 게임이 건물을 짓는 순서가 다를 수도 있다. 매 게임시작 시 건물을 짓는 순서가 주어진다. 또한 모든 건물은 각각 건설을 시작하여 완성이 될 때까지 Delay가 존재한다.
// 위의 예시를 보자.
// 이번 게임에서는 다음과 같이 건설 순서 규칙이 주어졌다. 1번 건물의 건설이 완료된다면 2번과 3번의 건설을 시작할수 있다. (동시에 진행이 가능하다) 그리고 4번 건물을 짓기 위해서는 2번과 3번 건물이 모두 건설 완료되어야지만 4번건물의 건설을 시작할수 있다.
// 따라서 4번건물의 건설을 완료하기 위해서는 우선 처음 1번 건물을 건설하는데 10초가 소요된다. 그리고 2번 건물과 3번 건물을 동시에 건설하기 시작하면 2번은 1초뒤에 건설이 완료되지만 아직 3번 건물이 완료되지 않았으므로 4번 건물을 건설할 수 없다. 3번 건물이 완성되고 나면 그때 4번 건물을 지을수 있으므로 4번 건물이 완성되기까지는 총 120초가 소요된다.
// 프로게이머 최백준은 애인과의 데이트 비용을 마련하기 위해 서강대학교배 ACM크래프트 대회에 참가했다! 최백준은 화려한 컨트롤 실력을 가지고 있기 때문에 모든 경기에서 특정 건물만 짓는다면 무조건 게임에서 이길 수 있다. 그러나 매 게임마다 특정건물을 짓기 위한 순서가 달라지므로 최백준은 좌절하고 있었다. 백준이를 위해 특정건물을 가장 빨리 지을 때까지 걸리는 최소시간을 알아내는 프로그램을 작성해주자.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

let line = 1;

function solution(l) {

  let [N, K] = input[l].split(" ").map( (el) => Number(el));

  line += K + 3;

  let target = Number(input[line - 1]);
  let build = input[l + 1].split(" ").map( (el) => Number(el));
  
  build.unshift(-1);

  let acc = [...build];
  let prev_cnt = new Array(N + 1).fill(0);
  let graph = Array.from({ length: N + 1 }, () => []);

  input.slice(l + 2, l + 2 + K).map( (el) => {

    let [prev, next] = el.split(" ").map( (element) => Number(element));

    graph[prev].push(next);
    prev_cnt[next]++;

  });

  let q = [];

  for (let i = 1; i <= N; i++) {
    if (prev_cnt[i] === 0) {
      q.push(i);
    }
  }

  while (q.length) {

    let cur = q.shift();

    for (let i = 0; i < graph[cur].length; i++) {

      let next = graph[cur][i];

      if (acc[next] < acc[cur] + build[next]) {
        acc[next] = acc[cur] + build[next];
      }

      prev_cnt[next]--;

      if (prev_cnt[next] === 0) {
        q.push(next);
      }

    }
  }

  return acc[target];
}

for (let i = 0; i < Number(input[0]); i++) {
  console.log(solution(line));
}