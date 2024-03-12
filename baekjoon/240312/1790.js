// 1부터 N까지의 수를 이어서 쓰면 다음과 같이 새로운 하나의 수를 얻을 수 있다.
// 1234567891011121314151617181920212223...
// 이렇게 만들어진 새로운 수에서, 앞에서 k번째 자리 숫자가 어떤 숫자인지 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split(" ");

function solution() {

  let answer = 0;
  let [N, k] = input.map( (el) => Number(el));
  let n = 0;
  let num = 1;
  let nine = 9;

  while (k > num * nine) {
    k -= num * nine;
    n += nine;
    num++;
    nine *= 10;
  }

  n = (n + 1) + Math.floor((k - 1) / num);

  if (n > N) {
    answer = -1;
  } else {
    answer = String(n)[(k - 1) % num];
  }

  return answer;
}

console.log(solution());