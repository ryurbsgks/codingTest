// 세계적인 호텔인 형택 호텔의 사장인 김형택은 이번에 수입을 조금 늘리기 위해서 홍보를 하려고 한다.
// 형택이가 홍보를 할 수 있는 도시가 주어지고, 각 도시별로 홍보하는데 드는 비용과, 그 때 몇 명의 호텔 고객이 늘어나는지에 대한 정보가 있다.
// 예를 들어, “어떤 도시에서 9원을 들여서 홍보하면 3명의 고객이 늘어난다.”와 같은 정보이다. 이때, 이러한 정보에 나타난 돈에 정수배 만큼을 투자할 수 있다. 즉, 9원을 들여서 3명의 고객, 18원을 들여서 6명의 고객, 27원을 들여서 9명의 고객을 늘어나게 할 수 있지만, 3원을 들여서 홍보해서 1명의 고객, 12원을 들여서 4명의 고객을 늘어나게 할 수는 없다.
// 각 도시에는 무한 명의 잠재적인 고객이 있다. 이때, 호텔의 고객을 적어도 C명 늘이기 위해 형택이가 투자해야 하는 돈의 최솟값을 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1);

function solution(arr) {

  let [C, N] = input[0].split(" ").map( (el) => Number(el));
  let newArr = [];
  let array = Array(C + 100).fill(1e7);

  array[0] = 0;

  for (let i = 0; i < N; i++) {

    let cost = input[i].split(" ").map( (el) => Number(el));

    newArr.push(cost);

  }

  for (let [cost, people] of newArr) {
    for (let i = people; i < C + 100; i++) {
      array[i] = Math.min(array[i - people] + cost, array[i]);
    }
  }

  return Math.min(...array.slice(C));
}

console.log(solution(newInput));