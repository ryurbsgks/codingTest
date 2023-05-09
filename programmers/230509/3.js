// 문자열이 몇 번 등장하는지 세기

// 문자열 myString과 pat이 주어집니다. myString에서 pat이 등장하는 횟수를 return 하는 solution 함수를 완성해 주세요.

function solution(myString, pat) {
  var answer = 0;

  let arr = [];

  for (let i = 0; i <= myString.length - pat.length; i++) {
    if (myString.indexOf(pat, i) !== -1) {
      if (!arr.includes(myString.indexOf(pat, i))) {
        arr.push(myString.indexOf(pat, i));
      }
    }
  }

  answer = arr.length;

  return answer;
}

console.log(solution("banana", "ana")) // 2
console.log(solution("aaaa", "aa")) // 3