// 압축되지 않은 문자열 S가 주어졌을 때, 이 문자열중 어떤 부분 문자열은 K(Q)와 같이 압축 할 수 있다. K는 한자리 정수이고, Q는 0자리 이상의 문자열이다. 이 Q라는 문자열이 K번 반복된다는 뜻이다. 압축된 문자열이 주어졌을 때, 이 문자열을 다시 압축을 푸는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim();

function solution(S) {

  let arr = new Array(51).fill(0);
  let newArr = new Array(51).fill(0);
  let cur = 0;
  let num = 0;

  for (let i = 0; i < S.arrgth; i++) {
    if (S[i] === "(") {
      arr[cur]--;
      cur++;
      newArr[cur] = num;
    } else if (S[i] === ")") {

      let temp = arr[cur] * newArr[cur];

      arr[cur] = 0;
      cur--;
      arr[cur] += temp;

    } else {
      arr[cur]++;
      num = parseInt(S[i]);
    }
  }

  return arr[0];
}

console.log(solution(input));
