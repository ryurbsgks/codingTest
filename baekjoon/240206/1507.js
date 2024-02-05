// 강호는 N개의 도시로 이루어진 나라에 살고 있다. 각 도시는 M개의 도로로 연결되어 있으며, 각 도로를 지날 때 필요한 시간이 존재한다. 도로는 잘 연결되어 있기 때문에, 도시 A에서 B로 이동할 수 없는 경우는 존재하지 않는다.
// 도시 A에서 도시 B로 바로 갈 수 있는 도로가 있거나, 다른 도시를 거쳐서 갈 수 있을 때, 도시 A에서 B를 갈 수 있다고 한다.
// 강호는 모든 쌍의 도시에 대해서 최소 이동 시간을 구해놓았다. 민호는 이 표를 보고 원래 도로가 몇 개 있는지를 구해보려고 한다.
// 예를 들어, 예제의 경우에 모든 도시 사이에 강호가 구한 값을 가지는 도로가 존재한다고 해도 된다. 하지만, 이 도로의 개수는 최솟값이 아니다. 예를 들어, 도시 1-2, 2-3, 1-4, 3-4, 4-5, 3-5를 연결하는 도로만 있다고 가정해도, 강호가 구한 모든 쌍의 최솟값을 구할 수 있다. 이 경우 도로의 개수는 6개이고, 모든 도로의 시간의 합은 55이다.
// 모든 쌍의 도시 사이의 최소 이동 시간이 주어졌을 때, 이 나라에 존재할 수 있는 도로의 개수의 최솟값일 때, 모든 도로의 시간의 합을 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1);

function solution() {

  let answer = 0;
  let N = Number(input[0]);
  let arr = [];
  let newArr = [];
  
  for (let i = 0; i <= N; i++) {
    arr[i] = new Array(N + 1).fill(0);
    newArr[i] = new Array(N + 1).fill(0);
  }
  
  for (let i = 1; i <= N; i++) {

    let row = newInput[i - 1].split(" ").map( (el) => Number(el));

    for (let j = 1; j <= N; j++) {
      arr[i][j] = row[j - 1];
      newArr[i][j] = arr[i][j];
    }

  }
  
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      for (let k = 1; k <= N; k++) {
        if (i === j || i === k) {
          continue;
        }
        
        if (arr[j][k] > arr[j][i] + arr[i][k]) {
          answer = -1;

          break;
        } else if (arr[j][k] === arr[j][i] + arr[i][k]) {
          newArr[j][k] = 0;
        }
      }
    }
  }

  if (answer !== -1) {

    let sum = 0;

    for (let i = 1; i <= N; i++) {
      for (let j = 1; j <= N; j++) {
        sum += newArr[i][j];
      }
    }

    answer = Math.floor(sum / 2);

  }

  return answer;
}

console.log(solution());