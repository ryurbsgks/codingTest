// 수직선 위에 N개의 좌표 X1, X2, ..., XN이 있다. 이 좌표에 좌표 압축을 적용하려고 한다.
// Xi를 좌표 압축한 결과 X'i의 값은 Xi > Xj를 만족하는 서로 다른 좌표 Xj의 개수와 같아야 한다.
// X1, X2, ..., XN에 좌표 압축을 적용한 결과 X'1, X'2, ..., X'N를 출력해보자.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1, input.length);

function solution(arr) {

  let answer = "";
  let newArr = arr[0].split(" ").map( (el) => Number(el)).sort( (a, b) => a - b);
  let set = new Set(newArr);
  let map = new Map();
  
  [...set].map( (el, idx) => {
    map.set(el, idx);
  });

  arr[0].split(" ").map( (el) => {
    answer = `${answer}${map.get(Number(el))} `;
  });

  return answer;
}

console.log(solution(newInput));