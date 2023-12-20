// 수빈이는 TV를 보고 있다. 수빈이는 채널을 돌리려고 했지만, 버튼을 너무 세게 누르는 바람에, 일부 숫자 버튼이 고장났다.
// 리모컨에는 버튼이 0부터 9까지 숫자, +와 -가 있다. +를 누르면 현재 보고있는 채널에서 +1된 채널로 이동하고, -를 누르면 -1된 채널로 이동한다. 채널 0에서 -를 누른 경우에는 채널이 변하지 않고, 채널은 무한대 만큼 있다.
// 수빈이가 지금 이동하려고 하는 채널은 N이다. 어떤 버튼이 고장났는지 주어졌을 때, 채널 N으로 이동하기 위해서 버튼을 최소 몇 번 눌러야하는지 구하는 프로그램을 작성하시오.
// 수빈이가 지금 보고 있는 채널은 100번이다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(2);

function solution(arr) {

  let [N, M] = [Number(input[0]), Number(input[1])];
  let newArray = new Array(10).fill(false);
  let count = Math.abs(N - 100);

  const dfs = (idx, click) => {
    for (let i = 0; i < 10; i++) {
      if (!newArray[i]) {

        let newBtn = click * 10 + i;
        let cnt = Math.abs(N - newBtn) + String(newBtn).length;

        count = Math.min(count, cnt);
  
        if (idx < 6) {
          dfs(idx + 1, newBtn);
        }

      }
    }
  };

  if (M > 0) {
    
    let tmp = arr.toString().split(" ");

    for (let i = 0; i < M; i++) {

      let cur = Number(tmp[i]);

      newArray[cur] = true;

    }

  }
  
  if (N === 100) {
    return 0;
  }

  dfs(0, 0);

  return count;
}

console.log(solution(newInput));