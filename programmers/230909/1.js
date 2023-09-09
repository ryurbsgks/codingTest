// 사칙연산

// 사칙연산에서 더하기(+)는 결합법칙이 성립하지만, 빼기(-)는 결합법칙이 성립하지 않습니다.
// 예를 들어 식 1 - 5 - 3은 연산 순서에 따라 다음과 같이 다른 결과를 가집니다.
// ((1 - 5) - 3) = -7
// (1 - (5 - 3)) = -1
// 위 예시와 같이 뺄셈은 연산 순서에 따라 그 결과가 바뀔 수 있습니다.
// 또 다른 예로 식 1 - 3 + 5 - 8은 연산 순서에 따라 다음과 같이 5가지 결과가 나옵니다.
// (((1 - 3) + 5) - 8) = -5
// ((1 - (3 + 5)) - 8) = -15
// (1 - ((3 + 5) - 8)) = 1
// (1 - (3 + (5 - 8))) = 1
// ((1 - 3) + (5 - 8)) = -5
// 위와 같이 서로 다른 연산 순서의 계산 결과는 [-15, -5, -5, 1, 1]이 되며, 이중 최댓값은 1입니다.
// 문자열 형태의 숫자와, 더하기 기호("+"), 뺄셈 기호("-")가 들어있는 배열 arr가 매개변수로 주어질 때, 서로 다른 연산순서의 계산 결과 중 최댓값을 return 하도록 solutjon 함수를 완성해 주세요.

function solution(arr) {
  var answer = -1;

  let count = Math.ceil(arr.length / 2);
  let Arr = new Array(count).fill().map( () => new Array(count).fill(-Infinity));
  let newArr = new Array(count).fill().map( () => new Array(count).fill(Infinity));

  for (let i = 0; i < count; i++) {
    Arr[i][i] = +arr[i * 2];
    newArr[i][i] = +arr[i * 2];
  }

  for (let i = 1; i < count; i++) {
    for (let j = 0; j < count - i; j++) {

      let n = j + i;

      for (let k = j; k < n; k++) {
        if (arr[k * 2 + 1] === "+") {
          Arr[j][n] = Math.max(Arr[j][n], Arr[j][k] + Arr[k + 1][n]);
          newArr[j][n] = Math.min(newArr[j][n], newArr[j][k] + newArr[k + 1][n]);
        } else {
          Arr[j][n] = Math.max(Arr[j][n], Arr[j][k] - newArr[k + 1][n]);
          newArr[j][n] = Math.min(newArr[j][n], newArr[j][k] - Arr[k + 1][n]);
        }
      }

    }
  }

  answer = Arr[0][count - 1];

  return answer;
}

console.log(solution(["1", "-", "3", "+", "5", "-", "8"])) // 1
console.log(solution(["5", "-", "3", "+", "1", "+", "2", "-", "4"])) // 3