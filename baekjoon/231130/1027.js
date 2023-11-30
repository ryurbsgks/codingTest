// 세준시에는 고층 빌딩이 많다. 세준시의 서민 김지민은 가장 많은 고층 빌딩이 보이는 고층 빌딩을 찾으려고 한다. 빌딩은 총 N개가 있는데, 빌딩은 선분으로 나타낸다. i번째 빌딩 (1부터 시작)은 (i,0)부터 (i,높이)의 선분으로 나타낼 수 있다. 고층 빌딩 A에서 다른 고층 빌딩 B가 볼 수 있는 빌딩이 되려면, 두 지붕을 잇는 선분이 A와 B를 제외한 다른 고층 빌딩을 지나거나 접하지 않아야 한다. 가장 많은 고층 빌딩이 보이는 빌딩을 구하고, 거기서 보이는 빌딩의 수를 출력하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution(arr) {

	let answer = 0;
	let N = Number(input[0]);
	let newArr = arr.split(" ").map( (el) => Number(el));

	const count = (idx) => {

    let cnt = 0;
    let tmp = 0;

    for (let i = idx - 1; i >= 0; i--) {
      
			let slope = (newArr[idx] - newArr[i]) / (idx - i);

      if (i === idx - 1 || tmp > slope) {
        cnt++;
        tmp = slope;
      }

    }

    for (let i = idx + 1; i < N; i++) {

      let slope = (newArr[idx] - newArr[i]) / (idx - i);

      if (i === idx + 1 || tmp < slope) {
        cnt++;
        tmp = slope;
      }

    }

    return cnt;
	};

	for (let i = 0; i < N; i++) {
		answer = Math.max(answer, count(i));
	}

	return answer;
}

console.log(solution(input[1]));