// 월드초등학교 학생회장 후보는 일정 기간 동안 전체 학생의 추천에 의하여 정해진 수만큼 선정된다. 그래서 학교 홈페이지에 추천받은 학생의 사진을 게시할 수 있는 사진틀을 후보의 수만큼 만들었다. 추천받은 학생의 사진을 사진틀에 게시하고 추천받은 횟수를 표시하는 규칙은 다음과 같다.
// 1. 학생들이 추천을 시작하기 전에 모든 사진틀은 비어있다.
// 2. 어떤 학생이 특정 학생을 추천하면, 추천받은 학생의 사진이 반드시 사진틀에 게시되어야 한다.
// 3. 비어있는 사진틀이 없는 경우에는 현재까지 추천 받은 횟수가 가장 적은 학생의 사진을 삭제하고, 그 자리에 새롭게 추천받은 학생의 사진을 게시한다. 이때, 현재까지 추천 받은 횟수가 가장 적은 학생이 두 명 이상일 경우에는 그러한 학생들 중 게시된 지 가장 오래된 사진을 삭제한다.
// 4. 현재 사진이 게시된 학생이 다른 학생의 추천을 받은 경우에는 추천받은 횟수만 증가시킨다.
// 5. 사진틀에 게시된 사진이 삭제되는 경우에는 해당 학생이 추천받은 횟수는 0으로 바뀐다.
// 후보의 수 즉, 사진틀의 개수와 전체 학생의 추천 결과가 추천받은 순서대로 주어졌을 때, 최종 후보가 누구인지 결정하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution() {

  let [N, M] = [Number(input[0]), Number(input[1])]
  let arr = input[2].split(" ").map( (el) => Number(el));
  let newArr = Array.from({ length: N }, () => [0, 0, 0]);

  for (let i = 0; i < M; i++) {

    let check = false;

    for (let el of newArr) {
      if (el[0] === arr[i]) {
        el[1]++;
        check = true;

        break;
      } else if (el[0] === 0) {
        el[0] = arr[i];
        el[1]++;
        el[2] = i;
        check = true;

        break;
      }
    }

    if (!check) {
      newArr.sort( (a, b) => a[1] - b[1] || a[2] - b[2]);
      newArr[0][0] = arr[i];
      newArr[0][1] = 1;
      newArr[0][2] = i;
    }

  }

  let answer = newArr.filter( (el) => el[0] > 0).map( (element) => element[0]);

  answer.sort( (a, b) => a - b);

  return answer.join(" ");
}

console.log(solution());