// 문자열 뒤집기

// 문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
  var answer = '';

  let arr = [...my_string];
  let newArr = [];
  
  arr.map( (el) => newArr.unshift(el));
  answer = newArr.join("");

  return answer;
}

console.log(solution("jaron")) // "noraj"
console.log(solution("bread")) // "daerb"