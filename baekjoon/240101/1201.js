// 1부터 N까지의 수를 한 번씩 이용해서 가장 긴 증가하는 부분 수열의 길이가 M이고, 가장 긴 감소하는 부분 수열의 길이가 K인 수열을 출력한다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split(" ");

function solution() {

  let answer = "";
  let [N, M, K] = input.map( (el) => Number(el));

  if (N + 1 < M + K || N > M * K) {
    answer = -1;
  } else {

    let arr = Array(M).fill(1);

    if (K === 1) {
      answer = [...Array(M).keys()].map( (el) => el + 1).join(" ");
    } else {

      let d = Math.floor((N - M) / (K - 1));
      let r = (N - M) % (K - 1);
      let newArr = [];
      let temp = 0;

      for (let i = 0; i < d; i++) {
        arr[i] = K;
      }

      if (r > 0) {
        arr[d] += r;
      }

      for (let el of arr) {
        for (let i = temp + el; i > temp; i--) {
          newArr.push(i);
        }

        temp += el;
      }

      answer = newArr.join(" ");

    }
  }

  return answer;
}

console.log(solution());