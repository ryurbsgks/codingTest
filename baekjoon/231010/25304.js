// 준원이는 저번 주에 살면서 처음으로 코스트코를 가 봤다. 정말 멋졌다. 그런데, 몇 개 담지도 않았는데 수상하게 높은 금액이 나오는 것이다! 준원이는 영수증을 보면서 정확하게 계산된 것이 맞는지 확인해보려 한다.
// 영수증에 적힌,
// 구매한 각 물건의 가격과 개수
// 구매한 물건들의 총 금액
// 을 보고, 구매한 물건의 가격과 개수로 계산한 총 금액이 영수증에 적힌 총 금액과 일치하는지 검사해보자.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().split("\n");
const newInput = input.slice(2, input.length);

function solution(arr) {

  let sum = 0;

  for (let i = 0; i < Number(input[1]); i++) {
    sum = sum + Number(arr[i].split(" ")[0]) * Number(arr[i].split(" ")[1]);
  }

  return sum === Number(input[0]) ? "Yes" : "No";
}

console.log(solution(newInput));