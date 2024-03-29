// 트리에서 리프 노드란, 자식의 개수가 0인 노드를 말한다.
// 트리가 주어졌을 때, 노드 하나를 지울 것이다. 그 때, 남은 트리에서 리프 노드의 개수를 구하는 프로그램을 작성하시오. 노드를 지우면 그 노드와 노드의 모든 자손이 트리에서 제거된다.
// 예를 들어, 다음과 같은 트리가 있다고 하자.
// 현재 리프 노드의 개수는 3개이다. (초록색 색칠된 노드) 이때, 1번을 지우면, 다음과 같이 변한다. 검정색으로 색칠된 노드가 트리에서 제거된 노드이다.
// 이제 리프 노드의 개수는 1개이다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution(arr, n) {

  let answer = 0;

  const dfs = (num, arr) => {
    arr[num] = -2;

    for (let i = 0; i < arr.length; i++) {
      if (num === arr[i]) {
        dfs(i, arr);
      }
    }
  };

  dfs(n, arr);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -2 && !arr.includes(i)) {
      answer++;
    }
  }

  return answer;
}

console.log(solution(input[1].split(" ").map( (el) => Number(el)), Number(input[2])));