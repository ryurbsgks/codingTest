// 부대복귀

// 강철부대의 각 부대원이 여러 지역에 뿔뿔이 흩어져 특수 임무를 수행 중입니다. 지도에서 강철부대가 위치한 지역을 포함한 각 지역은 유일한 번호로 구분되며, 두 지역 간의 길을 통과하는 데 걸리는 시간은 모두 1로 동일합니다. 임무를 수행한 각 부대원은 지도 정보를 이용하여 최단시간에 부대로 복귀하고자 합니다. 다만 적군의 방해로 인해, 임무의 시작 때와 다르게 되돌아오는 경로가 없어져 복귀가 불가능한 부대원도 있을 수 있습니다.
// 강철부대가 위치한 지역을 포함한 총지역의 수 n, 두 지역을 왕복할 수 있는 길 정보를 담은 2차원 정수 배열 roads, 각 부대원이 위치한 서로 다른 지역들을 나타내는 정수 배열 sources, 강철부대의 지역 destination이 주어졌을 때, 주어진 sources의 원소 순서대로 강철부대로 복귀할 수 있는 최단시간을 담은 배열을 return하는 solution 함수를 완성해주세요. 복귀가 불가능한 경우 해당 부대원의 최단시간은 -1입니다.

function solution(n, roads, sources, destination) {
  var answer = [];

  let visited = new Array(n + 1).fill(Infinity);
  let connect = new Array(n + 1).fill(0).map( (el) => []);
  let q = [destination];

  roads.map( ([from, to]) => {
    connect[from].push(to);
    connect[to].push(from);
  });

  visited[destination] = 0;

  while (q.length) {

    let cur = q.shift();

    for (let el of connect[cur]) {
      if (visited[cur] + 1 < visited[el]) {
        visited[el] = visited[cur] + 1;
        q.push(el);
      }
    }

  }

  answer = sources.map( (el) => visited[el] !== Infinity ? visited[el] : -1);

  return answer;
}

console.log(solution(3, [[1, 2], [2, 3]], [2, 3], 1)) // [1, 2]
console.log(solution(5, [[1, 2], [1, 4], [2, 4], [2, 5], [4, 5]], [1, 3, 5], 5)) // [2, -1, 0]