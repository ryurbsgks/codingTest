// 크기가 N인 수열 A가 주어졌을 때, 세준이는 인접한 두 원소의 차이를 이용해서 크기가 N-1인 수열 B를 만들 수 있다.
// 예를 들어, A = {5, 6, 3, 9, -1} 이었을 때, B = {6-5, 3-6, 9-3, -1-9} = {1, -3, 6, -10}이 된다. 즉, B[i] = A[i+1]-A[i]가 된다.
// 수열 A가 주어졌을 때, 세준이가 위의 방법을 K번 했을 때 나오는 수열을 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution() {

  let [N, K] = input[0].split(" ").map( (el) => Number(el));
  let arr = input[1].split(",").map( (el) => Number(el));
  let newArr = [];

  for (let i = 0; i < K; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      newArr.push(arr[j + 1] - arr[j]);
    }

    arr.splice(0, arr.length, ...newArr);
    newArr = [];
  }

  return arr.join(",");
}

console.log(solution());