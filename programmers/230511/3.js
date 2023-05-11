// 길이에 따른 연산

// 정수가 담긴 리스트 num_list가 주어질 때, 리스트의 길이가 11 이상이면 리스트에 있는 모든 원소의 합을 10 이하이면 모든 원소의 곱을 return하도록 solution 함수를 완성해주세요.

function solution(num_list) {
  var answer = 0;

  if (num_list.length >= 11) {
    return answer = num_list.reduce( (acc, cur) => acc + cur, 0);
  }

  answer = num_list.reduce( (acc, cur) => acc * cur, 1);

  return answer;
}

console.log(solution([3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1])) // 51
console.log(solution([2, 3, 4, 5])) // 120