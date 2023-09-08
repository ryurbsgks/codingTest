// 상담원 인원

// 현대모비스는 우수한 SW 인재 채용을 위해 상시로 채용 설명회를 진행하고 있습니다. 채용 설명회에서는 채용과 관련된 상담을 원하는 참가자에게 멘토와 1:1로 상담할 수 있는 기회를 제공합니다. 채용 설명회에는 멘토 n명이 있으며, 1~k번으로 분류되는 상담 유형이 있습니다. 각 멘토는 k개의 상담 유형 중 하나만 담당할 수 있습니다. 멘토는 자신이 담당하는 유형의 상담만 가능하며, 다른 유형의 상담은 불가능합니다. 멘토는 동시에 참가자 한 명과만 상담 가능하며, 상담 시간은 정확히 참가자가 요청한 시간만큼 걸립니다.
// 참가자가 상담 요청을 하면 아래와 같은 규칙대로 상담을 진행합니다.
// 상담을 원하는 참가자가 상담 요청을 했을 때, 참가자의 상담 유형을 담당하는 멘토 중 상담 중이 아닌 멘토와 상담을 시작합니다.
// 만약 참가자의 상담 유형을 담당하는 멘토가 모두 상담 중이라면, 자신의 차례가 올 때까지 기다립니다. 참가자가 기다린 시간은 참가자가 상담 요청했을 때부터 멘토와 상담을 시작할 때까지의 시간입니다.
// 모든 멘토는 상담이 끝났을 때 자신의 상담 유형의 상담을 받기 위해 기다리고 있는 참가자가 있으면 즉시 상담을 시작합니다. 이때, 먼저 상담 요청한 참가자가 우선됩니다.
// 참가자의 상담 요청 정보가 주어질 때, 참가자가 상담을 요청했을 때부터 상담을 시작하기까지 기다린 시간의 합이 최소가 되도록 각 상담 유형별로 멘토 인원을 정하려 합니다. 단, 각 유형별로 멘토 인원이 적어도 한 명 이상이어야 합니다.
// 예를 들어, 5명의 멘토가 있고 1~3번의 3가지 상담 유형이 있을 때 아래와 같은 참가자의 상담 요청이 있습니다.
// 참가자의 상담 요청
// 참가자 번호	  시각	  상담 시간	  상담 유형
// 1번 참가자	    10분	  60분	      1번 유형
// 2번 참가자	    15분	  100분	      3번 유형
// 3번 참가자	    20분	  30분	      1번 유형
// 4번 참가자	    30분	  50분	      3번 유형
// 5번 참가자	    50분	  40분	      1번 유형
// 6번 참가자	    60분	  30분	      2번 유형
// 7번 참가자	    65분	  30분	      1번 유형
// 8번 참가자	    70분	  100분	      2번 유형
// 이때, 멘토 인원을 아래와 같이 정하면, 참가자가 기다린 시간의 합이 25로 최소가 됩니다.
// 1번 유형	  2번 유형	  3번 유형
// 2명	      1명	        2명
// 1번 유형
// 1번 유형을 담당하는 멘토가 2명 있습니다.
// 1번 참가자가 상담 요청했을 때, 멘토#1과 10분~70분 동안 상담을 합니다.
// 3번 참가자가 상담 요청했을 때, 멘토#2와 20분~50분 동안 상담을 합니다.
// 5번 참가자가 상담 요청했을 때, 멘토#2와 50분~90분 동안 상담을 합니다.
// 7번 참가자가 상담 요청했을 때, 모든 멘토가 상담 중이므로 1번 참가자의 상담이 끝날 때까지 5분 동안 기다리고 멘토#1과 70분~100분 동안 상담을 합니다.
// 2번 유형
// 2번 유형을 담당하는 멘토가 1명 있습니다.
// 6번 참가자가 상담 요청했을 때, 멘토와 60분~90분 동안 상담을 합니다.
// 8번 참가자가 상담 요청했을 때, 모든 멘토가 상담 중이므로 6번 참가자의 상담이 끝날 때까지 20분 동안 기다리고 90분~190분 동안 상담을 합니다.
// 3번 유형
// 3번 유형을 담당하는 멘토가 2명 있습니다.
// 2번 참가자가 상담 요청했을 때, 멘토#1과 15분~115분 동안 상담을 합니다.
// 4번 참가자가 상담 요청했을 때, 멘토#2와 30분~80분 동안 상담을 합니다.
// 상담 유형의 수를 나타내는 정수 k, 멘토의 수를 나타내는 정수 n과 참가자의 상담 요청을 담은 2차원 정수 배열 reqs가 매개변수로 주어집니다. 멘토 인원을 적절히 배정했을 때 참가자들이 상담을 받기까지 기다린 시간을 모두 합한 값의 최솟값을 return 하도록 solution 함수를 완성해 주세요.

function solution(k, n, reqs) {
  var answer = 0;

  let arr = new Array(k).fill().map( () => []);
  let newArr = new Array(k).fill().map( () => new Array(n).fill(null));

  for (let el of reqs) {
    arr[el[2] - 1].push([el[0], el[1]]);
  }

  for (let el of arr) {
    el.sort( (a, b) => a[0] - b[0]);
  }

  for (let i = 0; i < k; i += 1) {

    let typeReq = arr[i];
    let dp = newArr[i];

    for (let j = 0; j < n; j += 1) {

      let memo = new Array(j + 1).fill(0);
      let answer = 0;

      for (let el of typeReq) {

        let [start, spend] = el;
        let min = Infinity;
        let minIndex = null;

        for (let k = 0; k < j + 1; k += 1) {

          let value = memo[k];

          if (value < min) {
            min = value;
            minIndex = k;
          }

        }

        if (min < start) {
          memo[minIndex] = start + spend;
        } else {
          answer += min - start;
          memo[minIndex] += spend;
        }

      }

      dp[j] = answer;

    }

  }

  let remainTutorCount = n - k;
  let tutorCounts = new Array(k).fill(1);

  while (remainTutorCount) {

    let max = -Infinity;
    let maxIndex = null;

    for (let i = 0; i < k; i += 1) {

      let dp = newArr[i];
      let count = tutorCounts[i];
      let calculated = dp[count - 1] - dp[count];

      if (max < calculated) {
        max = calculated;
        maxIndex = i;
      }

    }

    tutorCounts[maxIndex] += 1;
    remainTutorCount -= 1;

  }

  for (let i = 0; i < k; i += 1) {
    answer += newArr[i][tutorCounts[i] - 1];
  }

  return answer;
}

console.log(solution(3, 5, [[10, 60, 1], [15, 100, 3], [20, 30, 1], [30, 50, 3], [50, 40, 1], [60, 30, 2], [65, 30, 1], [70, 100, 2]])) // 25
console.log(solution(2, 3, [[5, 55, 2], [10, 90, 2], [20, 40, 2], [50, 45, 2], [100, 50, 2]])) // 90