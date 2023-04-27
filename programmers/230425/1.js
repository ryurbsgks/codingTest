// 배열의 유사도

// 두 배열이 얼마나 유사한지 확인해보려고 합니다. 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.

function solution(s1, s2) {
  var answer = 0;

  s1.map( (el) => {
    s2.map( (element) => {
      if (element === el) {
        answer++;
      }
    });
  });

  return answer;
}

console.log(solution(["a", "b", "c"], ["com", "b", "d", "p", "c"])) // 2
console.log(solution(["n", "omg"], ["m", "dot"])) // 0