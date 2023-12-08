// 팰린드롬이란, 앞에서부터 읽었을 때와, 뒤에서부터 읽었을 때가 같은 문자열이다.
// 모든 문자열이 팰린드롬이 아니기 때문에 다음과 같은 4가지 연산으로 보통 문자열을 팰린드롬으로 만든다.
// 문자열의 어떤 위치에 어떤 문자를 삽입 (시작과 끝도 가능)
// 어떤 위치에 있는 문자를 삭제
// 어떤 위치에 있는 문자를 교환
// 서로 다른 문자를 교환
// 1, 2, 3번 연산은 마음껏 사용할 수 있지만, 마지막 연산은 많아야 한 번 사용할 수 있다.
// 문자열이 주어졌을 때, 팰린드롬으로 만들기 위해 필요한 연산의 최솟값을 출력하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim();

function solution(str) {

  let arr = Array.from({ length: str.length }, () => Array(str.length).fill(-1));

  const solve = (left, right) => {
    if (arr[left][right] !== -1) {
      return arr[left][right];
    }

    if (left >= right) {
      return 0;
    }

    arr[left][right] = Math.min(solve(left + 1, right) + 1, solve(left, right - 1) + 1, solve(left + 1, right - 1) + (str[left] !== str[right]));
    
    return arr[left][right];
  };

  const swapChars = (str, i, j) => {

    let chars = str.split("");
    
    [chars[i], chars[j]] = [chars[j], chars[i]];

    return chars.join("");
  };

  let answer = solve(0, str.length - 1);

  for (let i = 0; i < str.length - 1; i++) {
    for (let j = i + 1; j < str.length; j++) {
      arr = Array.from({ length: str.length }, () => Array(str.length).fill(-1));
      str = swapChars(str, i, j);
      answer = Math.min(answer, solve(0, str.length - 1) + 1);
      str = swapChars(str, i, j);
    }
  }
  
  return answer;
}

console.log(solution(input));