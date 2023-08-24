// 스타 수열

// 다음과 같은 것들을 정의합니다.
// 어떤 수열 x의 부분 수열(Subsequence)이란, x의 몇몇 원소들을 제거하거나 그러지 않고 남은 원소들이 원래 순서를 유지하여 얻을 수 있는 새로운 수열을 말합니다.
// 예를 들어, [1,3]은 [1,2,3,4,5]의 부분수열입니다. 원래 수열에서 2, 4, 5를 제거해서 얻을 수 있기 때문입니다.
// 다음과 같은 조건을 모두 만족하는 수열 x를 스타 수열이라고 정의합니다.
// x의 길이가 2 이상의 짝수입니다. (빈 수열은 허용되지 않습니다.)
// x의 길이를 2n이라 할 때, 다음과 같은 n개의 집합 {x[0], x[1]}, {x[2], x[3]}, ..., {x[2n-2], x[2n-1]} 의 교집합의 원소의 개수가 1 이상입니다.
// x[0] != x[1], x[2] != x[3], ..., x[2n-2] != x[2n-1] 입니다.
// 예를 들어, [1,2,1,3,4,1,1,3]은 스타 수열입니다. {1,2}, {1,3}, {4,1}, {1,3} 의 교집합은 {1} 이고, 각 집합 내의 숫자들이 서로 다르기 때문입니다.
// 1차원 정수 배열 a가 매개변수로 주어집니다. a의 모든 부분 수열 중에서 가장 길이가 긴 스타 수열의 길이를 return 하도록 solution 함수를 완성해주세요. 이때, a의 모든 부분 수열 중에서 스타 수열이 없다면, 0을 return 해주세요.

function solution(a) {
  var answer = 0;

  let count = a.reduce( (acc, cur) => {
    acc[cur] ? acc[cur][1]++ : acc[cur] = [cur, 1];

    return acc;
  }, []).filter( (el) => el).sort( (a, b) => b[1] - a[1]);

  for (let i = 0; i < count.length; i++) {
    if (answer >= count[i][1]) {
      continue;
    }
    
    let num = 0;
    
    for (let j = 0; j < a.length; j++) {
      if (a[j + 1] === undefined) {
        continue;
      }

      if (a[j] === a[j + 1]) {
        continue;
      }

      if (a[j] !== count[i][0] && a[j + 1] !== count[i][0]) {
        continue;
      }
      
      num++;
      j++;
    }
    
    answer = Math.max(answer, num);
  }

  return answer * 2;
}

console.log(solution([0])) // 0
console.log(solution([5,2,3,3,5,3])) // 4
console.log(solution([0,3,3,0,7,2,0,2,2,0])) // 8