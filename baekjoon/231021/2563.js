// 가로, 세로의 크기가 각각 100인 정사각형 모양의 흰색 도화지가 있다. 이 도화지 위에 가로, 세로의 크기가 각각 10인 정사각형 모양의 검은색 색종이를 색종이의 변과 도화지의 변이 평행하도록 붙인다. 이러한 방식으로 색종이를 한 장 또는 여러 장 붙인 후 색종이가 붙은 검은 영역의 넓이를 구하는 프로그램을 작성하시오.
// 예를 들어 흰색 도화지 위에 세 장의 검은색 색종이를 그림과 같은 모양으로 붙였다면 검은색 영역의 넓이는 260이 된다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1, input.length);

function solution(arr, n) {

  let answer = 0;
  let newArr = new Array(100).fill().map( (el) => new Array(100).fill(0));

  for (let i = 0; i < n; i++) {

    let [x, y] = [Number(arr[i].split(" ")[0]), Number(arr[i].split(" ")[1])];

    for (let j = 0; j < 10; j++) {
      for (let k = 0; k < 10; k++) {
        newArr[x + j][y + k] = 1;
      }
    }

  }

  newArr.map( (el) => {
    answer += el.reduce( (acc, cur) => acc + cur, 0);
  });

  return answer;
}

console.log(solution(newInput, Number(input[0])));