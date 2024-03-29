// 상욱 조교는 동호에게 N개의 문제를 주고서, 각각의 문제를 풀었을 때 컵라면을 몇 개 줄 것인지 제시 하였다. 하지만 동호의 찌를듯한 자신감에 소심한 상욱 조교는 각각의 문제에 대해 데드라인을 정하였다.
// 문제 번호	1	2	3	4	5	6	7
// 데드라인	  1	1	3	3	2	2	6
// 컵라면 수	6	7	2	1	4	5	1
// 위와 같은 상황에서 동호가 2, 6, 3, 1, 7, 5, 4 순으로 숙제를 한다면 2, 6, 3, 7번 문제를 시간 내에 풀어 총 15개의 컵라면을 받을 수 있다.
// 문제는 동호가 받을 수 있는 최대 컵라면 수를 구하는 것이다. 위의 예에서는 15가 최대이다.
// 문제를 푸는데는 단위 시간 1이 걸리며, 각 문제의 데드라인은 N이하의 자연수이다. 또, 각 문제를 풀 때 받을 수 있는 컵라면 수와 최대로 받을 수 있는 컵라면 수는 모두 231보다 작은 자연수이다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution(N) {

  let arr = Array.from({ length: 200001 }, () => []);
  let newArr = [];
  let n = 0;
  
  for (let i = 1; i <= N; i++) {

    let [deadLine, num] = input[i].split(" ").map( (el) => Number(el));

    arr[deadLine].push(num);

  }

  for (let i = N; i >= 1; i--) {
    for (let el of arr[i]) {
      newArr.push(el);
    }

    newArr.sort( (a, b) => b - a);

    if (newArr.length > 0) {
      n += newArr[0];
      newArr.shift();
    }
  }

  return n;
}

console.log(solution(Number(input[0])));