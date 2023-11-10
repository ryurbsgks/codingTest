// 정수 B에 0보다 큰 정수인 N을 곱해 정수 A를 만들 수 있다면, A는 B의 배수이다.
// 예:
// 10은 5의 배수이다 (5*2 = 10)
// 10은 10의 배수이다(10*1 = 10)
// 6은 1의 배수이다(1*6 = 6)
// 20은 1, 2, 4,5,10,20의 배수이다.
// 다른 예:
// 2와 5의 최소공배수는 10이고, 그 이유는 2와 5보다 작은 공배수가 없기 때문이다.
// 10과 20의 최소공배수는 20이다.
// 5와 3의 최소공배수는 15이다.
// 당신은 두 수에 대하여 최소공배수를 구하는 프로그램을 작성 하는 것이 목표이다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split(" ").map( (el) => Number(el));

function solution(arr) {

  let answer = 0;

  const euclidean = (a, b) => {

    let GCD = (a, b) => a % b === 0 ? b : GCD(b, a % b);
    let LCM = (a, b) => a * b / GCD(a, b);

    return LCM(a, b);
  };

  answer = euclidean(arr[0], arr[1]);

  return answer;
}

console.log(solution(input));