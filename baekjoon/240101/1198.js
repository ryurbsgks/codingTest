// 볼록 다각형이 있고, 여기서 3개의 연속된 점을 선택해서 삼각형을 만든다. 그 다음, 만든 삼각형을 다각형에서 제외한다. 원래 다각형이 N개의 점이 있었다면, 이제 N-1개의 점으로 구성된 볼록 다각형이 된다. 위의 과정은 남은 다각형이 삼각형이 될 때까지 반복한다.
// 볼록 다각형의 점이 시계 방향순으로 주어진다. 마지막에 남은 삼각형은 여러 가지가 있을 수 있다. 이때, 가능한 넓이의 최댓값을 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1);

function solution(N, arr) {

  let answer = 0;
  let newArr = [];
  let array = [];

  const triangleArea = (x, y, z) => {
    return Math.abs((x[0] * y[1] + y[0] * z[1] + z[0] * x[1] - x[1] * y[0] - y[1] * z[0] - z[1] * x[0])) / 2;
  };

  for (let i = 0; i < N; i++) {
    newArr.push(arr[i].split(" ").map( (el) => Number(el)));

    if (newArr.length === N) {

      let newArray = [];

      for (let j = 0; j < newArr.length - 2; j++) {
        for (let k = j + 1; k < newArr.length - 1; k++) {
          for (let l = k + 1; l < newArr.length; l++) {
            newArray.push([newArr[j], newArr[k], newArr[l]]);
          }
        }
      }
      
      for (let j = 0; j < newArray.length; j++) {
        array.push(triangleArea(newArray[j][0], newArray[j][1], newArray[j][2]));
      }

      answer = Math.max(...array);

    }
  }

  return answer;
}

console.log(solution(Number(input[0]), newInput));