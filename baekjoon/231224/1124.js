// 자연수 X를 소인수분해하면, 곱해서 X가 되는 소수의 목록을 얻을 수 있다. 예를 들어, 12 = 2 × 2 × 3이다. 1은 소수가 아니다.
// 어떤 수 X를 소인수분해 해서 구한 소수의 목록의 길이가 소수이면, 그 수를 언더프라임 이라고 한다. 12는 목록에 포함된 소수의 개수가 3개이고, 3은 소수이니 12는 언더프라임이다.
// 두 정수 A와 B가 주어졌을 때, A보다 크거나 같고, B보다 작거나 같은 정수 중에서 언더프라임인 것의 개수를 구해보자.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split(" ");

function solution(arr) {

  let answer = 0;
  let [A, B] = arr.map( (el) => Number(el));
  let newArr = new Array(B + 1).fill(0);
  let array = new Array(B + 1).fill(false);

  const isPrime = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        newArr[num] = newArr[Math.floor(num / i)] + 1;

        return false;
      }
    }

    newArr[num] = 1;

    return true;
  };
  
  for (let i = 2; i <= B; i++) {
    array[i] = isPrime(i);
  }
  
  for (let i = A; i <= B; i++) {
    answer += array[newArr[i]];
  }

  return answer;
}

console.log(solution(input));