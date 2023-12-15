// N개의 체커가 엄청 큰 보드 위에 있다. i번 체커는 (xi, yi)에 있다. 같은 칸에 여러 체커가 있을 수도 있다. 체커를 한 번 움직이는 것은 그 체커를 위, 왼쪽, 오른쪽, 아래 중의 한 방향으로 한 칸 움직이는 것이다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1, input.length);

function solution(N, arr) {

	let answer = new Array(N).fill(-1);
	let newArr = [];
	let xArr = [];
	let yArr = [];

	for (let i = 0; i < N; i++) {

    let [a, b] = arr[i].split(" ").map( (el) => Number(el));

    newArr.push([a, b]);
    xArr.push(a);
    yArr.push(b);

	}

	for (let el of xArr) {
    for (let element of yArr) {

      let dist = newArr.map( ([x, y]) => Math.abs(x - el) + Math.abs(y - element));
			let temp = 0;

      dist.sort( (a, b) => a - b);
      dist.map( (el, idx) => {
        temp += el;
        answer[idx] = answer[idx] === -1 ? temp : Math.min(temp, answer[idx]);
      });

    }
	}

	return answer.join(" ");
}

console.log(solution(Number(input[0]), newInput));