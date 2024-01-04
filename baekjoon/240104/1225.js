// A×B를 계산하다 지겨워진 형택이는 A×B를 새로운 방법으로 정의하려고 한다.
// A에서 한 자리를 뽑고 × B에서 임의로 한 자리를 뽑아 곱한다.
// 의 가능한 모든 조합 (A가 n자리, B가 m자리 수라면 총 가능한 조합은 n×m개)을 더한 수로 정의하려고 한다.
// 예를 들어 121×34는
// 1×3 + 1×4 + 2×3 + 2×4 + 1×3 + 1×4 = 28
// 이 된다. 이러한 형택이의 곱셈 결과를 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split(" ");

function solution(arr) {

  let answer = 0;
  let [A, B] = [arr[0].split("").map( (el) => Number(el)), arr[1].split("").map( (el) => Number(el))];

  answer = A.reduce( (acc, cur) => acc + cur, 0) * B.reduce( (acc, cur) => acc + cur, 0);

  return answer;
}

console.log(solution(input));