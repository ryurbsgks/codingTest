// l로 만들기

// 알파벳 소문자로 이루어진 문자열 myString이 주어집니다. 알파벳 순서에서 "l"보다 앞서는 모든 문자를 "l"로 바꾼 문자열을 return 하는 solution 함수를 완성해 주세요.

function solution(myString) {
  var answer = '';

  let arr = myString.split("");

  arr.map( (el, index) => {
    if (el === "a" || el === "b" || el === "c" || el === "d" || el === "e" || el === "f" || el === "g" || el === "h" || el === "i" || el === "j" || el === "k") {
      arr[index] = "l";
    }
  });

  answer = arr.join("");

  return answer;
}

console.log(solution("abcdevwxyz")) // "lllllvwxyz"
console.log(solution("jjnnllkkmm")) // "llnnllllmm"