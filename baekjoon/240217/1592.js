// 영식이와 친구들이 원형으로 모여서 시계방향으로 1부터 N까지 적혀있는 자리에 앉는다. 영식이와 친구들은 공 던지는 게임을 하기로 했다. 게임의 규칙은 다음과 같다.
// 일단 1번 자리에 앉은 사람이 공을 받는다. 그리고 나서 공을 다른 사람에게 던진다. 다시 공을 받은 사람은 다시 공을 던지고, 이를 계속 반복한다. 한 사람이 공을 M번 받았으면 게임은 끝난다. (지금 받은 공도 포함하여 센다.) 공을 M번보다 적게 받은 사람이 공을 던질 때, 현재 공을 받은 횟수가 홀수번이면 자기의 현재 위치에서 시계 방향으로 L번째 있는 사람에게, 짝수번이면 자기의 현재 위치에서 반시계 방향으로 L번째 있는 사람에게 공을 던진다.
// 공을 총 몇 번 던지는지 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split(" ");

function solution() {

  let answer = 0;
  let [N, M, L] = input.map( (el) => Number(el));
  let arr = Array(N).fill(0);
  let n = 0;

  while (arr[n] < M - 1) {
    arr[n] += 1;
    answer += 1;
    n = arr[n] % 2 === 1 ? (n + L) % N : (n - L + N) % N;
  }

  return answer;
}

console.log(solution());