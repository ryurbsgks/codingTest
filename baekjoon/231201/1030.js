// 프렉탈 평면은 다음과 같이 커진다. 시간 0에서 프렉탈은 흰색 정사각형 하나이다. 단위 시간(1)이 진행될 때마다 N×N개의 크기가 동일한 단위 정사각형으로 나누어진다. 만약 나누어진 정사각형이 흰색이라면 가운데 K×K 정사각형이 검정색으로 채워진다. N과 K는 둘 다 홀수이거나, 둘 다 짝수이다.
// 예를 들어, N=3, K=1이라면, 시간 1에 3×3 정사각형이 된다. 가운데 정사각형은 검정색이고, 나머지는 흰색이 된다. 시간 2때 9×9 정사각형이 되고, 17개는 검정이고, 나머지는 흰색이다.
// s, N, K, R1, R2, C1, C2가 주어질 때, 시간 s일 때, R1행 C1열부터 R2행 C2열까지의 모습을 출력하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim();

function solution(str) {

  let answer = [];
  let arr = [str];
  let line = arr.shift();
  let spt = line.split(" ").map( (el) => Number(el));
  let s = spt[0];
  let N = spt[1];
  let K = spt[2];
  let R1 = spt[3];
  let R2 = spt[4];
  let C1 = spt[5];
  let C2 = spt[6];
  let width = Math.pow(N, s);

  const find = (x, y, N, K, width) => {
    if (width == 1) {
      return 0;
    }

    let beforeWidth = Math.floor(width / N);
    let start = Math.floor((N - K) / 2 * beforeWidth);

    if (x >= start && x < width - start && y >= start && y < width - start) {
      return 1;
    }

    return find(x % beforeWidth, y % beforeWidth, N, K, beforeWidth);
  };

  for (let x = R1; x <= R2; x++) {

    let row = [];

    for (let y = C1; y <= C2; y++) {
      row.push(find(x, y, N, K, width));
    }

    answer.push(row.join(""));

  }

  return answer.join("\n");
}

console.log(solution(input));