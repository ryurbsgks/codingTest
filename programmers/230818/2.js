// 가장 먼 노드

// n개의 노드가 있는 그래프가 있습니다. 각 노드는 1부터 n까지 번호가 적혀있습니다. 1번 노드에서 가장 멀리 떨어진 노드의 갯수를 구하려고 합니다. 가장 멀리 떨어진 노드란 최단경로로 이동했을 때 간선의 개수가 가장 많은 노드들을 의미합니다.
// 노드의 개수 n, 간선에 대한 정보가 담긴 2차원 배열 vertex가 매개변수로 주어질 때, 1번 노드로부터 가장 멀리 떨어진 노드가 몇 개인지를 return 하도록 solution 함수를 작성해주세요.

function solution(n, edge) {
  var answer = 0;

  let arr = new Array(n).fill().map( () => []);
  let visit = [1];
  let queue = [0];

  edge.map( (el) => {
    arr[el[0] - 1].push(el[1] - 1);
    arr[el[1] - 1].push(el[0] - 1);
  });

  while (queue.length) {

    let cur = queue.shift();

    arr[cur].map( (el) => {
      if (!visit[el]) {
        visit[el] = visit[cur] + 1;
        queue.push(el);
      }
    });
  }

  let max = Math.max(...visit);

  answer = visit.filter( (el) => el === max).length;

  return answer;
}

console.log(solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]])) // 3