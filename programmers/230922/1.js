// 트리 트리오 중간값

// n개의 점으로 이루어진 트리가 있습니다. 이때, 트리 상에서 다음과 같은 것들을 정의합니다.
// 어떤 두 점 사이의 거리는, 두 점을 잇는 경로 상 간선의 개수로 정의합니다.
// 임의의 3개의 점 a, b, c에 대한 함수 f(a, b, c)의 값을 a와 b 사이의 거리, b와 c 사이의 거리, c와 a 사이의 거리, 3개 값의 중간값으로 정의합니다.
// 트리의 정점의 개수 n과 트리의 간선을 나타내는 2차원 정수 배열 edges가 매개변수로 주어집니다. 주어진 트리에서 임의의 3개의 점을 뽑아 만들 수 있는 모든 f값 중에서, 제일 큰 값을 구해 return 하도록 solution 함수를 완성해주세요.

function solution(n, edges) {
  var answer = 0;

  let obj = {};

  const dfs = (start, n, obj) => {

    let q = [[start, 0]];
    let arr = new Array(n + 1).fill(false);
    let maxNode = start;
    let maxDist = 0;
    let maxCheck = 1;
  
    arr[start] = true;
    
    while (q.length > 0) {
  
      let [node, dist] = q.pop();
  
      if (dist > maxDist) {
        maxNode = node;
        maxDist = dist;
        maxCheck = 1;
      } else if (dist === maxDist) {
        maxCheck = 0;
      }
  
      for (let el of obj[node]) {
        if (!arr[el]) {
          arr[el] = true;
          q.push([el, dist + 1]);
        }
      }
  
    }
  
    return [maxNode, maxDist, maxCheck];
  };

  for (let [a, b] of edges) {
    if (!obj[a]) {
      obj[a] = [];
    }

    if (!obj[b]) {
      obj[b] = [];
    }

    obj[a].push(b);
    obj[b].push(a);
  }

  let [node, dist, check] = dfs(1, n, obj);
  let [newNode, newDist, newCheck] = dfs(node, n, obj);

  if (!newCheck) {
    return newDist;
  }

  let [maxNode, maxDist, maxCheck] = dfs(newNode, n, obj);

  answer = newDist - maxCheck;

  return answer;
}

console.log(solution(4, [[1,2],[2,3],[3,4]])) // 2
console.log(solution(5, [[1,5],[2,5],[3,5],[4,5]])) // 2