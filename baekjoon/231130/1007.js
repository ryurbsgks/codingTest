// 평면 상에 N개의 점이 찍혀있고, 그 점을 집합 P라고 하자. 집합 P의 벡터 매칭은 벡터의 집합인데, 모든 벡터는 집합 P의 한 점에서 시작해서, 또 다른 점에서 끝나는 벡터의 집합이다. 또, P에 속하는 모든 점은 한 번씩 쓰여야 한다.
// 벡터 매칭에 있는 벡터의 개수는 P에 있는 점의 절반이다.
// 평면 상의 점이 주어졌을 때, 집합 P의 벡터 매칭에 있는 벡터의 합의 길이의 최솟값을 출력하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution(arr) {

  let answer = [];
  let T = Number(arr[0]);
  let idx = 1;

  const getCombinations = (arr, k) => {

    let result = [];
  
    const combine = (arr, start, k, current) => {
      if (k === 0) {
        result.push([...current]);

        return;
      }
  
      for (let i = start; i < arr.length; i++) {
        current.push(arr[i]);
        combine(arr, i + 1, k - 1, current);
        current.pop();
      }
    };
  
    combine(arr, 0, k, []);

    return result;
  };

  for (let i = 0; i < T; i++) {

    let N = Number(arr[idx++]);
    let points = [];
    let total_x = 0
    let total_y = 0;

    const askCoordinates = (n) => {
      if (n === N) {

        let comb = getCombinations(points, N / 2);
        let ans = 3e5;

        for (let c of comb.slice(0, comb.length / 2)) {

          let x1 = 0
          let y1 = 0;

          for (let [x, y] of c) {
            x1 += x;
            y1 += y;
          }

          let x2 = total_x - x1;
          let y2 = total_y - y1;
          let habVector = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

          ans = Math.min(ans, habVector);

        }

        answer.push(ans);

        return;
      }

      const [x, y] = arr[idx++].split(" ").map(Number);

      total_x += x;
      total_y += y;
      points.push([x, y]);

      askCoordinates(n + 1);

    };

    askCoordinates(0);

  }

  return answer.join("\n");
}

console.log(solution(input));