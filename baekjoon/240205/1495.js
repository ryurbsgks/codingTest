// Day Of Mourning의 기타리스트 강토는 다가오는 공연에서 연주할 N개의 곡을 연주하고 있다. 지금까지 공연과는 다른 공연을 보여주기 위해서 이번 공연에서는 매번 곡이 시작하기 전에 볼륨을 바꾸고 연주하려고 한다.
// 먼저, 공연이 시작하기 전에 각각의 곡이 시작하기 전에 바꿀 수 있는 볼륨의 리스트를 만들었다. 이 리스트를 V라고 했을 때, V[i]는 i번째 곡을 연주하기 전에 바꿀 수 있는 볼륨을 의미한다. 항상 리스트에 적힌 차이로만 볼륨을 바꿀 수 있다. 즉, 현재 볼륨이 P이고 지금 i번째 곡을 연주하기 전이라면, i번 곡은 P+V[i]나 P-V[i] 로 연주해야 한다. 하지만, 0보다 작은 값으로 볼륨을 바꾸거나, M보다 큰 값으로 볼륨을 바꿀 수 없다.
// 곡의 개수 N과 시작 볼륨 S, 그리고 M이 주어졌을 때, 마지막 곡을 연주할 수 있는 볼륨 중 최댓값을 구하는 프로그램을 작성하시오. 모든 곡은 리스트에 적힌 순서대로 연주해야 한다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution() {

  let answer = -1;
  let arr = input[0].split(" ").map( (el) => +el);
  let newArr = input[1].split(" ").map( (el) => +el);
  let array = Array.from(Array(51), () => new Array(1001));

  if (arr[1] + newArr[0] <= arr[2]) {
    array[1][arr[1] + newArr[0]] = 1;
  }

  if (arr[1] - newArr[0] >= 0) {
    array[1][arr[1] - newArr[0]] = 1;
  }

  for (let i = 2; i <= arr[0]; i++) {
    for (let j = 0; j <= arr[2]; j++) {
      if (array[i - 1][j] === 1) {
        if (j + newArr[i - 1] <= arr[2]) {
          array[i][j + newArr[i - 1]] = 1;
        }

        if (j - newArr[i - 1] >= 0) {
          array[i][j - newArr[i - 1]] = 1;
        }
      }
    }
  }

  for (let i = arr[2]; i >= 0; i--) {
    if (array[arr[0]][i] === 1) {
      answer = i;

      break;
    }
  }

  return answer;
}

console.log(solution());