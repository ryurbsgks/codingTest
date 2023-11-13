// 정수를 저장하는 스택을 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.
// 명령은 총 다섯 가지이다.
// 1 X: 정수 X를 스택에 넣는다. (1 ≤ X ≤ 100,000)
// 2: 스택에 정수가 있다면 맨 위의 정수를 빼고 출력한다. 없다면 -1을 대신 출력한다.
// 3: 스택에 들어있는 정수의 개수를 출력한다.
// 4: 스택이 비어있으면 1, 아니면 0을 출력한다.
// 5: 스택에 정수가 있다면 맨 위의 정수를 출력한다. 없다면 -1을 대신 출력한다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1, input.length);

function solution(arr) {

  let answer = [];
  let newArr = [];

  arr.map( (el) => {

    let [n, X] = el.split(" ");
    
    switch (n) {
      case "1":
        newArr.push(Number(X));

        break;
      case "2":
        newArr.length === 0 ? answer.push(-1) : answer.push(newArr.pop());

        break;
      case "3":
        answer.push(newArr.length);

        break;
      case "4":
        newArr.length === 0 ? answer.push(1) : answer.push(0);

        break;
      case "5":
        newArr.length === 0 ? answer.push(-1) : answer.push(newArr[newArr.length - 1]);

        break;
    }

  });

  return answer.join("\n");
}

console.log(solution(newInput));