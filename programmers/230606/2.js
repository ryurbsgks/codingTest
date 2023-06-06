// x만큼 간격이 있는 n개의 숫자

// 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

function solution(x, n) {
  var answer = [];

  if (x < 0) {
    for (let i = x; i >= n * x; i = i + x) {
      answer.push(i);
    }
  } else if (x === 0) {
    for (let i = 0; i < n; i++) {
      answer.push(0);
    }
  } else {
    for (let i = x; i <= n * x; i = i + x) {
      answer.push(i);
    }
  }

  return answer;
}

console.log(solution(2, 5)) // [2,4,6,8,10]
console.log(solution(4, 3)) // [4,8,12]
console.log(solution(-4, 2)) // [-4, -8]