// 지민이는 각 칸마다 (1×1크기의 정사각형) 램프가 들어있는 직사각형 모양의 탁자를 샀다. 모든 램프는 켜져있거나 꺼져있다. 각 열의 아래에는 스위치가 하나씩 달려있는데, 이 스위치를 누를 때마다 그 열에 있는 램프의 상태가 바뀐다. 켜져있는 램프는 꺼지고, 꺼져있는 램프는 켜진다)
// 만약 어떤 행에 있는 램프가 모두 켜져있을 때, 그 행이 켜져있다고 말한다. 지민이는 스위치를 K번 누를 것이다. 서로다른 스위치 K개를 누르지 않아도 된다. 지민이는 스위치를 K번 눌러서 켜져있는 행을 최대로 하려고 한다.
// 지민이의 탁자에 있는 램프의 상태와 K가 주어졌을 때, 스위치를 K번 누른 후에 켜져있는 행의 최댓값을 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1, input.length);

function solution(arr) {

  let answer = 0;
  let [N, M] = input[0].split(" ").map( (el) => Number(el));
  let K = Number(arr.pop());
  let cnt = 0;
  let zeroCnt = new Array(N).fill(0);
  let prev = "";

  arr.sort();

  for (let i = 0; i < N; ++i) {
    for (let j = 0; j < M; ++j) {
      if (arr[i].charAt(j) === "0") {
        ++zeroCnt[i];
      }
    }

    if (arr[i] !== prev) {
      cnt = 0;
    }

    prev = arr[i];

    if (zeroCnt[i] <= K && zeroCnt[i] % 2 === K % 2) {
      ++cnt;
      answer = Math.max(answer, cnt);
    }
  }
  
  return answer;
}

console.log(solution(newInput));