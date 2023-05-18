// 접미사인지 확인하기

// 어떤 문자열에 대해서 접미사는 특정 인덱스부터 시작하는 문자열을 의미합니다. 예를 들어, "banana"의 모든 접미사는 "banana", "anana", "nana", "ana", "na", "a"입니다.
// 문자열 my_string과 is_suffix가 주어질 때, is_suffix가 my_string의 접미사라면 1을, 아니면 0을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string, is_suffix) {
  var answer = 0;

  let str = "";
  let check = "";

  for (let i = my_string.length - 1; i >= 0; i--) {
    str = str + my_string[i];
  }

  for (let i = is_suffix.length - 1; i >= 0; i--) {
    check = check + is_suffix[i];
  }

  str.indexOf(check) === 0 ? answer = 1 : answer = 0;

  return answer;
}

console.log(solution("banana", "ana")) // 1
console.log(solution("banana", "nan")) // 0
console.log(solution("banana", "wxyz")) // 0
console.log(solution("banana", "abanana")) // 0