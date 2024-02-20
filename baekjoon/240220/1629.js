// 자연수 A를 B번 곱한 수를 알고 싶다. 단 구하려는 수가 매우 커질 수 있으므로 이를 C로 나눈 나머지를 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split(" ");

function solution() {

  let [A, B, C] = [Number(input[0]), Number(input[1]), Number(input[2])];

  const f = (y) => {
    if (y === 1) {
      return A % C;
    }

    let k = f(Math.floor(y / 2)) % C;
    
    if (y % 2 === 0) {
      return (k * k) % C;
    } else {
      return ((k * k) % C * A % C) % C;
    }

  };

  return f(B);
}

console.log(solution());