// 삼각형의 세 변의 길이가 주어질 때 변의 길이에 따라 다음과 같이 정의한다.
// Equilateral :  세 변의 길이가 모두 같은 경우
// Isosceles : 두 변의 길이만 같은 경우
// Scalene : 세 변의 길이가 모두 다른 경우
// 단 주어진 세 변의 길이가 삼각형의 조건을 만족하지 못하는 경우에는 "Invalid" 를 출력한다. 예를 들어 6, 3, 2가 이 경우에 해당한다. 가장 긴 변의 길이보다 나머지 두 변의 길이의 합이 길지 않으면 삼각형의 조건을 만족하지 못한다.
// 세 변의 길이가 주어질 때 위 정의에 따른 결과를 출력하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(0, input.length - 1);

function solution(arr) {

  let answer = "";
  
  arr.sort( (a, b) => b - a);

  if (arr[0] >= arr[1] + arr[2]) {
    answer = "Invalid";
  } else {
    if (arr[0] === arr[1] && arr[0] === arr[2]) {
      answer = "Equilateral";
    } else if (arr[0] !== arr[1] && arr[0] !== arr[2] && arr[1] !== arr[2]) {
      answer = "Scalene";
    } else {
      answer = "Isosceles";
    }
  }

  return answer;
}

for (let i = 0; i < newInput.length; i++) {
  console.log(solution(newInput[i].split(" ").map( (el) => Number(el))));
}