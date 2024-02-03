// 성원이는 다이어트를 시도중이다. 성원이는 정말 정말 무겁기 때문에, 저울이 부셔졌다. 성원이의 힘겨운 다이어트 시도를 보고만 있던 엔토피아는 성원이에게 새로운 저울을 선물해 주었다. 성원이는 엔토피아가 선물해준 저울 위에 올라갔다. “안돼!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! G 킬로그램이나 더 쪘어ㅜㅠ”라고 성원이가 말했다. 여기서 말하는 G킬로그램은 성원이의 현재 몸무게의 제곱에서 성원이가 기억하고 있던 몸무게의 제곱을 뺀 것이다.
// 성원이의 현재 몸무게로 가능한 것을 모두 출력하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim();

function solution(G) {

  let answer = [];
  let arr = [];
  let newArr = [];
  let length = 0;
  let small = 0;
  let big = 0;

  for (let i = 1; i <= Math.sqrt(G); i++) {
    if (G % i === 0) {
      if (G / i === i) {
        continue;
      }

      arr.push(i);
    }
  }

  length = arr.length;

  for (let i = 0; i < length; i++) {
    small = arr[i];
    big = G / small;

    if ((big + small) % 2 === 1) {
      continue;
    }

    newArr.push((big + small) / 2);
  }

  newArr.sort( (a, b) => a - b);

  if (newArr.length === 0) {
    answer.push(-1);
  } else {
    newArr.map( (el) => answer.push(el));
  }

  return answer.join("\n");
}

console.log(solution(Number(input)));