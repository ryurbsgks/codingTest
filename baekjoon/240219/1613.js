// 역사, 그 중에서도 한국사에 해박한 세준이는 많은 역사적 사건들의 전후 관계를 잘 알고 있다. 즉, 임진왜란이 병자호란보다 먼저 일어났으며, 무오사화가 기묘사화보다 먼저 일어났다는 등의 지식을 알고 있는 것이다.
// 세준이가 알고 있는 일부 사건들의 전후 관계들이 주어질 때, 주어진 사건들의 전후 관계도 알 수 있을까? 이를 해결하는 프로그램을 작성해 보도록 하자.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution() {

  let answer = "";
  let arr = [];
  let newArr = [];
  let INF = 100000;
  let [n, k] = input[0].split(" ").map( (el) => Number(el));

  for (let i = 0; i <= n; i++) {
    arr.push(Array(n + 1).fill(0));
    newArr.push(Array(n + 1).fill(INF));
  }

  for (let i = 1; i <= k; i++) {

    let [a, b] = input[i].split(" ").map( (el) => Number(el));

    arr[a][b] = 1;

  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i === j) {
        newArr[i][j] = 0;
      } else if (arr[i][j] !== 0) {
        newArr[i][j] = arr[i][j];
      }
    }
  }
  
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      for (let k = 1; k <= n; k++) {
        newArr[j][k] = Math.min(newArr[j][k], newArr[j][i] + newArr[i][k]);
      }
    }
  }

  for (let i = k + 2; i < input.length; i++) {

    let [a, b] = input[i].split(" ").map( (el) => Number(el));
    
    if (newArr[a][b] === INF) {
      if (newArr[b][a] === INF) {
        answer += "0\n";
      } else { 
        answer += "1\n"; 
      }
    } else { 
      answer += "-1\n"; 
    }

  }

  return answer.slice(0, answer.length - 1);
}

console.log(solution());