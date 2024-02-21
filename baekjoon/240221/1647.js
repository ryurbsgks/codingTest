// 동물원에서 막 탈출한 원숭이 한 마리가 세상구경을 하고 있다. 그러다가 평화로운 마을에 가게 되었는데, 그곳에서는 알 수 없는 일이 벌어지고 있었다.
// 마을은 N개의 집과 그 집들을 연결하는 M개의 길로 이루어져 있다. 길은 어느 방향으로든지 다닐 수 있는 편리한 길이다. 그리고 각 길마다 길을 유지하는데 드는 유지비가 있다. 임의의 두 집 사이에 경로가 항상 존재한다.
// 마을의 이장은 마을을 두 개의 분리된 마을로 분할할 계획을 가지고 있다. 마을이 너무 커서 혼자서는 관리할 수 없기 때문이다. 마을을 분할할 때는 각 분리된 마을 안에 집들이 서로 연결되도록 분할해야 한다. 각 분리된 마을 안에 있는 임의의 두 집 사이에 경로가 항상 존재해야 한다는 뜻이다. 마을에는 집이 하나 이상 있어야 한다.
// 그렇게 마을의 이장은 계획을 세우다가 마을 안에 길이 너무 많다는 생각을 하게 되었다. 일단 분리된 두 마을 사이에 있는 길들은 필요가 없으므로 없앨 수 있다. 그리고 각 분리된 마을 안에서도 임의의 두 집 사이에 경로가 항상 존재하게 하면서 길을 더 없앨 수 있다. 마을의 이장은 위 조건을 만족하도록 길들을 모두 없애고 나머지 길의 유지비의 합을 최소로 하고 싶다. 이것을 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution() {

  let [N, M] = input[0].split(" ").map( (el) => Number(el));
  let arr = new Array(N + 1).fill(0).map( (el, idx) => idx);
  let newArr = [];
  let result = 0;
  let max = 0;

  const findArr = (x) => {
    if (arr[x] !== x) {
      arr[x] = findArr(arr[x]);
    }

    return arr[x];
  };

  const union = (a, b) => {
    a = findArr(a);
    b = findArr(b);

    if (a < b) {
      arr[b] = a;
    } else {
      arr[a] = b;
    }
  };

  for (let i = 1; i <= M; i++) {
    newArr.push(input[i].split(" ").map( (el) => Number(el)));
  }

  newArr.sort( (a, b) => a[2] - b[2]);

  for (let el of newArr) {

    let [start, end, cost] = el;

    if (findArr(start) !== findArr(end)) {
      union(start, end);
      result += cost;
      max = Math.max(cost, max);
    }

  } 

  return result - max;
}

console.log(solution());