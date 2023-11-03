// 온라인 저지에 가입한 사람들의 나이와 이름이 가입한 순서대로 주어진다. 이때, 회원들을 나이가 증가하는 순으로, 나이가 같으면 먼저 가입한 사람이 앞에 오는 순서로 정렬하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1, input.length).map( (el) => el.split(" "));

function solution(arr) {

  let answer = "";

  arr.sort( (a, b) => Number(a[0]) - Number(b[0]));

  arr.map( (el) => {
    answer = `${answer}${el[0]} ${el[1]}\n`;
  });

  answer = answer.slice(0, answer.length - 1);

  return answer;
}

console.log(solution(newInput));