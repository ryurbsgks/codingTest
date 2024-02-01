// 세준이는 도서관에서 일한다. 도서관의 개방시간이 끝나서 세준이는 사람들이 마구 놓은 책을 다시 가져다 놓아야 한다. 세준이는 현재 0에 있고, 사람들이 마구 놓은 책도 전부 0에 있다. 각 책들의 원래 위치가 주어질 때, 책을 모두 제자리에 놔둘 때 드는 최소 걸음 수를 계산하는 프로그램을 작성하시오. 세준이는 한 걸음에 좌표 1칸씩 가며, 책의 원래 위치는 정수 좌표이다. 책을 모두 제자리에 놔둔 후에는 다시 0으로 돌아올 필요는 없다. 그리고 세준이는 한 번에 최대 M권의 책을 들 수 있다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution() {

  let [N, M] = input[0].split(" ").map( (el) => Number(el));
  let arr = input[1].split(" ").map( (el) => Number(el));
  let newArr = [];
  let array = [];
  let result = 0;
  let last = 0;

  for (let el of arr) {
    last = Math.max(Math.abs(el), last);

    if (el > 0) {
      newArr.push(el);
    } else {
      array.push(Math.abs(el));
    }
  }

  newArr.sort( (a, b) => b - a);
  array.sort( (a, b) => b - a);

  for (let i = 0; i < newArr.length; i += M) {
    result += newArr[i] * 2;
  }

  for (let i = 0; i < array.length; i += M) {
    result += array[i] * 2;
  }

  return result - last;
}

console.log(solution());