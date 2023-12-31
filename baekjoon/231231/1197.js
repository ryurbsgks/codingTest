// 그래프가 주어졌을 때, 그 그래프의 최소 스패닝 트리를 구하는 프로그램을 작성하시오.
// 최소 스패닝 트리는, 주어진 그래프의 모든 정점들을 연결하는 부분 그래프 중에서 그 가중치의 합이 최소인 트리를 말한다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1);

function solution(arr) {

  let answer = 0;
  let [V, E] = input[0].split(" ").map( (el) => Number(el));
  let newArr = [];
  let parent = Array.from({ length: V + 1 }, (el, idx) => idx);

  const getParent = (x) => {
    if (parent[x] === x) {
      return x;
    }

    parent[x] = getParent(parent[x]);

    return parent[x];
  };
  
  const unionParent = (a, b) => {
    a = getParent(a);
    b = getParent(b);
  
    if (a < b) {
      parent[b] = a;
    } else {
      parent[a] = b;
    }
  };
  
  const sameParent = (a, b) => {
    return getParent(a) === getParent(b);
  };

  for (let i = 1; i <= E; i++) {

    let [A, B, C] = arr[i - 1].split(" ").map( (el) => Number(el));

    newArr.push([A, B, C]);

  }

  newArr.sort( (a, b) => a[2] - b[2]);

  for (let [a, b, cost] of newArr) {
    if (!sameParent(a, b)) {
      unionParent(a, b);
      answer += cost;
    }
  }

  return answer;
}

console.log(solution(newInput));