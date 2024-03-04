// 명우기업은 2008년부터 택배 사업을 새로이 시작하기로 하였다. 우선 택배 화물을 모아서 처리하는 집하장을 몇 개 마련했지만, 택배 화물이 각 집하장들 사이를 오갈 때 어떤 경로를 거쳐야 하는지 결정하지 못했다. 어떤 경로를 거칠지 정해서, 이를 경로표로 정리하는 것이 여러분이 할 일이다.
// 예시된 그래프에서 굵게 표시된 1, 2, 3, 4, 5, 6은 집하장을 나타낸다. 정점간의 간선은 두 집하장간에 화물 이동이 가능함을 나타내며, 가중치는 이동에 걸리는 시간이다. 이로부터 얻어내야 하는 경로표는 다음과 같다.
// 경로표는 한 집하장에서 다른 집하장으로 최단경로로 화물을 이동시키기 위해 가장 먼저 거쳐야 하는 집하장을 나타낸 것이다. 예를 들어 4행 5열의 6은 4번 집하장에서 5번 집하장으로 최단 경로를 통해 가기 위해서는 제일 먼저 6번 집하장으로 이동해야 한다는 의미이다.
// 이와 같은 경로표를 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1);

function solution() {

  let answer = "";
  let [n, m] = input[0].split(" ").map( (el) => Number(el));
  let arr = new Array(n + 1).fill(null).map( () => new Array(n + 1).fill(1e8));
  let newArr = new Array(n + 1).fill(null).map( () => new Array(n + 1).fill(0));

  for (let i = 0; i < m; i++) {

    let [a, b, c] = newInput[i].split(" ").map( (el) => Number(el));

    arr[a][b] = c;
    arr[b][a] = c;
    newArr[a][b] = b;
    newArr[b][a] = a;

  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      for (let k = 1; k <= n; k++) {
        if (arr[j][k] > arr[j][i] + arr[i][k]) {
          arr[j][k] = arr[j][i] + arr[i][k];
          newArr[j][k] = newArr[j][i];
        }
      }
    }
  }

  for (let i = 1; i <= n; i++) {
    newArr[i][i] = "-";
  }

  for (let el of newArr.slice(1)) {
    answer += el.slice(1).join(" ") + "\n";
  }
  
  return answer.trim();
}

console.log(solution());