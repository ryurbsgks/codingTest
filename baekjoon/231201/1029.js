// 예술을 사랑하는 사람들이 시장에 모여서 그들의 그림을 서로 거래하려고 한다. 모든 그림의 거래는 다음과 같은 조건을 만족해야 한다.
// 그림을 팔 때, 그림을 산 가격보다 크거나 같은 가격으로 팔아야 한다.
// 같은 그림을 두 번 이상 사는 것은 불가능하다.
// 방금 시장에 새로운 그림이 들어왔다. 1번 아티스트는 그 그림을 외부 상인에게 가격 0을 주고 샀다. 이제 그 그림을 자신의 예술가 친구들에게 팔려고 한다. 위의 조건을 모두 만족하는 거래만 이루어진다고 가정했을 때, 그림을 소유했던 사람의 수의 최댓값을 출력하는 프로그램을 작성하시오. (1번 아티스트와 마지막으로 그 그림을 소유한 사람도 포함한다).

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1, input.length);

function solution(arr) {

  let N = Number(input[0]);
  let newArr = new Array(N).fill(0).map( () => new Array(N).fill(0));
  let dp = new Array(1 << 15).fill(0).map( () => new Array(15).fill(0).map( () => new Array(10).fill(-1)));

  const sell = (visit, artist, price) => {

    let ret = dp[visit][artist][price];

    if (ret !== -1) {
      return ret;
    }
  
    ret = 0;

    for (let i = 1; i < N; ++i) {
      if (!(visit & (1 << i)) && newArr[artist][i] >= price) {

        let next_visit = visit | (1 << i);

        ret = Math.max(ret, sell(next_visit, i, newArr[artist][i]) + 1);

      }
    }
  
    dp[visit][artist][price] = ret;

    return ret;
  };

  for (let i = 0; i < N; ++i) {
    for (let j = 0; j < N; ++j) {
      newArr[i][j] = Number(arr.join("")[i * N + j]);
    }
  }

  sell(1, 0, 0);

  return dp[1][0][0] + 1;
}

console.log(solution(newInput));