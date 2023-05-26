// 문자열 곱하기

// 문자열 my_string과 정수 k가 주어질 때, my_string을 k번 반복한 문자열을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string, k) {
  var answer = '';

  let n = 0;

  while (n < k) {

    for (let i = 0; i < my_string.length; i++) {
      answer = answer + my_string[i];
    }

    n++;
  }

  return answer;
}

console.log(solution("string", 3)) // "stringstringstring"
console.log(solution("love", 10)) // "lovelovelovelovelovelovelovelovelovelove"