// 지민이는 세계에서 가장 유명한 사람이 누구인지 궁금해졌다. 가장 유명한 사람을 구하는 방법은 각 사람의 2-친구를 구하면 된다. 어떤 사람 A가 또다른 사람 B의 2-친구가 되기 위해선, 두 사람이 친구이거나, A와 친구이고, B와 친구인 C가 존재해야 된다. 여기서 가장 유명한 사람은 2-친구의 수가 가장 많은 사람이다. 가장 유명한 사람의 2-친구의 수를 출력하는 프로그램을 작성하시오.
// A와 B가 친구면, B와 A도 친구이고, A와 A는 친구가 아니다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1, input.length);

function solution(arr) {

	let answer = 0;
	let N = Number(input[0]);
	let connect = new Array(N).fill(0).map( () => new Array(N).fill(0));

	for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      for (let k = 0; k < N; k++) {
        if (j === k) {
          continue;
        }

        if (arr[j][k] === "Y" || (arr[j][i] === "Y" && arr[i][k] === "Y")) {
          connect[j][k] = 1;
        }
      }
    }
	}

	for (let el of connect) {
    answer = Math.max(answer, el.reduce( (acc, cur) => acc + cur, 0));
	}

	return answer;
}

console.log(solution(newInput.map( (el) => el.split(""))));