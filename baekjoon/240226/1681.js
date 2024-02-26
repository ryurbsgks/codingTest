// 민승이는 N(1 ≤ N ≤ 1,000,000)명의 학생들에게 양의 정수로 된 라벨을 붙이려고 한다. 하지만 모든 학생들은 숫자 L(0 ≤ L ≤ 9)이 자신의 라벨 숫자에 포함되길 원치 않는다. 
// 문제는 학생들에게 숫자 L을 쓰지 않고 최소한 작은 N개의 양의 수 세트를 라벨링 할 때 학생들이 받는 라벨 중 가장 큰 수가 몇인지를 구하는 것이다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split(" ");

function solution() {

  let [N, L] = input.map( (el) => Number(el));
  let num = 1;
  let cnt = 0;

  while (true) {
    if (!num.toString().includes(L.toString())) {
      cnt++;

      if (cnt === N) {
        return num;
      }

      num++;
    } else {
      num++;
    }
  }

}

console.log(solution());