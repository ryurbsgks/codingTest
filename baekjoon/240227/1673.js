// 강민이는 치킨 한 마리를 주문할 수 있는 치킨 쿠폰을 n장 가지고 있다. 이 치킨집에서는 치킨을 한 마리 주문할 때마다 도장을 하나씩 찍어 주는데, 도장을 k개 모으면 치킨 쿠폰 한 장으로 교환할 수 있다.
// 강민이가 지금 갖고 있는 치킨 쿠폰으로 치킨을 최대 몇 마리나 먹을 수 있는지 구하여라. 단, 치킨을 주문하기 위해서는 반드시 치킨 쿠폰을 갖고 있어야 한다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution(input) {

  let answer = [];

  for (let el of input) {

    let [n, k] = el.split(" ").map( (el) => Number(el));
    let num = 0;

    num += n;

    while (Math.floor(n / k)) {
      num += Math.floor(n / k);
      n = Math.floor(n / k) + (n % k);
    }

    answer.push(num);

  }

  return answer.join("\n");
}

console.log(solution(input));