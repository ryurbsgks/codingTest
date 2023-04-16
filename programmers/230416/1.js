// 숨어있는 숫자의 덧셈 (1)

// 문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
  var answer = 0;

  let arr = my_string.split("").filter( (el) => el === "1" || el === "2" || el === "3" || el === "4" || el === "5" || el === "6" || el === "7" || el === "8" || el === "9");

  answer = arr.reduce( (acc, cur) => acc + Number(cur), 0);

  return answer;
}

console.log(solution("aAb1B2cC34oOp")) // 10
console.log(solution("1a2b3c4d123")) // 16