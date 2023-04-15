// 문자열 정렬하기 (1)

// 문자열 my_string이 매개변수로 주어질 때, my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.

function solution(my_string) {
  var answer = [];

  let arr = my_string.split("").filter( (el) => el === "0" || el === "1" || el === "2" || el === "3" || el === "4" || el === "5" || el === "6" || el === "7" || el === "8" || el === "9");
  
  answer = arr.sort( (a, b) => a - b).map( (el) => Number(el));

  return answer;
}

console.log(solution("hi12392")) // [1, 2, 2, 3, 9]
console.log(solution("p2o4i8gj2")) // [2, 2, 4, 8]
console.log(solution("abcde0")) // [0]