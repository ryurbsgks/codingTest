// 최적의 행렬 곱셈

// 크기가 a by b인 행렬과 크기가 b by c 인 행렬이 있을 때, 두 행렬을 곱하기 위해서는 총 a x b x c 번 곱셈해야합니다.
// 예를 들어서 크기가 5 by 3인 행렬과 크기가 3 by 2인 행렬을 곱할때는 총 5 x 3 x 2 = 30번의 곱하기 연산을 해야 합니다.
// 행렬이 2개일 때는 연산 횟수가 일정 하지만, 행렬의 개수가 3개 이상일 때는 연산의 순서에 따라서 곱하기 연산의 횟수가 바뀔 수 있습니다. 예를 들어서 크기가 5 by 3인 행렬 A, 크기가 3 by 10인 행렬 B, 크기가 10 by 6인 행렬 C가 있을 때, 순서대로 A와 B를 먼저 곱하고, 그 결과에 C를 곱하면 A와 B행렬을 곱할 때 150번을, AB 에 C를 곱할 때 300번을 연산을 해서 총 450번의 곱하기 연산을 합니다. 하지만, B와 C를 먼저 곱한 다음 A 와 BC를 곱하면 180 + 90 = 270번 만에 연산이 끝납니다.
// 각 행렬의 크기 matrix_sizes 가 매개변수로 주어 질 때, 모든 행렬을 곱하기 위한 최소 곱셈 연산의 수를 return하는 solution 함수를 완성해 주세요.

function solution(matrix_sizes) {
  var answer = 0;

  let length = matrix_sizes.length;
  let arr = new Array(length).fill().map( () => new Array(length).fill(Infinity));

  for (let i = 0; i < length; i++) {
    arr[i][i] = 0;
  }

  for (let i = 1; i < length; i++) {
    for (let j = 0; j < length; j++) {

      let end = j + i;

      if (end >= length) {
        break;
      }

      for (let k = j; k < end; k++) {
        arr[j][end] = Math.min(arr[j][end], arr[j][k] + arr[k + 1][end] + (matrix_sizes[j][0] * matrix_sizes[k + 1][0] * matrix_sizes[end][1]));
      }

    }
  }

  answer = arr[0][length - 1];

  return answer;
}

console.log(solution([[5,3],[3,10],[10,6]])) // 270