// 도현이는 바구니를 총 N개 가지고 있고, 각각의 바구니에는 1번부터 N번까지 번호가 매겨져 있다. 바구니에는 공이 1개씩 들어있고, 처음에는 바구니에 적혀있는 번호와 같은 번호가 적힌 공이 들어있다.
// 도현이는 앞으로 M번 공을 바꾸려고 한다. 도현이는 공을 바꿀 바구니 2개를 선택하고, 두 바구니에 들어있는 공을 서로 교환한다.
// 공을 어떻게 바꿀지가 주어졌을 때, M번 공을 바꾼 이후에 각 바구니에 어떤 공이 들어있는지 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1, input.length);

function solution(arr, N) {

  let answer;
  let newArr = new Array(N).fill(0).map( (el, idx) => idx + 1);
  
  for (let i = 0; i < arr.length; i++) {

    let [a, b] = arr[i].split(" ").map( (el) => Number(el));
    let memo = [newArr[a - 1], newArr[b - 1]];
    
    newArr[a - 1] = memo[1];
    newArr[b - 1] = memo[0];

  }

  answer = newArr.toString().replaceAll(",", " ");

  return answer;
}

console.log(solution(newInput, Number(input[0].split(" ")[0])));