// 문자열 바꿔서 찾기

// 문자 "A"와 "B"로 이루어진 문자열 myString과 pat가 주어집니다. myString의 "A"를 "B"로, "B"를 "A"로 바꾼 문자열의 연속하는 부분 문자열 중 pat이 있으면 1을 아니면 0을 return 하는 solution 함수를 완성하세요.

function solution(myString, pat) {
  var answer = 0;

  let arr = myString.split("");

  arr.map( (el, index) => {
    if (el === "A") {
      return arr[index] = "B";
    }

    if (el === "B") {
      return arr[index] = "A";
    }
  });

  if (arr.join("").includes(pat)) {
    answer = 1;
  }

  return answer;
}

console.log(solution("ABBAA", "AABB")) // 1
console.log(solution("ABAB", "ABAB")) // 0