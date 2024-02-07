// N개의 수로 이루어진 수열 A[1], A[2], …, A[N]이 있다. 이 수열에 대해서 버블 소트를 수행할 때, Swap이 총 몇 번 발생하는지 알아내는 프로그램을 작성하시오.
// 버블 소트는 서로 인접해 있는 두 수를 바꿔가며 정렬하는 방법이다. 예를 들어 수열이 3 2 1 이었다고 하자. 이 경우에는 인접해 있는 3, 2가 바뀌어야 하므로 2 3 1 이 된다. 다음으로는 3, 1이 바뀌어야 하므로 2 1 3 이 된다. 다음에는 2, 1이 바뀌어야 하므로 1 2 3 이 된다. 그러면 더 이상 바꿔야 할 경우가 없으므로 정렬이 완료된다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution(N) {

  let answer = 0;
  let arr = input[1].split(" ").map( (el) => Number(el));
  let h = Math.ceil(Math.log2(N));
  let size = (1 << (h + 1));
  let newArr = new Array(size).fill(0);

  const init = (start, end, node) => {
    if (start === end) {
      return newArr[node] = 1;
    }

    return newArr[node] = init(start, Math.floor((start + end) / 2), node * 2) + init(Math.floor((start + end) / 2) + 1, end, node * 2 + 1);
  };

  const query = (start, end, left, right, node) => {
    if (right < start || left > end) {
      return 0;
    }

    if (left <= start && end <= right) {
      return newArr[node];
    }

    return query(start, Math.floor((start + end) / 2), left, right, node * 2) + query(Math.floor((start + end) / 2) + 1, end, left, right, node * 2 + 1);
  };

  const update = (start, end, idx, node, value) => {
    if (start > idx || end < idx) {
      return;
    }

    if (start === end) {
      if (start === idx) {
        newArr[node] = value;
      }

      return;
    }

    update(start, Math.floor((start + end) / 2), idx, node * 2, value);
    update(Math.floor((start + end) / 2) + 1, end, idx, node * 2 + 1, value);
    newArr[node] = newArr[node * 2] + newArr[node * 2 + 1];

    return;
  };

  init(0, N - 1, 1);

  arr = arr.map( (el, idx) => [el, idx]);
  arr.sort( (a, b) => a[0] - b[0]);

  for (let i = 0; i < N; i++) {

    let q = arr[i][1];

    answer += query(0, N - 1, 0, q, 1) - 1;
    update(0, N - 1, q, 1, 0);

  }

  return answer;
}

console.log(solution(Number(input[0])));