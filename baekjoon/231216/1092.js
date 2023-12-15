// 지민이는 항구에서 일한다. 그리고 화물을 배에 실어야 한다. 모든 화물은 박스에 안에 넣어져 있다. 항구에는 크레인이 N대 있고, 1분에 박스를 하나씩 배에 실을 수 있다. 모든 크레인은 동시에 움직인다.
// 각 크레인은 무게 제한이 있다. 이 무게 제한보다 무거운 박스는 크레인으로 움직일 수 없다. 모든 박스를 배로 옮기는데 드는 시간의 최솟값을 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution(arr, newArr) {

  let answer = 0;

  if (arr[0] < newArr[0]) {
    return -1;
  }

  while (newArr.length > 0) {
    for (let el of arr) {
      for (let element of newArr) {
        if (el >= element) {
          newArr.splice(newArr.indexOf(element), 1);
          
          break;
        }
      }
    }

    answer++;
  }

  return answer;
}

console.log(solution(input[1].split(" ").map( (el) => Number(el)).sort( (a, b) => b - a), input[3].split(" ").map( (el) => Number(el)).sort( (a, b) => b - a)));