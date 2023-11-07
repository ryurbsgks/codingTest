// 숫자 카드는 정수 하나가 적혀져 있는 카드이다. 상근이는 숫자 카드 N개를 가지고 있다. 정수 M개가 주어졌을 때, 이 수가 적혀있는 숫자 카드를 상근이가 몇 개 가지고 있는지 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const arr = input[1].split(" ").map( (el) => Number(el));
const newArr = input[3].split(" ").map( (el) => Number(el));

function solution(arr, newArr) {

  let answer = [];
  let map = new Map();

  arr.map( (el) => {
    if (map.has(el)) {
      map.set(el, map.get(el) + 1);
    } else {
      map.set(el, 1);
    }
  });

  newArr.map( (el) => {
    if (map.has(el)) {
      answer.push(map.get(el));
    } else {
      answer.push(0);
    }
  });

  return answer.join(" ");
}

console.log(solution(arr, newArr));