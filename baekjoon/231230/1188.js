// 선영이의 직업은 소시지 요리사이다. 소시지를 팔기 전에 음식 평론가 M명을 모아서 맛을 테스트해보려고 한다.
// 선영이는 동일한 소시지를 총 N개를 준비했다. 이 소시지를 모든 평론가들이 같은 양을 받게 소시지를 자르려고 한다. 이때, 소시지를 자르는 횟수를 최소로 하려고 한다.
// 예를 들어, 소시지가 2개, 평론가가 6명있는 경우를 생각해보자. 이때, 각 소시지를 세 조각으로 만든 다음, 각 평론가에게 한 조각씩 주면 된다. 이 경우에 소시지는 총 네 번 자르게 된다. 다른 경우로 소시지가 3개, 평론가가 4명 있는 경우를 생각해보자. 이때는 각 소시지의 크기를 3:1로 잘라서 큰 조각을 평론가에게 하나씩 주고, 남은 조각을 평론가에게 주면 모두 동일한 양을 받게 된다.
// 소시지의 수와 평론가의 수가 주어졌을 때, 모든 평론가에게 같은 양의 소시지를 주기 위해 필요한 칼질의 수를 구하는 프로그램을 작성하시오. 

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split(" ");

function solution(arr) {

  let [N, M] = arr;

  const gcd = (a, b) => {
    if (a % b === 0) {
      return b;
    }

    return gcd(b, a % b);
  };

  return M - gcd(N, M);
}

console.log(solution(input.map( (el) => Number(el))));