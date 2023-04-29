// 잘라서 배열로 저장하기

// 문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.

function solution(my_str, n) {
  var answer = [];

  for (let i = 0; i < my_str.length; i = i + n) {
    answer.push(my_str.slice(i, i + n));
  }

  return answer;
}

console.log(solution("abc1Addfggg4556b", 6)) // ["abc1Ad", "dfggg4", "556b"]
console.log(solution("abcdef123", 3)) // ["abc", "def", "123"]