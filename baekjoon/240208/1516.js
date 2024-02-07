// 숌 회사에서 이번에 새로운 전략 시뮬레이션 게임 세준 크래프트를 개발하기로 하였다. 핵심적인 부분은 개발이 끝난 상태고, 종족별 균형과 전체 게임 시간 등을 조절하는 부분만 남아 있었다.
// 게임 플레이에 들어가는 시간은 상황에 따라 다를 수 있기 때문에, 모든 건물을 짓는데 걸리는 최소의 시간을 이용하여 근사하기로 하였다. 물론, 어떤 건물을 짓기 위해서 다른 건물을 먼저 지어야 할 수도 있기 때문에 문제가 단순하지만은 않을 수도 있다. 예를 들면 스타크래프트에서 벙커를 짓기 위해서는 배럭을 먼저 지어야 하기 때문에, 배럭을 먼저 지은 뒤 벙커를 지어야 한다. 여러 개의 건물을 동시에 지을 수 있다.
// 편의상 자원은 무한히 많이 가지고 있고, 건물을 짓는 명령을 내리기까지는 시간이 걸리지 않는다고 가정하자.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution(N) {

  let answer = [];
  let arr = Array.from({ length: N + 1 }, () => []);
  let newArr = Array(N + 1).fill(0);
  let array = Array(N + 1).fill(0);
  let newArray = Array(N + 1).fill(0);
  let queue = [];

  for (let i = 1; i <= N; i++) {

    let tmp = input[i].split(" ").map( (el) => Number(el)).slice(0, -1);

    array[i] = tmp[0];

    for (let j = 1; j < tmp.length; j++) {
      arr[tmp[j]].push(i);
      newArr[i]++;
    }

  }

  for (let i = 1; i <= N; i++) {
    if (newArr[i] === 0) {
      queue.push(i);
      newArray[i] = array[i];
    }
  }

  while (queue.length > 0) {

    let n = queue.shift();

    for (let el of arr[n]) {
      newArr[el]--;
      newArray[el] = Math.max(newArray[el], newArray[n] + array[el]);

      if (newArr[el] === 0) {
        queue.push(el);
      }
    }

  }

  for (let i = 1; i <= N; i++) {
    answer.push(newArray[i]);
  }

  return answer.join("\n");
}

console.log(solution(Number(input[0])));