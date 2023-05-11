// 원하는 문자열 찾기

// 알파벳으로 이루어진 문자열 myString과 pat이 주어집니다. myString의 연속된 부분 문자열 중 pat이 존재하면 1을 그렇지 않으면 0을 return 하는 solution 함수를 완성해 주세요.
// 단, 알파벳 대문자와 소문자는 구분하지 않습니다.

function solution(myString, pat) {
  var answer = 0;

  myString.toLowerCase().includes(pat.toLowerCase()) ? answer = 1 : answer = 0;

  return answer;
}

console.log(solution("AbCdEfG", "aBc")) // 1
console.log(solution("aaAA", "aaaaa")) // 0