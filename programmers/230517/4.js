// 세로 읽기

// 문자열 my_string과 두 정수 m, c가 주어집니다. my_string을 한 줄에 m 글자씩 가로로 적었을 때 왼쪽부터 세로로 c번째 열에 적힌 글자들을 문자열로 return 하는 solution 함수를 작성해 주세요.

function solution(my_string, m, c) {
  var answer = '';

  let arr = Array.from(Array(my_string.length / m), (m) => new Array());

  for (let i = 0; i < my_string.length / m; i++) {
    for (let j = 0; j < m; j++) {
      arr[i][j] = my_string[i * m + j];
    }
  }
  
  for (let i = 0; i < my_string.length / m; i++) {
    answer = answer + arr[i][c - 1];
  }

  return answer;
}

console.log(solution("ihrhbakrfpndopljhygc", 4, 2)) // "happy"
console.log(solution("programmers", 1, 1)) // "programmers"