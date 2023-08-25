// 모두 0으로 만들기

// 각 점에 가중치가 부여된 트리가 주어집니다. 당신은 다음 연산을 통하여, 이 트리의 모든 점들의 가중치를 0으로 만들고자 합니다.
// 임의의 연결된 두 점을 골라서 한쪽은 1 증가시키고, 다른 한쪽은 1 감소시킵니다.
// 하지만, 모든 트리가 위의 행동을 통하여 모든 점들의 가중치를 0으로 만들 수 있는 것은 아닙니다. 당신은 주어진 트리에 대해서 해당 사항이 가능한지 판별하고, 만약 가능하다면 최소한의 행동을 통하여 모든 점들의 가중치를 0으로 만들고자 합니다.
// 트리의 각 점의 가중치를 의미하는 1차원 정수 배열 a와 트리의 간선 정보를 의미하는 edges가 매개변수로 주어집니다. 주어진 행동을 통해 트리의 모든 점들의 가중치를 0으로 만드는 것이 불가능하다면 -1을, 가능하다면 최소 몇 번만에 가능한지를 찾아 return 하도록 solution 함수를 완성해주세요. (만약 처음부터 트리의 모든 정점의 가중치가 0이라면, 0을 return 해야 합니다.)

function solution(a, edges) {
  var answer = 0n;

  let tree = new Array(a.length).fill().map( () => []);
  let stack = [[0, -1]];
  let visit = new Array(a.length).fill(false);

  for (let [u, v] of edges) {
    tree[u].push(v);
    tree[v].push(u);
  }

  while (stack.length) {

    let [start, parent] = stack.pop();

    if (visit[start]) {
      a[parent] += a[start];
      answer += BigInt(Math.abs(a[start]));

      continue;
    }

    stack.push([start, parent]);
    visit[start] = true;

    for (let el of tree[start]) {
      if (!visit[el]) {
        stack.push([el, start]);
      }
    }

  }

  return a[0] ? -1 : answer;
}

console.log(solution([-5,0,2,1,2], [[0,1],[3,4],[2,3],[0,3]])) // 9
console.log(solution([0,1,0], [[0,1],[1,2]])) // -1