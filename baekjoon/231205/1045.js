// 0부터 N-1까지의 번호가 매겨져 있는 N개의 도시와 두 도시를 연결하는 도로가 있다. 도로에는 우선순위가 있는데, A와 B가 (A < B) 도로 x로 연결되어 있고, C와 D가 (C < D) 도로 y로 연결되어 있을 때, 튜플 (A, B) < (C, D)이면 x > y, 즉 x의 우선순위가 더 높다. 여기서 ai ≠ bi인 가장 작은 양의 정수 i에 대해 ai < bi이면 (a1, ..., ak) < (b1, ..., bk)로 정의한다.
// 도로의 집합은 하나 이상의 도로가 우선순위에 대한 내림차순으로 정렬되어 있는 것이다. 집합 사이에도 우선순위가 있는데, 두 집합을 튜플로 나타냈을 때의 우선순위를 따른다. 한 집합에 있는 도로만으로 임의의 도시에서 임의의 도시로 이동할 수 있을 때, 그 집합은 연결되어 있다고 한다.
// 김지민이 할 일은 M개의 도로를 가진 도로의 집합 중 연결되어 있으면서 우선 순위가 가장 높은 것을 찾는 것이다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1, input.length);
 
function solution(arr) {

  let [N, M] = [Number(input[0].split(" ")[0]), Number(input[0].split(" ")[1])];
  let answer = Array(N).fill(0);
  let newArr = [];
  let array = Array.from({ length: N }, (el, idx) => idx);

  const find = (node) => {
    if (array[node] === node) {
      return node;
    } else {
      array[node] = find(array[node]);

      return array[node];
    }
  };
  
  const union = (node1, node2) => {

    let root1 = find(node1);
    let root2 = find(node2);
  
    if (root1 === root2) {
      return false;
    } else {
      array[root2] = root1;

      return true;
    }
  };

  for (let i = 1; i <= N; i++) {

    let row = arr[i - 1].trim().split("");

    for (let j = i + 1; j <= N; j++) {
      if (row[j - 1] === "Y") {
        newArr.push([i - 1, j - 1]);
      }
    }

  }

  if (newArr.length < M) {
    answer = [-1];
  } else {

    let edgeNum = 0;
    let newArray = [];

    while (newArr.length > 0) {

      let [node1, node2] = newArr.shift();

      if (union(node1, node2)) {
        answer[node1]++;
        answer[node2]++;
        edgeNum++;
      } else {
        newArray.push([node1, node2]);
      }

    }

    if (edgeNum !== N - 1) {
      answer = [-1];
    } else {
      for (let i = 0; i < M - edgeNum; i++) {

        let [node1, node2] = newArray.shift();

        answer[node1]++;
        answer[node2]++;

      }
    }
  }

  return answer.join(" ");
}

console.log(solution(newInput));