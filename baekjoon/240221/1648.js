// 준규는 침대에 누워서 천장을 바라보고 있었다. 천장은 격자판 모양이었고, 계속해서 천장을 바라보다 보니 이런 생각이 들었다.
// 세로 크기가 N이고, 가로 크기가 M인 격자판을 2x1 크기의 도미노를 이용해서 빈 공간이 없도록 채우는 방법의 수는 몇일까?
// 아래 그림은 N = 3, M = 6인 예이다.
// N과 M이 주어졌을 때, 격자판을 2x1크기의 도미노로 채우는 방법의 수를 구하는 방법을 작성하시오. 도미노는 회전시켜 1x2크기로 채울 수 있다. 도미노로 모두 채웠을 때, 빈 칸이 존재하면 안 된다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split(" ");

function solution() {

  let [N, M] = [Number(input[0]), Number(input[1])];
  let arr = new Array(N * M).fill(null).map( () => new Array(1 << M).fill(-1));
  let MOD = 9901;

  const recursion = (num, status) => {
    if (num === N * M && status === 0) {
      return 1;
    }

    if (num >= N * M) {
      return 0;
    }

    if (arr[num][status] !== -1) {
      return arr[num][status];
    }

    arr[num][status] = 0;

    if ((status & (1 << 0)) !== 0) {
      arr[num][status] += recursion(num + 1, status >> 1);
    } else {
      arr[num][status] += recursion(num + 1, (status | (1 << M)) >> 1);

      if (num % M !== M - 1 && (status & (1 << 1)) === 0) {
        arr[num][status] += recursion(num + 2, status >> 2);
      }
    }

    arr[num][status] %= MOD;

    return arr[num][status];
  };

  return recursion(0, 0);
}

console.log(solution());