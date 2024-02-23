// 민식이는 “오민식”이라는 팀이름으로 수없이 많은 로봇대회를 우승했다. 따라서 민식이의 집에는 트로피가 많다. 민식이는 트로피를 어떤 선반 위에 올려놨다. 이 선반은 민식이의 방문을 열고 들어가자마자 선반의 왼쪽이 보인다. 다른말로 하자면, 뒤의 트로피가 앞의 트로피에 가려져 있다는 말이다.
// 안타깝게도, 높이가 큰 트로피가 높이가 작은 트로피의 왼쪽에 있다면, 높이가 작은 트로피는 큰 트로피에 가려서 보이지 않게 된다. 트로피는 자기의 앞에 (보는 사람의 관점에서) 자기보다 높이가 작은 트로피가 있을 때만 보이게 된다. 민식이는 선반을 180도 회전시켜서 트로피가 보이는 개수를 변하게 할 수도 있다.
// 선반위에 올려져 있는 트로피의 높이가 주어졌을 때, 왼쪽에서 봤을 때 보이는 개수와, 오른쪽에서 봤을 때 보이는 개수를 출력하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution(N) {

  let arr = input.slice(1).map( (el) => Number(el));
  let leftCnt = 0;
  let rightCnt = 0;
  let leftMax = 0;
  let rightMax = 0;

  for (let i = 0; i < N; i++) {

    let n = arr[i];

    if (n > leftMax) {
      leftMax = n;
      leftCnt++;
    }

  }

  for (let i = N - 1; i >= 0; i--) {

    let n = arr[i];

    if (n > rightMax) {
      rightMax = n;
      rightCnt++;
    }

  }

  return `${leftCnt}\n${rightCnt}`;
}

console.log(solution(Number(input[0])));
