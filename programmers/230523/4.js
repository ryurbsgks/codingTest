// 이어 붙인 수

// 정수가 담긴 리스트 num_list가 주어집니다. num_list의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 return하도록 solution 함수를 완성해주세요.

function solution(num_list) {
  var answer = 0;

  let even = [];
  let odd = [];

  num_list.map( (el) => {

    if (el % 2 === 0) {
      return even.push(el);
    }

    return odd.push(el);
  });

  answer = Number(even.join("")) + Number(odd.join(""));

  return answer;
}

console.log(solution([3, 4, 5, 2, 1])) // 393
console.log(solution([5, 7, 8, 3])) // 581