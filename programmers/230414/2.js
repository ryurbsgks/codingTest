// 배열 회전시키기

// 정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.

function solution(numbers, direction) {
  var answer = [];

  let memo;

  if (direction === "left") {
    memo = numbers.shift();
    numbers.push(memo);
  }

  if (direction === "right") {
    memo = numbers.pop();
    numbers.unshift(memo);
  }

  answer = numbers;

  return answer;
}

console.log(solution([1, 2, 3], "right")) // [3, 1, 2]
console.log(solution([4, 455, 6, 4, -1, 45, 6], "left")) // [455, 6, 4, -1, 45, 6, 4]