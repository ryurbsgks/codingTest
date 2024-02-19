// 영식이는 숫자를 셀 때, 왼손을 이용한다. 엄지손가락부터 시작해서 새끼손가락까지 차례대로 하나씩 센다. 그다음에 새끼손가락까지 센 다음에는 반대로 엄지손가락으로 다시 역방향으로 센다. 영식이는 자기가 원하는 숫자가 나올 때 까지 계속해서 이 방법으로 센다. 영식이는 절대 손가락을 건너뛰지 않는다. 예를 들어 숫자 10을 셀 때는, 엄지 → 검지 → 중지 → 약지 → 새끼 → 약지 → 중지 → 검지 → 엄지 → 검지 이렇게 센다.
// 영식이가 손가락을 하나 다쳤다. 영식이는 오른손으로는 셀 수 없기 때문에, 왼손으로 세야 한다. 다친 손가락을 이용해서 셀 수 있는 횟수가 제한되어 있다.
// 영식이가 셀 수 있는 최대 숫자를 출력하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution() {

  let answer = 0;
  let first = Number(input[0]);
  let second = Number(input[1]);
 
  if (first === 1) {
    if (second === 0) {
      answer += first - 1;
    } else {
      answer += 8 * second;
    }
  } else if (first === 5) {
    if (second === 0) {
      answer += first - 1;
    } else {
      answer += 4 + 8 * second;
    }
  } else {
    if (second === 0) {
      answer += first - 1;
    } else {
      answer += 4 * second + 1;

      if (second % 2 === 0) {
        answer += first - 2;
      } else {
        answer += 4 - first;
      }
    }
  }

  return answer;
}

console.log(solution());