// 1부터 연속적으로 번호가 붙어있는 스위치들이 있다. 스위치는 켜져 있거나 꺼져있는 상태이다. <그림 1>에 스위치 8개의 상태가 표시되어 있다. ‘1’은 스위치가 켜져 있음을, ‘0’은 꺼져 있음을 나타낸다. 그리고 학생 몇 명을 뽑아서, 학생들에게 1 이상이고 스위치 개수 이하인 자연수를 하나씩 나누어주었다. 학생들은 자신의 성별과 받은 수에 따라 아래와 같은 방식으로 스위치를 조작하게 된다.
// 남학생은 스위치 번호가 자기가 받은 수의 배수이면, 그 스위치의 상태를 바꾼다. 즉, 스위치가 켜져 있으면 끄고, 꺼져 있으면 켠다. <그림 1>과 같은 상태에서 남학생이 3을 받았다면, 이 학생은 <그림 2>와 같이 3번, 6번 스위치의 상태를 바꾼다.
// 여학생은 자기가 받은 수와 같은 번호가 붙은 스위치를 중심으로 좌우가 대칭이면서 가장 많은 스위치를 포함하는 구간을 찾아서, 그 구간에 속한 스위치의 상태를 모두 바꾼다. 이때 구간에 속한 스위치 개수는 항상 홀수가 된다.
// 스위치 번호	①	②	③	④	⑤	⑥	⑦	⑧
// 스위치 상태	0	1	0	1	0	0	0	1
// <그림 1>
// 예를 들어 <그림 2>에서 여학생이 3을 받았다면, 3번 스위치를 중심으로 2번, 4번 스위치의 상태가 같고 1번, 5번 스위치의 상태가 같으므로, <그림 3>과 같이 1번부터 5번까지 스위치의 상태를 모두 바꾼다. 만약 <그림 2>에서 여학생이 4를 받았다면, 3번, 5번 스위치의 상태가 서로 다르므로 4번 스위치의 상태만 바꾼다.
// 스위치 번호	①	②	③	④	⑤	⑥	⑦	⑧
// 스위치 상태	0	1	1	1	0	1	0	1
// <그림 2>
// 스위치 번호	①	②	③	④	⑤	⑥	⑦	⑧
// 스위치 상태	1	0	0	0	1	1	0	1
// <그림 3>
// 입력으로 스위치들의 처음 상태가 주어지고, 각 학생의 성별과 받은 수가 주어진다. 학생들은 입력되는 순서대로 자기의 성별과 받은 수에 따라 스위치의 상태를 바꾸었을 때, 스위치들의 마지막 상태를 출력하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution(N, M) {

  let result = "";
  let arr = [-1, ...input[1].split(" ").map( (el) => Number(el))];

  for (let i = 3; i < 3 + M; i++) {

    let [student, num] = input[i].split(" ").map( (el) => Number(el));

    if (student === 1) {
      for (let i = 1; i <= Math.floor(N / num); i++) {
        if (arr[i * num] === 0) {
          arr[i * num] = 1;
        } else {
          arr[i * num] = 0;
        }
      }
    }

    if (student === 2) {

      let left = num - 1;
      let right = num + 1;

      if (arr[num] === 0) {
        arr[num] = 1;
      } else {
        arr[num] = 0;
      }

      while (left > 0 && right <= N && arr[left] === arr[right]) {
        if (arr[left] === 0) {
          arr[left] = 1;
          arr[right] = 1;
        } else {
          arr[left] = 0;
          arr[right] = 0;
        }

        left = left - 1;
        right = right + 1;
      }

    }

  }
  
  for (let i = 1; i <= N; i++) {
    result += arr[i] + " ";

    if (i % 20 === 0) {
      result += "\n";
    }
  }

  return result;
}

console.log(solution(Number(input[0]), Number(input[2])));