// rny_string

// 'm'과 "rn"이 모양이 비슷하게 생긴 점을 활용해 문자열에 장난을 하려고 합니다. 문자열 rny_string이 주어질 때, rny_string의 모든 'm'을 "rn"으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.

function solution(rny_string) {
  var answer = '';

  let arr = rny_string.split("");

  arr.map( (el, index) => {
    if (el === "m") {
      arr[index] = "rn";
    }
  });

  answer = arr.join("");

  return answer;
}

console.log(solution("masterpiece")) // "rnasterpiece"
console.log(solution("programmers")) // "prograrnrners"
console.log(solution("jerry")) // "jerry"
console.log(solution("burn")) // "burn"