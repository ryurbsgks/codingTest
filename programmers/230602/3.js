// 시저 암호

// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

function solution(s, n) {
  var answer = '';

  let arr = s.split("").map( (el) => {

    if (el === " ") {
      return el;
    }

    let number = el.charCodeAt();

    if (number <= 90) {

      number = number + n;

      if (number > 90) {
        number = number - 26;
      }

      return String.fromCharCode(number);
    } else {

      number = number + n;

      if (number > 122) {
        number = number - 26;
      }

      return String.fromCharCode(number);
    }

  });

  answer = arr.join("");

  return answer;
}

console.log(solution("AB", 1)) // "BC"
console.log(solution("z", 1)) // "a"
console.log(solution("a B z", 4)) // "e F d"