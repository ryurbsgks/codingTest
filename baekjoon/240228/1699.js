// 어떤 자연수 N은 그보다 작거나 같은 제곱수들의 합으로 나타낼 수 있다. 예를 들어 11=32+12+12(3개 항)이다. 이런 표현방법은 여러 가지가 될 수 있는데, 11의 경우 11=22+22+12+12+12(5개 항)도 가능하다. 이 경우, 수학자 숌크라테스는 “11은 3개 항의 제곱수 합으로 표현할 수 있다.”라고 말한다. 또한 11은 그보다 적은 항의 제곱수 합으로 표현할 수 없으므로, 11을 그 합으로써 표현할 수 있는 제곱수 항의 최소 개수는 3이다.
// 주어진 자연수 N을 이렇게 제곱수들의 합으로 표현할 때에 그 항의 최소개수를 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim();

function solution(N) {

  let arr = new Array(N + 1);

  for (let i = 0; i <= N; i++) {
    arr[i] = i;
  }

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j * j <= i; j++) {
      arr[i] = Math.min(arr[i], arr[i - j * j] + 1);
    }
  }

  return arr[N];
}

console.log(solution(Number(input)));