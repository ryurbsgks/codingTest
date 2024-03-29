// 진영이는 캠프 조교를 온 후 효율적으로 시간 관리를 해야 한다는 것을 깨달았다. 진영이는 하루에 해야 할 일이 총 N개가 있고 이 일들을 편하게 1번부터 N번까지 차례대로 번호를 붙였다.
// 진영이는 시간을 효율적으로 관리하기 위해, 할 일들에 대해 끝내야할 시간과 걸리는 시간을 적은 명단을 만들었다. 즉, 이 명단은 i번째 일은 일을 처리하는데 정확히 Ti 시간이 걸리고 Si 시 내에 이 일을 처리하여야 한다는 것을 담고 있다. 진영이는 0시부터 활동을 시작할 수 있고, 두 개 이상의 일을 같은 시간에 처리할 수 없다.
// 진영이가 바라는 점은 최대한 늦잠을 자는 것이다. 문제는 이러한 진영이를 도와 일들은 모두 마감시간 내에 처리할 수 있는 범위 내에서 최대한 늦게 일을 시작할 수 있는 시간이 몇 시인지 알아내는 것이다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1);

function solution(N, arr) {

  let newArr = [];
  
  for (let i = 0; i < N; i++) {

    let [T, S] = arr[i].split(" ").map( (el) => Number(el));

    newArr.push([S, T]);

  }
  
  newArr.sort( (a, b) => b[0] - a[0]);
  
  let answer = newArr[0][0] - newArr[0][1];
  
  for (let i = 1; i < N; i++) {
    if (answer > newArr[i][0]) {
      answer = newArr[i][0] - newArr[i][1];
    } else {
      answer -= newArr[i][1];
    }
  }

  return answer >= 0 ? answer : -1;
}

console.log(solution(Number(input[0]), newInput));