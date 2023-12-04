// 0으로 시작하지 않는 정수 N이 주어진다. 이때, M을 정수 N의 자릿수라고 했을 때, 다음과 같은 연산을 K번 수행한다.
// 1 ≤ i < j ≤ M인 i와 j를 고른다. 그 다음, i번 위치의 숫자와 j번 위치의 숫자를 바꾼다. 이때, 바꾼 수가 0으로 시작하면 안 된다.
// 위의 연산을 K번 했을 때, 나올 수 있는 수의 최댓값을 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split(" ");

function solution(arr) {

  let answer = -1;
  let [N, K] = [arr[0].split(""), Number(arr[1])];
  let visit = new Array(K + 1).fill(null).map( () => new Array(1000000 + 1).fill(false));

  const dfs = (count) => {

    let sum = Number(N.join(""));

    if (visit[count][sum] === true) {
      return;
    }

    if (count === K) {
      if (sum > answer) {
        answer = sum;
      }

      return;
    }

    for (let i = 0; i < N.length - 1; i++) {
      for (let j = i + 1; j < N.length; j++) {
        swap(i, j);

        if (N[0] !== "0") {
          dfs(count + 1);
        }

        swap(i, j);
      }
    }

    visit[count][sum] = true;

  };

  const swap = (i, j) => {
    [N[i], N[j]] = [N[j], N[i]];
  };

  dfs(0);

  return answer;
}

console.log(solution(input));