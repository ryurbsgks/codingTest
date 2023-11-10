// 직선으로 되어있는 도로의 한 편에 가로수가 임의의 간격으로 심어져있다. KOI 시에서는 가로수들이 모두 같은 간격이 되도록 가로수를 추가로 심는 사업을 추진하고 있다. KOI 시에서는 예산문제로 가능한 한 가장 적은 수의 나무를 심고 싶다.
// 편의상 가로수의 위치는 기준점으로 부터 떨어져 있는 거리로 표현되며, 가로수의 위치는 모두 양의 정수이다.
// 예를 들어, 가로수가 (1, 3, 7, 13)의 위치에 있다면 (5, 9, 11)의 위치에 가로수를 더 심으면 모든 가로수들의 간격이 같게 된다. 또한, 가로수가 (2, 6, 12, 18)에 있다면 (4, 8, 10, 14, 16)에 가로수를 더 심어야 한다.
// 심어져 있는 가로수의 위치가 주어질 때, 모든 가로수가 같은 간격이 되도록 새로 심어야 하는 가로수의 최소수를 구하는 프로그램을 작성하라. 단, 추가되는 나무는 기존의 나무들 사이에만 심을 수 있다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1, input.length).map( (el) => Number(el));

function solution(arr) {

  let answer = [];
  let newArr = [];
  let GCD = 0;

  const euclidean = (a, b) => {

    let GCD = (a, b) => a % b === 0 ? b : GCD(b, a % b);

    return GCD(a, b);
  };

  for (let i = 0; i < arr.length - 1; i++) {
    newArr.push(arr[i + 1] - arr[i]);
  }

  GCD = euclidean(newArr[0], newArr[1]);

  for (let i = 2; i < newArr.length; i++) {
    GCD = euclidean(GCD, newArr[i]);
  }

  answer = newArr.map( (el) => (el / GCD) - 1);

  return answer.reduce( (acc, cur) => acc + cur, 0);
}

console.log(solution(newInput));