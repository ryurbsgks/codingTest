// Day Of Mourning의 기타리스트 강토가 사용하는 기타에서 N개의 줄이 끊어졌다. 따라서 새로운 줄을 사거나 교체해야 한다. 강토는 되도록이면 돈을 적게 쓰려고 한다. 6줄 패키지를 살 수도 있고, 1개 또는 그 이상의 줄을 낱개로 살 수도 있다.
// 끊어진 기타줄의 개수 N과 기타줄 브랜드 M개가 주어지고, 각각의 브랜드에서 파는 기타줄 6개가 들어있는 패키지의 가격, 낱개로 살 때의 가격이 주어질 때, 적어도 N개를 사기 위해 필요한 돈의 수를 최소로 하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1, input.length);

function solution(arr) {

  let answer = 0;
  let [N, M] = input[0].split(" ").map( (el) => Number(el));
  let newArr = [];

  for (let i = 1; i <= M; i++) {

    let price = newInput[i - 1].split(" ").map( (el) => Number(el));

    newArr.push(price);

  }

  const sixList = [...newArr].sort( (a, b) => a[0] - b[0]);
  const oneList = [...newArr].sort( (a, b) => a[1] - b[1]);

  if (sixList[0][0] <= oneList[0][1] * 6) {
    answer = sixList[0][0] * Math.floor(N / 6) + oneList[0][1] * (N % 6);
    
    if (sixList[0][0] < oneList[0][1] * (N % 6)) {
      answer = sixList[0][0] * Math.ceil(N / 6);
    }
  } else {
    answer = oneList[0][1] * N;
  }

  return answer;
}

console.log(solution(newInput));