// 가까운 수

// 정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

function solution(array, n) {
  var answer = 0;

  array.sort( (a, b) => {

    let [x, y] = [Math.abs(n - a), Math.abs(n - b)];

    if (x === y) {
      return a - b;
    }

    return x - y;
  });

  answer = array[0];

  return answer;
}

// console.log(solution([3, 10, 28], 20)) // 28
// console.log(solution([10, 11, 12], 13)) // 12
console.log(solution([10, 14, 12], 13)) // 12
