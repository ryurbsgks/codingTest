// 다솜이는 유료 고속도로를 가지고 있다. 다솜이는 현재 고속도로에 휴게소를 N개 가지고 있는데, 휴게소의 위치는 고속도로의 시작으로부터 얼만큼 떨어져 있는지로 주어진다. 다솜이는 지금 휴게소를 M개 더 세우려고 한다.
// 다솜이는 이미 휴게소가 있는 곳에 휴게소를 또 세울 수 없고, 고속도로의 끝에도 휴게소를 세울 수 없다. 휴게소는 정수 위치에만 세울 수 있다.
// 다솜이는 이 고속도로를 이용할 때, 모든 휴게소를 방문한다. 다솜이는 휴게소를 M개 더 지어서 휴게소가 없는 구간의 길이의 최댓값을 최소로 하려고 한다. (반드시 M개를 모두 지어야 한다.)
// 예를 들어, 고속도로의 길이가 1000이고, 현재 휴게소가 {200, 701, 800}에 있고, 휴게소를 1개 더 세우려고 한다고 해보자.
// 일단, 지금 이 고속도로를 타고 달릴 때, 휴게소가 없는 구간의 최댓값은 200~701구간인 501이다. 하지만, 새로운 휴게소를 451구간에 짓게 되면, 최대가 251이 되어서 최소가 된다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution() {

  let [N, M, L] = input[0].split(" ").map( (el) => Number(el));
  let arr = [0, L].concat(input[1].split(" ").map( (el) => Number(el)));
  let start = 1;
  let end = L;
  let mid = 0;
  let ret = 0;

  const check = (mid) => {

    let cnt = 0;

    for (let i = 1; i < arr.length; i++) {

      let dist = arr[i] - arr[i - 1];

      cnt += Math.floor(dist / mid);

      if (dist % mid === 0) {
        cnt--;
      }

    }

    return cnt > M;
  };

  arr.sort( (a, b) => a - b);

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (check(mid)) {
      start = mid + 1;
    } else {
      ret = mid;
      end = mid - 1;
    }
  }

  return ret;
}

console.log(solution());