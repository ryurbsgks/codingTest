// 두 수의 합

// 0 이상의 두 정수가 문자열 a, b로 주어질 때, a + b의 값을 문자열로 return 하는 solution 함수를 작성해 주세요.

function solution(a, b) {
  var answer = '';

  answer = String(BigInt(a) + BigInt(b));

  return answer;
}

console.log(solution("582", "734")) // "1316"
console.log(solution("18446744073709551615", "287346502836570928366")) // "305793246910280479981"
console.log(solution("0", "0")) // "0"