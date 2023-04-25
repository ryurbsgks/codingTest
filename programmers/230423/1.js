// 대문자와 소문자

// 문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
  var answer = '';

  let arr = [];
  let upperCase = my_string.toUpperCase().split("");
  let lowerCase = my_string.toLowerCase().split("");

  upperCase.map( (el, index) => {
    if (el !== my_string[index]) {
      arr[index] = el;
    }
  });

  lowerCase.map( (el, index) => {
    if (el !== my_string[index]) {
      arr[index] = el;
    }
  });

  answer = arr.join("");

  return answer;
}

console.log(solution("cccCCC")) // "CCCccc"
console.log(solution("abCdEfghIJ")) // "ABcDeFGHij"