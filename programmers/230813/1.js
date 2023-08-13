// 섬 연결하기

// n개의 섬 사이에 다리를 건설하는 비용(costs)이 주어질 때, 최소의 비용으로 모든 섬이 서로 통행 가능하도록 만들 때 필요한 최소 비용을 return 하도록 solution을 완성하세요.
// 다리를 여러 번 건너더라도, 도달할 수만 있으면 통행 가능하다고 봅니다. 예를 들어 A 섬과 B 섬 사이에 다리가 있고, B 섬과 C 섬 사이에 다리가 있으면 A 섬과 C 섬은 서로 통행 가능합니다.

function solution(n, costs) {
  var answer = 0;

  let arr = new Array(n).fill(false);
  let newArr = new Array(costs.length).fill(false);
  let num = 0;

  costs.sort( (a, b) => a[2] - b[2]);

  arr[costs[0][0]] = true;
  arr[costs[0][1]] = true;
  newArr[0] = true;
  answer += costs[0][2];
  num += 1;

  while (num < n - 1) {
    for (let i = 1; i < costs.length; i++) {
      
      let [start, end, cost] = costs[i];

      if (!newArr[i] && ((!arr[start] && arr[end]) || (arr[start] && !arr[end]))) {
        num++;
        answer += cost;
        arr[start] = true;
        arr[end] = true;
        newArr[i] = true;
        break;
      }

    }
  }

  return answer;
}

console.log(solution(4, [[0,1,1],[0,2,2],[1,2,5],[1,3,1],[2,3,8]])) // 4