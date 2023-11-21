// 재용이는 최신 컴퓨터 10대를 가지고 있다. 어느 날 재용이는 많은 데이터를 처리해야 될 일이 생겨서 각 컴퓨터에 1번부터 10번까지의 번호를 부여하고, 10대의 컴퓨터가 다음과 같은 방법으로 데이터들을 처리하기로 하였다.
// 1번 데이터는 1번 컴퓨터, 2번 데이터는 2번 컴퓨터, 3번 데이터는 3번 컴퓨터, ... ,
// 10번 데이터는 10번 컴퓨터, 11번 데이터는 1번 컴퓨터, 12번 데이터는 2번 컴퓨터, ...
// 총 데이터의 개수는 항상 ab개의 형태로 주어진다. 재용이는 문득 마지막 데이터가 처리될 컴퓨터의 번호가 궁금해졌다. 이를 수행해주는 프로그램을 작성하라.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1, input.length).map( (el) => el.split(" ").map( (element) => Number(element)));

function solution(arr) {

  let answer = [];

  arr.map( (el) => {

    let [a, b] = [el[0], el[1]];
    
    a %= 10;
    b %= 4;

    if (b === 0) {
      b = 4;
    }

    Number(Math.pow(a, b).toString().slice(-1)) === 0 ? answer.push(10) : answer.push(Number(Math.pow(a, b).toString().slice(-1)));

  });

  return answer.join("\n");
}

console.log(solution(newInput));