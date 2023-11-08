// 자연수를 원소로 갖는 공집합이 아닌 두 집합 A와 B가 있다. 이때, 두 집합의 대칭 차집합의 원소의 개수를 출력하는 프로그램을 작성하시오. 두 집합 A와 B가 있을 때, (A-B)와 (B-A)의 합집합을 A와 B의 대칭 차집합이라고 한다.
// 예를 들어, A = { 1, 2, 4 } 이고, B = { 2, 3, 4, 5, 6 } 라고 할 때,  A-B = { 1 } 이고, B-A = { 3, 5, 6 } 이므로, 대칭 차집합의 원소의 개수는 1 + 3 = 4개이다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const arr = input[1].split(" ").map( (el) => Number(el));
const newArr = input[2].split(" ").map( (el) => Number(el));

function solution(arr, newArr) {

  let answer = 0;
  let set = new Set(arr);
  let newSet = new Set(newArr);

  for (let el of set) {
    if (!newSet.has(el)) {
      answer++;
    }
  }

  for (let el of newSet) {
    if (!set.has(el)) {
      answer++;
    }
  }

  return answer;
}

console.log(solution(arr, newArr));