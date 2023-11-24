// 어떤 정수 X가 1보다 큰 제곱수로 나누어 떨어지지 않을 때, 그 수를 제곱ㄴㄴ수라고 한다. 제곱수는 정수의 제곱이다. min과 max가 주어지면, min보다 크거나 같고, max보다 작거나 같은 제곱ㄴㄴ수가 몇 개 있는지 출력한다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split(" ");

function solution(arr) {

  let [min, max] = arr;
  let answer = max - min + 1;
  let newArr = new Array(max - min + 1).fill(false);
  let maxSqrt = Math.floor(Math.sqrt(max));
  let sqrt = Math.ceil(Math.sqrt(maxSqrt));
  let array = new Array(maxSqrt + 1).fill(true);
  let newArray = [];

  array[0] = false;
  array[1] = false;

  for (let i = 2; i <= sqrt; i++) {
    if (!array[i]) {
      continue;
    }

    let check = true;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        check = false;

        break;
      }
    }

    if (check) {
      for (let k = i + i; k <= maxSqrt; k += i) {
        array[k] = false;
      }
    }

  }

  array.map( (el, idx) => {
    if (el) {
      newArray.push(idx * idx);
    }
  });
  
  newArray.map( (el) => {
  
    let n = min;

    if (n % el !== 0) {
      n = (Math.floor(min / el) + 1) * el;
    }

    for (let i = n; i <= max; i += el) {
      if (!newArr[i - min]) {
        newArr[i - min] = true;
        answer--;
      }
    }

  });

  return answer;
}

console.log(solution(input.map( (el) => Number(el))));