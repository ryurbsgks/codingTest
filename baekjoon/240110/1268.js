// 오민식 선생님은 올해 형택초등학교 6학년 1반 담임을 맡게 되었다. 오민식 선생님은 우선 임시로 반장을 정하고 학생들이 서로 친숙해진 후에 정식으로 선거를 통해 반장을 선출하려고 한다. 그는 자기반 학생 중에서 1학년부터 5학년까지 지내오면서 한번이라도 같은 반이었던 사람이 가장 많은 학생을 임시 반장으로 정하려 한다.
// 그래서 오민식 선생님은 각 학생들이 1학년부터 5학년까지 몇 반에 속했었는지를 나타내는 표를 만들었다. 예를 들어 학생 수가 5명일 때의 표를 살펴보자.
//  	1학년	2학년	3학년	4학년	5학년
// 1번 학생	2	3	1	7	3
// 2번 학생	4	1	9	6	8
// 3번 학생	5	5	2	4	4
// 4번 학생	6	5	2	6	7
// 5번 학생	8	4	2	2	2
// 위 경우에 4번 학생을 보면 3번 학생과 2학년 때 같은 반이었고, 3번 학생 및 5번 학생과 3학년 때 같은 반이었으며, 2번 학생과는 4학년 때 같은 반이었음을 알 수 있다. 그러므로 이 학급에서 4번 학생과 한번이라도 같은 반이었던 사람은 2번 학생, 3번 학생과 5번 학생으로 모두 3명이다. 이 예에서 4번 학생이 전체 학생 중에서 같은 반이었던 학생 수가 제일 많으므로 임시 반장이 된다.
// 각 학생들이 1학년부터 5학년까지 속했던 반이 주어질 때, 임시 반장을 정하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1);

function solution(arr) {

  let n = Number(input[0]);
  let newArr = [];
  let array = Array.from({ length: n }, () => Array(n).fill(0));
  
  for (let i = 1; i <= n; i++) {
    newArr.push(arr[i - 1].split(" ").map( (el) => Number(el)));
  }
  
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        if (newArr[j][i] === newArr[k][i]) {
          array[k][j] = 1;
          array[j][k] = 1;
        }
      }
    }
  }
  
  let cnt = array.map( (el) => el.filter( (element) => element === 1).length);

  return cnt.indexOf(Math.max(...cnt)) + 1;
}

console.log(solution(newInput));