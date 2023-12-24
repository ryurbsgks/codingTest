// N개의 수가 주어진다. 이 숫자는 모두 자연수이고, 알파벳 A부터 J가 자리수를 대신해서 쓰여 있다. 이 알파벳은 모두 한 자리를 의미한다. 그리고, 각 자리수는 정확하게 알파벳 하나이다. 0으로 시작하는 수는 없다. 이때, 가능한 수의 합 중 최댓값을 구해보자.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution(N) {

  let answer = 0;
  let arr = Array.from({ length: 10 }, () => [0, false]);

  for (let i = 1; i <= N; i++) {

    let s = input[i];
    let m = 1;

    arr[s.charCodeAt(0) - 65][1] = true;
  
    for (let j = s.length - 1; j >= 0; j--) {
      arr[s.charCodeAt(j) - 65][0] += m;
      m *= 10;
    }
    
  }

  arr.sort( (a, b) => b[0] - a[0]);

  if (arr[9][1]) {
    for (let i = 8; i >= 0; i--) {
      if (!a[i][1]) {
        arr.slice(i, 1);

        break;
      }
    }
  }

  for (let i = 0; i < 9; i++) {
    answer += arr[i][0] * (9 - i);
  }

  return answer;
}

console.log(solution(Number(input[0])));