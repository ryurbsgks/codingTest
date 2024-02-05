// 방향성이 없는 그래프가 주어진다. 세준이는 1번 정점에서 N번 정점으로 최단 거리로 이동하려고 한다. 또한 세준이는 두 가지 조건을 만족하면서 이동하는 특정한 최단 경로를 구하고 싶은데, 그것은 바로 임의로 주어진 두 정점은 반드시 통과해야 한다는 것이다.
// 세준이는 한번 이동했던 정점은 물론, 한번 이동했던 간선도 다시 이동할 수 있다. 하지만 반드시 최단 경로로 이동해야 한다는 사실에 주의하라. 1번 정점에서 N번 정점으로 이동할 때, 주어진 두 정점을 반드시 거치면서 최단 경로로 이동하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1);

function solution() {

  let answer = 0;
  let [N, E] = input[0].split(" ").map( (el) => Number(el));
  let [v1, v2] = newInput[newInput.length - 1].split(" ").map( (el) => Number(el));
  let arr = Array.from({ length: N + 1 }, () => []);
  
  const solve = (start, end) => {

    let newArr = new Array(N + 1).fill(1e9);
    let q = [];

    q.push([0, start]);
    newArr[start] = 0;

    while (q.length > 0) {

      let [length, now] = q.shift();

      if (newArr[now] < length) {
        continue;
      }

      for (let [e, l] of arr[now]) {

        let nowLength = l + length;

        if (nowLength < newArr[e]) {
          newArr[e] = nowLength;
          q.push([nowLength, e]);
        }

      }

    }

    return newArr[end];
  };

  for (let i = 0; i < E; i++) {

    let [a, b, c] = newInput[i].split(" ").map( (el) => Number(el));

    arr[a].push([b, c]);
    arr[b].push([a, c]);

  }

  let newArr1 = solve(1, v1) + solve(v1, v2) + solve(v2, N);
  let newArr2 = solve(1, v2) + solve(v2, v1) + solve(v1, N);

  if (newArr1 >= 1e9 && newArr2 >= 1e9) {
    answer = -1;
  } else {
    answer = Math.min(newArr1, newArr2);
  }

  return answer;
}

console.log(solution());