// 쿼드압축 후 개수 세기

// 0과 1로 이루어진 2n x 2n 크기의 2차원 정수 배열 arr이 있습니다. 당신은 이 arr을 쿼드 트리와 같은 방식으로 압축하고자 합니다. 구체적인 방식은 다음과 같습니다.
// 당신이 압축하고자 하는 특정 영역을 S라고 정의합니다.
// 만약 S 내부에 있는 모든 수가 같은 값이라면, S를 해당 수 하나로 압축시킵니다.
// 그렇지 않다면, S를 정확히 4개의 균일한 정사각형 영역(입출력 예를 참고해주시기 바랍니다.)으로 쪼갠 뒤, 각 정사각형 영역에 대해 같은 방식의 압축을 시도합니다.
// arr이 매개변수로 주어집니다. 위와 같은 방식으로 arr을 압축했을 때, 배열에 최종적으로 남는 0의 개수와 1의 개수를 배열에 담아서 return 하도록 solution 함수를 완성해주세요.

function solution(arr) {
  var answer = [];

  let zero = 0;
  let one = 0;

  const 쿼드트리 = (row, col, n) => {

    let check = true;

    for (let i = row; i < row + n; i++) {
      for (let j = col; j < col + n; j++) {
        if (arr[row][col] !== arr[i][j]) {
          check = false;
        }
      }
    }

    if (!check) {
      쿼드트리(row, col, parseInt(n / 2));
      쿼드트리(row, col + parseInt(n / 2), parseInt(n / 2));
      쿼드트리(row + parseInt(n / 2), col, parseInt(n / 2));
      쿼드트리(row + parseInt(n / 2), col + parseInt(n / 2), parseInt(n / 2));
    } else {
      if (arr[row][col]) {
        one = one + 1;
      } else {
        zero = zero + 1;
      }
    }

  };

  쿼드트리(0, 0, arr.length);
  answer = [zero, one];

  return answer;
}

console.log(solution([[1,1,0,0],[1,0,0,0],[1,0,0,1],[1,1,1,1]])) // [4,9]
console.log(solution([[1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1],[0,0,0,0,1,1,1,1],[0,1,0,0,1,1,1,1],[0,0,0,0,0,0,1,1],[0,0,0,0,0,0,0,1],[0,0,0,0,1,0,0,1],[0,0,0,0,1,1,1,1]])) // [10,15]