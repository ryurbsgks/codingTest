// 세계적인 도둑 상덕이는 보석점을 털기로 결심했다.
// 상덕이가 털 보석점에는 보석이 총 N개 있다. 각 보석은 무게 Mi와 가격 Vi를 가지고 있다. 상덕이는 가방을 K개 가지고 있고, 각 가방에 담을 수 있는 최대 무게는 Ci이다. 가방에는 최대 한 개의 보석만 넣을 수 있다.
// 상덕이가 훔칠 수 있는 보석의 최대 가격을 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution(N) {

  let result = 0;
  let gems = input.slice(1, N + 1).map( (el) => el.split(" ").map( (element) => Number(element)));
  let bags = input.slice(N + 1).map( (el) => Number(el));
  let arr = [];

  gems.sort( (a, b) => a[0] - b[0]);
  bags.sort( (a, b) => a - b);

  for (let el of bags) {
    while (gems.length > 0 && gems[0][0] <= el) {
      arr.push(-gems[0][1]);
      gems.shift();
    }

    if (arr.length > 0) {
      result -= Math.min(...arr);
      arr.splice(arr.indexOf(Math.min(...arr)), 1);
    }
  }

  return result;
}

console.log(solution(Number(input[0].split(" ")[0])));