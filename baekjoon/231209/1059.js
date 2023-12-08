// 정수 집합 S가 주어졌을때, 다음 조건을 만족하는 구간 [A, B]를 좋은 구간이라고 한다.
// A와 B는 양의 정수이고, A < B를 만족한다.
// A ≤ x ≤ B를 만족하는 모든 정수 x가 집합 S에 속하지 않는다.
// 집합 S와 n이 주어졌을 때, n을 포함하는 좋은 구간의 개수를 구해보자.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1, input.length);

function solution(arr) {

  let answer = 0;
  let newArr = arr[0].split(" ").map( (el) => Number(el));
  let n = Number(arr[1]);
  let array = newArr.slice();
  
  array.push(0);
  array.sort( (a, b) => a - b);

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] === n || array[i + 1] === n) {
      answer = 0;

      break;
    } else if (array[i] < n && n < array[i + 1]) {
      answer = (n - array[i]) * (array[i + 1] - n) - 1;
      
      break;
    }
  }

  return answer;
}

console.log(solution(newInput));