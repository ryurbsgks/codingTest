// 하나 이상의 연속된 소수의 합으로 나타낼 수 있는 자연수들이 있다. 몇 가지 자연수의 예를 들어 보면 다음과 같다.
// 3 : 3 (한 가지)
// 41 : 2+3+5+7+11+13 = 11+13+17 = 41 (세 가지)
// 53 : 5+7+11+13+17 = 53 (두 가지)
// 하지만 연속된 소수의 합으로 나타낼 수 없는 자연수들도 있는데, 20이 그 예이다. 7+13을 계산하면 20이 되기는 하나 7과 13이 연속이 아니기에 적합한 표현이 아니다. 또한 한 소수는 반드시 한 번만 덧셈에 사용될 수 있기 때문에, 3+5+5+7과 같은 표현도 적합하지 않다.
// 자연수가 주어졌을 때, 이 자연수를 연속된 소수의 합으로 나타낼 수 있는 경우의 수를 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim();

function solution(N) {
  
  let answer = 0;
  let arr = new Array(N + 1).fill(1);
  let newArr = [];

  arr[0] = 0;
  arr[1] = 0;

  if (N === 1) {
    return 0;
  }

  for (let i = 2; i <= Math.sqrt(N); i++) {
    if (arr[i]) {
      for (let j = 2; j <= N / i; j++) {
        arr[i * j] = 0;
      }
    }
  }

  for (let i = 2; i <= N; i++) {
    if (arr[i]) {
      newArr.push(i);
    }
  }

  let i = newArr.length - 1;
  let j = newArr.length - 1;
  let cur = newArr[newArr.length - 1];

  while (0 <= i && i <= j && 0 <= j && j < newArr.length) {
    if (cur > N) {
      cur -= newArr[j];
      j -= 1;
    } else {
      if (cur === N) {
        answer += 1;
      }

      i -= 1;

      if (i < 0) {
        break;
      }

      cur += newArr[i];
    }
  }

  return answer;
}

console.log(solution(Number(input)));