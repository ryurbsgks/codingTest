// x 사이의 개수

// 문자열 myString이 주어집니다. myString을 문자 "x"를 기준으로 나눴을 때 나눠진 문자열 각각의 길이를 순서대로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.

function solution(myString) {
  var answer = [];

  myString.split("x").map( (el) => {
    if (el !== "x") {
      answer.push(el);
    }
  });

  answer.map( (el, index) => {
    answer[index] = el.length
  });

  return answer;
}

console.log(solution("oxooxoxxox")) // [1, 2, 1, 0, 1, 0]
console.log(solution("xabcxdefxghi")) // [0, 3, 3, 3]