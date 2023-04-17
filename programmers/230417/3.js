// 최댓값 만들기 (2)

// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  var answer = 0;

  let front, back;

  numbers.sort( (a, b) => a - b);
  front = numbers[0] * numbers[1];
  back = numbers[numbers.length - 1] * numbers[numbers.length - 2];
  answer = front > back ? front : back;
  
  return answer;
}

console.log(solution([1, 2, -3, 4, -5])) // 15
console.log(solution([0, -31, 24, 10, 1, 9])) // 240
console.log(solution([10, 20, 30, 5, 5, 20, 5])) // 600