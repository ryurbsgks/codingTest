// 등대

// 인천 앞바다에는 1부터 n까지 서로 다른 번호가 매겨진 등대 n개가 존재합니다. 등대와 등대 사이를 오가는 뱃길이 n-1개 존재하여, 어느 등대에서 출발해도 다른 모든 등대까지 이동할 수 있습니다. 등대 관리자 윤성이는 전력을 아끼기 위하여, 이 중 몇 개의 등대만 켜 두려고 합니다. 하지만 등대를 아무렇게나 꺼버리면, 뱃길을 오가는 배들이 위험할 수 있습니다. 한 뱃길의 양쪽 끝 등대 중 적어도 하나는 켜져 있도록 등대를 켜 두어야 합니다.
// 예를 들어, 아래 그림과 같이 등대 8개와 7개의 뱃길들이 있다고 합시다. 이 경우 1번 등대와 5번 등대 두 개만 켜 두어도 모든 뱃길은 양쪽 끝 등대 중 하나가 켜져 있으므로, 배들은 안전하게 운항할 수 있습니다.
// 등대의 개수 n과 각 뱃길이 연결된 등대의 번호를 담은 이차원 배열 lighthouse가 매개변수로 주어집니다. 윤성이가 켜 두어야 하는 등대 개수의 최솟값을 return 하도록 solution 함수를 작성해주세요.

function solution(n, lighthouse) {
  var answer = 0;

  let memo = new Array(n + 1).fill(false);

  while (lighthouse.length) {

    let map = new Array(n + 1).fill().map( (el) => []);

    lighthouse.map( (el) => {

      let [a, b] = el;

      map[a].push(b);
      map[b].push(a);

    });

    map.filter( (el) => el.length === 1).map( (el) => {

      let [target] = el;
      
      if (!memo[target]) {
        memo[target] = true;

        if (map[target].length !== 1) {
          answer += 1;
        } else {
          answer += 0.5;
        } 
      }

    });
      
    lighthouse = lighthouse.filter( (el) => {

      let [a, b] = el;
          
      return !memo[a] && !memo[b];
    });

  }

  return answer;
}

console.log(solution(8, [[1, 2], [1, 3], [1, 4], [1, 5], [5, 6], [5, 7], [5, 8]])) // 2
console.log(solution(10, [[4, 1], [5, 1], [5, 6], [7, 6], [1, 2], [1, 3], [6, 8], [2, 9], [9, 10]])) // 3