// 어떤 동물원에 가로로 두칸 세로로 N칸인 아래와 같은 우리가 있다.
// 이 동물원에는 사자들이 살고 있는데 사자들을 우리에 가둘 때, 가로로도 세로로도 붙어 있게 배치할 수는 없다. 이 동물원 조련사는 사자들의 배치 문제 때문에 골머리를 앓고 있다.
// 동물원 조련사의 머리가 아프지 않도록 우리가 2*N 배열에 사자를 배치하는 경우의 수가 몇 가지인지를 알아내는 프로그램을 작성해 주도록 하자. 사자를 한 마리도 배치하지 않는 경우도 하나의 경우의 수로 친다고 가정한다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim();

function solution(N) {

  let answer = 0;

  if (N === 1) {
    answer = 3;
  } else {

    let arr = Array(N + 1).fill(1);
    
    arr[1] = 3;
    arr[2] = 7;
  
    for (let i = 3; i <= N; i++) {
      arr[i] = (2 * arr[i - 1] + arr[i - 2]) % 9901;
    }

    answer = arr[N];
  }

  return answer;
}

console.log(solution(Number(input)));