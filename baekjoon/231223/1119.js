// N개의 도시가 있고, 몇몇 도시들이 양방향 도로로 연결되어 있는 나라가 있다. 은진이는 이나라의 도로 몇 개를 수정해서 모든 도시가 서로 연결되어 있게 하려고 한다. 이때, 도로를 수정하는 회수를 최소로 하려고 한다. 도로를 수정하는 방법은 다음과 같다.
// A와 B가 연결되어 있고, C와 D가 연결되어 있으면서, A와 C, A와 D, B와 C, B와 D가 연결되어 있지 않은 4개의 도시 A, B, C, D를 선택한다.
// A와 B를 연결하는 도로와 C와 D를 연결하는 도로를 없앤다.
// A와 C, B와 D를 연결하거나 A와 D, B와 C를 연결한다.
// 다음 그림을 살펴보자.
// 위와 같은 도로가 있을 때 이것을 다음에 보이는 둘 중에 하나로 바꿀 수 있다.
// N이 주어지고, 각 도로의 정보가 주어진다. 이때, 몇 개의 도로를 수정해야 하는지 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1);

function solution(arr) {

  let answer = 0;
  let N = Number(input[0]);
  let newArr = Array.from({ length: 50 }, () => []);
  let array = new Array(50).fill(false);

  const dfs = (now) => {

    let ret = 1;

    for (let el of newArr[now]) {
      if (array[el]) {
        continue;
      }

      array[el] = true;
      ret += dfs(el);
    }

    return ret;
  };

  if (N === 1) {
    answer = 0;
  } else {

    let cnt = 0;
    let sum = 0;
    let s = [];
  
    for (let i = 0; i < N; i++) {

      let line = arr[i];

      for (let j = 0; j < line.length; j++) {
        if (line[j] === "Y") {
          newArr[i].push(j);
          cnt++;
        }
      }

    }
  
    array.fill(false);
    cnt /= 2;

    for (let i = 0; i < N; i++) {
      if (!array[i]) {
        array[i] = true;
        s.push(dfs(i));
      }
    }
  
    for (let el of s) {
      sum += el - 1;

      if (el === 1) {
        answer = -1;
        process.exit(0);
      }
    }
  
    if (s.length - 1 <= cnt - sum) {
      answer = (s.length - 1).toString();
    } else {
      answer = -1;
    }
  }

  return answer;
}

console.log(solution(newInput));