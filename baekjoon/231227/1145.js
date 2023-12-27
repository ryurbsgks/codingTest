// 다섯 개의 자연수가 있다. 이 수의 적어도 대부분의 배수는 위의 수 중 적어도 세 개로 나누어 지는 가장 작은 자연수이다.
// 서로 다른 다섯 개의 자연수가 주어질 때, 적어도 대부분의 배수를 출력하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split(" ");

function solution(arr) {

  let answer = 1;
  let check = 0;

  while (check < 3) {
    check = 0;

    for (let i = 0; i < 5; i++) {
      if (answer % arr[i] === 0) {
        check++;
      }
    }
    
    answer++;
  }

  answer--;

  return answer;
}

console.log(solution(input.map( (el) => Number(el))));