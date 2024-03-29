// 현수는 학생들에게 노래를 가르치고 있다. 총 N개의 악보가 있고 i번째 악보는 Bi초로 이루어져 있다. 학생들은 0초부터 1번 악보를 따라 노래하기 시작했다. 즉 B1-1초에 1번 악보를 끝마치게 되고 B1초부터 B1+B2-1초까지 2번 악보를 따라 부르게 된다.
// 악보	1	1	2	3	3	3
// 시간	0	1	2	3	4	5
// 문제는 T1부터 TQ까지 Q개의 시간에 대해 대답을 하는 것인데, Ti초 때 노래하는 악보를 i번째에 출력하는 것이다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution() {

  let answer = [];
  let [N, Q] = input[0].split(" ").map( (el) => Number(el));
  let arr = [];
  let idx = 1;

  const readSongsAndCreateList = () => {

    let time = Number(input[idx++]);

    for (let i = 0; i < time; i++) {
      arr.push(idx - 1);
    }

    if (idx > N) {
      readQuestions();
    } else {
      readSongsAndCreateList();
    }

  }

  const readQuestions = () => {
    for (let i = 1; i <= Q; i++) {

      let num = Number(input[idx++]);

      answer.push(arr[num]);

      if (i === Q) {
        return;
      }

    }
  };

  readSongsAndCreateList();

  return answer.join("\n");
}

console.log(solution());



fs.readFile("/home/ryurbsgks5114/codingTest/baekjoon/input.txt", 'utf8', (err, data) => {





});