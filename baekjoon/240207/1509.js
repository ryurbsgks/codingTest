// 세준이는 어떤 문자열을 팰린드롬으로 분할하려고 한다. 예를 들어, ABACABA를 팰린드롬으로 분할하면, {A, B, A, C, A, B, A}, {A, BACAB, A}, {ABA, C, ABA}, {ABACABA}등이 있다.
// 분할의 개수의 최솟값을 출력하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim();

function solution() {

  let arr = Array.from({ length: 2500 }, () => Array(2500).fill(0));

  const palindrome = (l, r) => {
    while (l <= r) {
      if (input[l] !== input[r]) {
        return false;
      }

      l++;
      r--;
    }

    return true;
  };

  const dp = (r, c)  => {

    let ret = 987654321;

    if (r > c) {
      return arr[r][c] = 0;
    }

    if (r === c) {
      return arr[r][c] = 1;
    }

    if (arr[r][c] !== 0) {
      return arr[r][c];
    }

    for (let i = r; i <= c; i++) {
      if (palindrome(r, i)) {

        let cnt = 1;

        cnt += dp(i + 1, c);
        ret = Math.min(cnt, ret);

      }
    }

    return arr[r][c] = ret;
  };

  dp(0, input.length - 1);

  return arr[0][input.length - 1];
}

console.log(solution());