// 외벽 점검

// 레스토랑을 운영하고 있는 "스카피"는 레스토랑 내부가 너무 낡아 친구들과 함께 직접 리모델링 하기로 했습니다. 레스토랑이 있는 곳은 스노우타운으로 매우 추운 지역이어서 내부 공사를 하는 도중에 주기적으로 외벽의 상태를 점검해야 할 필요가 있습니다.
// 레스토랑의 구조는 완전히 동그란 모양이고 외벽의 총 둘레는 n미터이며, 외벽의 몇몇 지점은 추위가 심할 경우 손상될 수도 있는 취약한 지점들이 있습니다. 따라서 내부 공사 도중에도 외벽의 취약 지점들이 손상되지 않았는 지, 주기적으로 친구들을 보내서 점검을 하기로 했습니다. 다만, 빠른 공사 진행을 위해 점검 시간을 1시간으로 제한했습니다. 친구들이 1시간 동안 이동할 수 있는 거리는 제각각이기 때문에, 최소한의 친구들을 투입해 취약 지점을 점검하고 나머지 친구들은 내부 공사를 돕도록 하려고 합니다. 편의 상 레스토랑의 정북 방향 지점을 0으로 나타내며, 취약 지점의 위치는 정북 방향 지점으로부터 시계 방향으로 떨어진 거리로 나타냅니다. 또, 친구들은 출발 지점부터 시계, 혹은 반시계 방향으로 외벽을 따라서만 이동합니다.
// 외벽의 길이 n, 취약 지점의 위치가 담긴 배열 weak, 각 친구가 1시간 동안 이동할 수 있는 거리가 담긴 배열 dist가 매개변수로 주어질 때, 취약 지점을 점검하기 위해 보내야 하는 친구 수의 최소값을 return 하도록 solution 함수를 완성해주세요.

function solution(n, weak, dist) {
  var answer = 0;

  let length = weak.length;
  let arr = new Array(length * 2 - 1).fill(0);

  const getPermutation = (arr, n) => {

    let result = [];

    if (n === 1) {
      return arr.map(el => [el])
    }
 
    arr.map( (el, index, arr) => {

      let rest = [...arr.slice(0, index), ...arr.slice(index + 1)];
      let perms = getPermutation(rest, n - 1);
      let attached = perms.map( (element) => [el, ...element]);

      result.push(...attached);
    });
    
    return result;
  }

  for (let i = 0; i < length * 2 - 1; i++) {
    arr[i] = i < length ? weak[i] : weak[i - length] + n;
  }

  dist.sort( (a, b) => b - a);

  for (let i = 1; i <= dist.length; i++) {

    let permutation = getPermutation(dist, i);

    for (let el of permutation) {
      for (let j = 0; j < length; j++) {

        let line = arr.slice(j, length + j);

        for (let element of el) {

          let coverage = line[0] + element;

          line = line.filter( (el) => el > coverage);

          if (!line.length) {
            return i;
          }
        }
      }
    }
  }

  return -1;
}

console.log(solution(12, [1, 5, 6, 10], [1, 2, 3, 4])) // 2
console.log(solution(12, [1, 3, 4, 9, 10], [3, 5, 7])) // 1