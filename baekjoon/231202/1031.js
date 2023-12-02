// 서울의 서쪽에서 스타를 가장 잘하는 팀은 지민이의 팀이고, 동쪽에서 가장 잘하는 팀은 한수의 팀이다.
// 두 사람은 누가 서울에서 가장 스타크래프트를 잘하는지 결정하기 위해 대결을 하기로 했다.
// 지민이의 팀은 총 N명, 한수의 팀은 총 M명이다. 모든 팀원은 한 사람당 해야 하는 경기의 수가 정해져 있다. 이 숫자는 사람마다 다를 수 있다.
// 경기 대진표는 다음과 같은 규칙을 지켜서 만들어야 한다.
// 모든 경기는 지민이의 팀 중 한 명, 한수의 팀 중 한 명이 대결한다.
// 같은 대결은 최대 한 번 할 수 있다.
// 모든 팀원은 한 사람당 해야 하는 경기의 수 만큼 경기를 해야 한다.
// 가능한 경기 대진표가 여러 가지라면 사전 순으로 가장 앞서는 것을 선택한다. 사전 순의 정의는 후술한다.
// 경기 대진표는 N*M 크기의 행렬이다. 행은 지민이의 팀에 대응하고, 열은 한수의 팀에 대응한다. (i,j)가 1이면 지민이의 팀의 i번 선수와 한수의 팀의 j번 선수가 대결을 하는 것이고, 0이면 대결을 하지 않는 것이다.
// 대진표의 사전 순 비교는 다음과 같이 정의된다. 두 대진표의 행 중에서 맨 처음으로 다른 행 i를 찾는다. 그리고 나서 그 행에서 가장 처음 다른 열 j를 찾는다. (i,j)가 0인 대진표가 사전 순으로 앞서는 대진표이다.
// 지민이의 팀의 각 팀원이 해야 하는 경기의 수, 한수의 팀의 각 팀원이 해야 하는 경기의 수가 주어졌을 때, 사전 순으로 가장 앞서는 대진표를 출력하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1, input.length);

function solution(arr) {

  let answer = []
  let [N, M] = input[0].split(" ").map( (el) => Number(el));
  let amount = arr[0].split(" ").map( (el) => Number(el));
  let exhibit = arr[1].split(" ").map( (el) => Number(el));
  let max = 105;
  let line = new Array(max).fill().map( () => []);
  let capacity = new Array(max).fill().map( () => new Array(max).fill(0));
  let flow = new Array(max).fill().map( () => new Array(max).fill(0));
  let sour = 101;
  let sink = 102;
  let flowSum = 0;

  const AddEdge = (from, to, amount) => {
    line[from].push(to);
    line[to].push(from);
    capacity[from][to] = amount;
  };

  const Maxflow = (sour, sink) => {

    let flowSum = 0;

    while (true) {

      let parent = new Array(max).fill(-1);
      let queue = [sour];

      while (queue.length > 0 && parent[sink] === -1) {

        let cur = queue.shift();

        for (let i = 0; i < line[cur].length; i++) {

          let next = line[cur][i];

          if (capacity[cur][next] - flow[cur][next] > 0 && parent[next] === -1) {
            queue.push(next);
            parent[next] = cur;
          }

        }

      }

      if (parent[sink] === -1) {
        break;
      }

      for (let i = sink; i !== sour; i = parent[i]) {
        flow[parent[i]][i]++;
        flow[i][parent[i]]--;
      }

      flowSum++;

    }
    
    return flowSum;
  };

  const Changeflow = (sour, sink) => {

    let parent = new Array(max).fill(-1);
    let queue = [sour];

    while (queue.length > 0 && parent[sink] === -1) {

      let cur = queue.shift();

      for (let i = 0; i < line[cur].length; i++) {

        let next = line[cur][i];

        if (cur < sour || (cur === sour && next < sink)) {
          continue;
        }

        if (capacity[cur][next] - flow[cur][next] > 0 && parent[next] === -1) {
          queue.push(next);
          parent[next] = cur;
        }

      }

    }

    if (parent[sink] === -1) {
      return;
    }

    flow[sour][sink] = flow[sink][sour] = 0;

    for (let i = sink; i !== sour; i = parent[i]) {
      flow[parent[i]][i]++;
      flow[i][parent[i]]--;
    }

  };

  for (let i = 1; i <= N; i++) {
    AddEdge(sour, i, amount[i - 1]);
  }

  flowSum = exhibit.reduce( (acc, cur) => acc + cur, 0);

  for (let i = 1; i <= M; i++) {
    AddEdge(50 + i, sink, exhibit[i - 1]);
  }

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
      AddEdge(i, 50 + j, 1);
    }
  }

  if (Maxflow(sour, sink) !== flowSum) {
    return -1;
  }

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
      if (flow[i][50 + j] !== 1) {
        continue;
      }

      Changeflow(i, 50 + j);
    }
  }

  for (let i = 1; i <= N; i++) {

    let str = "";

    for (let j = 1; j <= M; j++) {
      str = `${str}${flow[i][50 + j]}`;
    }

    answer.push(str);

  }

  return answer.join("\n");
}

console.log(solution(newInput));