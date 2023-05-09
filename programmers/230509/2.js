// ad 제거하기

// 문자열 배열 strArr가 주어집니다. 배열 내의 문자열 중 "ad"라는 부분 문자열을 포함하고 있는 모든 문자열을 제거하고 남은 문자열을 순서를 유지하여 배열로 return 하는 solution 함수를 완성해 주세요.

function solution(strArr) {
  var answer = [];

  strArr.map( (el) => {
    if (!el.includes("ad")) {
      answer.push(el);
    }
  });

  return answer;
}

console.log(solution(["and","notad","abcd"])) // ["and","abcd"]
console.log(solution(["there","are","no","a","ds"])) // ["there","are","no","a","ds"]