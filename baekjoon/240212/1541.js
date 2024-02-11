// 세준이는 양수와 +, -, 그리고 괄호를 가지고 식을 만들었다. 그리고 나서 세준이는 괄호를 모두 지웠다.
// 그리고 나서 세준이는 괄호를 적절히 쳐서 이 식의 값을 최소로 만들려고 한다.
// 괄호를 적절히 쳐서 이 식의 값을 최소로 만드는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim();

function solution() {

  let result = 0;
  let str = "";
  let check = false;

  for (let i = 0; i <= input.length; i++) {
    if (input[i] === "-" || input[i] === "+" || i === input.length) {
      if (check) {
        result -= Number(str);
        str = "";
      } else {
        result += Number(str);
        str = "";
      }
    } else {
      str += input[i];
    }
    
    if (input[i] === "-") {
      check = true;
    }
  }

  return result;
}

console.log(solution());