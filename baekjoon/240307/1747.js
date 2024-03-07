// 어떤 수와 그 수의 숫자 순서를 뒤집은 수가 일치하는 수를 팰린드롬이라 부른다. 예를 들어 79,197과 324,423 등이 팰린드롬 수이다.
// 어떤 수 N (1 ≤ N ≤ 1,000,000)이 주어졌을 때, N보다 크거나 같고, 소수이면서 팰린드롬인 수 중에서, 가장 작은 수를 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim();

function solution(N) {

  const isPrime = (x) => {
    if (x === 1) {
			return false;
		}
		
    for (let i = 2; i <= Math.sqrt(x); i++) {
      if (x % i === 0) {
				return false;
			}
    }

    return true;
  };
  
  const isPalindrome = (x) => {
    return String(x) === String(x).split("").reverse().join("");
  };

  while (true) {
    if (isPrime(N) && isPalindrome(N)) {
      return N;
    }

    N++;
  }
}

console.log(solution(Number(input)));