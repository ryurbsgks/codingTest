// 민식이는 다음과 같은 폴리오미노 2개를 무한개만큼 가지고 있다. AAAA와 BB
// 이제 '.'와 'X'로 이루어진 보드판이 주어졌을 때, 민식이는 겹침없이 'X'를 모두 폴리오미노로 덮으려고 한다. 이때, '.'는 폴리오미노로 덮으면 안 된다.
// 폴리오미노로 모두 덮은 보드판을 출력하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution() {

  let result = "";
  let board = input[0];
  let cnt = 0;
  
  board += " ";
  
  for (let i = 0; i < board.length - 1; i++) {
    if (board[i] === "X") {
      cnt++;
    }
  
    if (board[i] === ".") {
      result += ".";

      if (cnt % 2 !== 0) {
        break;
      } else {
        cnt = 0;
      }
    }
  
    if (cnt === 2 && board[i + 1] !== "X") {
      result += "BB";
      cnt = 0;
    } else if (cnt === 4) {
      result += "AAAA";
      cnt = 0;
    }
  }
  
  return cnt % 2 === 1 ? -1 : result;
}

console.log(solution());