// 그룹 단어란 단어에 존재하는 모든 문자에 대해서, 각 문자가 연속해서 나타나는 경우만을 말한다. 예를 들면, ccazzzzbb는 c, a, z, b가 모두 연속해서 나타나고, kin도 k, i, n이 연속해서 나타나기 때문에 그룹 단어이지만, aabbbccb는 b가 떨어져서 나타나기 때문에 그룹 단어가 아니다.
// 단어 N개를 입력으로 받아 그룹 단어의 개수를 출력하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1, input.length);

function solution(arr) {

  let answer = 0;

  arr.map( (el) => {

    let arr = [];
    let check = true;

    for (let i = 0; i < el.length; i++) {
      if (arr.indexOf(el[i]) === -1) {
        arr.push(el[i]);
      } else {
        if (arr.indexOf(el[i]) !== arr.length - 1) {
          check = false;

          break;
        }
      }
    }

    if (check) {
      answer += 1;
    }

  });

  return answer;
}

console.log(solution(newInput));