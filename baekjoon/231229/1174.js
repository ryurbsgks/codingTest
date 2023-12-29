// 음이 아닌 정수를 십진법으로 표기했을 때, 왼쪽에서부터 자리수가 감소할 때, 그 수를 줄어드는 수라고 한다. 예를 들어, 321와 950은 줄어드는 수이고, 322와 958은 아니다.
// N번째로 작은 줄어드는 수를 출력하는 프로그램을 작성하시오. 만약 그러한 수가 없을 때는 -1을 출력한다. 가장 작은 줄어드는 수가 1번째 작은 줄어드는 수이다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim();

function solution(N) {

  let answer = -1;
  let set = new Set();
  let arr = [];

  const DFS = () => {
    if (arr.length > 0) {
      set.add(Number(arr.join("")));
    }

    for (let i = 0; i < 10; i++) {
      if (!arr.length || arr[arr.length - 1] > i) {
        arr.push(i);
        DFS();
        arr.pop();
      }
    }
  }

  DFS();

  set = Array.from(set);
  set.sort( (a, b) => a - b);

  if (set.length >= N) {
    answer = set[N - 1]
  }

  return answer;
}

console.log(solution(Number(input)));