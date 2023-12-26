// 접두사X 집합이란 집합의 어떤 한 단어가, 다른 단어의 접두어가 되지 않는 집합이다. 예를 들어, {hello}, {hello, goodbye, giant, hi}, 비어있는 집합은 모두 접두사X 집합이다. 하지만, {hello, hell}, {giant, gig, g}는 접두사X 집합이 아니다.
// 단어 N개로 이루어진 집합이 주어질 때, 접두사X 집합인 부분집합의 최대 크기를 출력하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1);

function solution(arr) {

  let answer = arr.length;

  arr.sort( (a, b) => a.length - b.length);

  for (let i = 0; i < arr.length; i++) {

    let check = false;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j].slice(0, arr[i].length)) {
        check = true;

        break;
      }
    }

    if (check) {
      answer -= 1;
    }

  }

  return answer;
}

console.log(solution(newInput));