// 중앙값이란, 수열을 정렬했고, 그 크기가 N일 때, 1부터 시작해서 (N+1)/2번째 있는 원소가 그 수열의 중앙값이다. 예를 들어, {1, 2, 6, 5, 4, 3}에서는 3이고, {11, 13, 12, 15, 14}에서는 13이다.
// 오세준은 1초에 온도를 하나씩 재는 온도계를 만들었다. 이 온도계에는 작은 디스플레이 창이 하나 있는데, 이 창에는 지금부터 최근 K초 까지 온도의 중앙값을 표시해 준다. (온도를 재기시작한지 K초부터 표시한다. 그 전에는 아무것도 출력되지 않는다.)
// 오세준은 온도를 N초동안 쟀다. 그 시간 동안 온도계의 디스플레이 창에 뜨는 숫자의 합을 구하는 프로그램을 작성하시오.
// 다른 말로 하면, 길이가 N인 수열이 주어진다. 이 수열은 N-K+1 개의 길이가 K인 연속된 부분 수열이 존재한다. 이 부분 수열의 중앙값의 합을 출력하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution() {

  let [N, K] = input[0].split(" ").map( (el) => Number(el));
  let MAX = 65537;
  let arr = new Array(N + 1).fill(0);
  let newArr = new Array(MAX * 4).fill(0);
  let sum = 0;

  const update = (s, e, node, idx, val) => {
    
    let mid = Math.floor((s + e) / 2);
    
    if (idx < s || e < idx) {
      return;
    }

    newArr[node] += val;
  
    if (s === e) {
      return;
    }
  
    update(s, mid, node * 2, idx, val);
    update(mid + 1, e, node * 2 + 1, idx, val);

  };
  
  const query = (s, e, node, cnt) => {

    let mid = Math.floor((s + e) / 2);

    if (s === e) {
      return s;
    }
    
    if (newArr[node * 2] >= cnt) {
      return query(s, mid, node * 2, cnt);
    } else {
      return query(mid + 1, e, node * 2 + 1, cnt - newArr[node * 2]);
    }

  };

  for (let i = 1; i <= N; i++) {
    arr[i] = Number(input[i]);
    update(0, MAX, 1, arr[i], 1);

    if (i >= K) {

      let x = query(0, MAX, 1, Math.floor((K + 1) / 2));

      sum += x;
      update(0, MAX, 1, arr[i - K + 1], -1);
      
    }
  }

  return sum;
}

console.log(solution());