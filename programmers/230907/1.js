// 연속 펄스 부분 수열의 합

// 어떤 수열의 연속 부분 수열에 같은 길이의 펄스 수열을 각 원소끼리 곱하여 연속 펄스 부분 수열을 만들려 합니다. 펄스 수열이란 [1, -1, 1, -1 …] 또는 [-1, 1, -1, 1 …] 과 같이 1 또는 -1로 시작하면서 1과 -1이 번갈아 나오는 수열입니다.
// 예를 들어 수열 [2, 3, -6, 1, 3, -1, 2, 4]의 연속 부분 수열 [3, -6, 1]에 펄스 수열 [1, -1, 1]을 곱하면 연속 펄스 부분수열은 [3, 6, 1]이 됩니다. 또 다른 예시로 연속 부분 수열 [3, -1, 2, 4]에 펄스 수열 [-1, 1, -1, 1]을 곱하면 연속 펄스 부분수열은 [-3, -1, -2, 4]이 됩니다.
// 정수 수열 sequence가 매개변수로 주어질 때, 연속 펄스 부분 수열의 합 중 가장 큰 것을 return 하도록 solution 함수를 완성해주세요.

function solution(sequence) {
  var answer = 0;

  const arr = [];
  const newArr = [];

  for (let i = 0; i < sequence.length; i++) {
    if (i === 0) {
      arr.push(sequence[i]);
      newArr.push(-sequence[i]);
    } else if (i % 2 === 0) {
      arr.push(Math.max(arr[i - 1] + sequence[i], sequence[i]));
      newArr.push(Math.max(newArr[i - 1] - sequence[i], -sequence[i]));
    } else {
      arr.push(Math.max(arr[i - 1] - sequence[i], -sequence[i]));
      newArr.push(Math.max(newArr[i - 1] + sequence[i], sequence[i]));
    }

    answer = Math.max(answer, arr[i], newArr[i]);
  }

  return answer;
}

console.log(solution([2, 3, -6, 1, 3, -1, 2, 4])) // 10