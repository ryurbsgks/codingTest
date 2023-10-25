// 창영이는 삼각형의 종류를 잘 구분하지 못한다. 따라서 프로그램을 이용해 이를 외우려고 한다.
// 삼각형의 세 각을 입력받은 다음, 
// 세 각의 크기가 모두 60이면, Equilateral
// 세 각의 합이 180이고, 두 각이 같은 경우에는 Isosceles
// 세 각의 합이 180이고, 같은 각이 없는 경우에는 Scalene
// 세 각의 합이 180이 아닌 경우에는 Error
// 를 출력하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution(arr) {

  let answer = "";
  let sum = arr.reduce( (acc, cur) => acc + cur, 0);

  if (sum !== 180) {
    answer = "Error";
  } else {
    if (arr[0] === arr[1] && arr[0] === arr[2] && arr[0] === 60) {
      answer = "Equilateral";
    } else if (arr[0] !== arr[1] && arr[0] !== arr[2] && arr[1] !== arr[2]) {
      answer = "Scalene";
    } else {
      answer = "Isosceles";
    }
  }

  return answer;
}

console.log(solution(input.map( (el) => Number(el))));