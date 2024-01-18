// 올바른 배열이란 어떤 배열 속에 있는 원소 중 5개가 연속적인 것을 말한다. (연속적인 것이란 5개의 수를 정렬했을 때, 인접한 수의 차이가 1인 것을 말한다.)
// 예를 들어 배열 {6, 1, 9, 5, 7, 15, 8}은 올바른 배열이다. 왜냐하면 이 배열 속의 원소인 5, 6, 7, 8, 9가 연속이기 때문이다.
// 배열이 주어지면, 이 배열이 올바른 배열이 되게 하기 위해서 추가되어야 할 원소의 개수를 출력하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1);

function solution(N) {

  let arr = [];
  let max = 0;

  for (let i = 0; i < N; i++) {
    arr.push(Number(newInput[i]));
  }
  
  arr.sort();

  for (let i = 0; i < N; i++) {

    let cnt = 0;
    let newArr = [];

    for (let j = arr[i] + 1; j < arr[i] + 5; j++) {
      newArr.push(j);
    }

    for (let el of arr) {
      if (newArr.includes(el)) {
        cnt++;
      }
    }

    if (cnt > max) {
      max = cnt;
    }

  }

  return 4 - max;
}

console.log(solution(Number(input[0])));