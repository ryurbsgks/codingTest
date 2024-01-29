// 매일 아침, 세준이는 학교에 가기 위해서 차를 타고 D킬로미터 길이의 고속도로를 지난다. 이 고속도로는 심각하게 커브가 많아서 정말 운전하기도 힘들다. 어느 날, 세준이는 이 고속도로에 지름길이 존재한다는 것을 알게 되었다. 모든 지름길은 일방통행이고, 고속도로를 역주행할 수는 없다.
// 세준이가 운전해야 하는 거리의 최솟값을 출력하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1);

function solution() {

  let [N, D] = input[0].split(" ").map( (el) => Number(el));
  let arr = new Array(D + 1).fill().map( () => []);
  let newArr = new Array(D + 1).fill(1e9);

  const solve = (start) => {

    let que = [];
 
    que.push([0, start]);
    newArr[start] = 0;
  
    while (que.length > 0) {

      let [dist, now] = que.shift();
  
      if (dist > newArr[now]) {
        continue;
      }
  
      for (let [next, cost] of arr[now]) {

        let newCost = dist + cost;
  
        if (newCost < newArr[next]) {
          newArr[next] = newCost;
          que.push([newCost, next]);
        }

      }

    }

  };

  for (let i = 0; i < D; i++) {
    arr[i].push([i + 1, 1]);
  }
  
  for (let i = 0; i < N; i++) {

    let [start, end, length] = newInput[i].split(" ").map( (el) => Number(el));
  
    if (end > D) {
      continue;
    }
  
    arr[start].push([end, length]);

  }

  solve(0);

  return newArr[D];
}

console.log(solution());