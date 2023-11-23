// P[0], P[1], ...., P[N-1]은 0부터 N-1까지(포함)의 수를 한 번씩 포함하고 있는 수열이다. 수열 P를 길이가 N인 배열 A에 적용하면 길이가 N인 배열 B가 된다. 적용하는 방법은 B[P[i]] = A[i]이다.
// 배열 A가 주어졌을 때, 수열 P를 적용한 결과가 비내림차순이 되는 수열을 찾는 프로그램을 작성하시오. 비내림차순이란, 각각의 원소가 바로 앞에 있는 원소보다 크거나 같을 경우를 말한다. 만약 그러한 수열이 여러개라면 사전순으로 앞서는 것을 출력한다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution(arr) {

  let copyArr = arr.slice().sort( (a, b) => a - b);
  let newArr = Array(Number(input[0])).fill(-1);

  arr.map( (el, idx) => {
    newArr[idx] = copyArr.findIndex( (element, index) => {
      if (element === el && !newArr.includes(index)) {
        return true;
      }
    });
  });

  return newArr.join(" ");
}

console.log(solution(input[1].split(" ").map( (el) => Number(el))));