// 세준이가 살고 있는 도시는 신기하게 생겼다. 이 도시는 격자형태로 생겼고, 직사각형이다. 도시의 가로 크기는 N이고, 세로 크기는 M이다. 또, 세준이의 집은 (0, 0)에 있고, 세준이의 학교는 (N, M)에 있다.
// 따라서, 아래 그림과 같이 생겼다.
// 세준이는 집에서 학교로 가는 길의 경우의 수가 총 몇 개가 있는지 궁금해지기 시작했다.
// 세준이는 항상 최단거리로만 가기 때문에, 항상 도로를 정확하게 N + M개 거친다. 하지만, 최근 들어 이 도시의 도로가 부실공사 의혹으로 공사중인 곳이 있다. 도로가 공사 중일 때는, 이 도로를 지날 수 없다.
// (0, 0)에서 (N, M)까지 가는 서로 다른 경로의 경우의 수를 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution() {

  let [N, M] = input[0].split(" ").map( (el) => Number(el));
  let K = Number(input[1]);
  let arr = Array.from({ length: N + 2 }, () => Array(M + 2).fill(0));
  let set = new Set();
  let newSet = new Set();

  arr[1][1] = 1;

  for (let i = 2; i < K + 2; i++) {

    let [a, b, c, d] = input[i].split(" ").map( (el) => Number(el));
    let [start, finish] = [[a + 1, b + 1], [c + 1, d + 1]].sort();

    set.add(finish.join());
    newSet.add(start.concat(finish).join());

  }

  for (let i = 1; i < N + 2; i++) {
    for (let j = 1; j < M + 2; j++) {

      let cur = [i, j].join();

      if (i === 1 && j === 1) {
        continue;
      }

      if (set.has(cur)) {

        let up = [i - 1, j].join();
        let left = [i, j - 1].join();

        if (!newSet.has([up, cur].join())) {
          arr[i][j] = arr[i - 1][j];
        } else if (!newSet.has([left, cur].join())) {
          arr[i][j] = arr[i][j - 1];
        }
        
      } else {
        arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
      }
      
    }
  }

  return arr[N + 1][M + 1];
}

console.log(solution());