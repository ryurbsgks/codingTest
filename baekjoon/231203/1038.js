// 음이 아닌 정수 X의 자릿수가 가장 큰 자릿수부터 작은 자릿수까지 감소한다면, 그 수를 감소하는 수라고 한다. 예를 들어, 321과 950은 감소하는 수지만, 322와 958은 아니다. N번째 감소하는 수를 출력하는 프로그램을 작성하시오. 0은 0번째 감소하는 수이고, 1은 1번째 감소하는 수이다. 만약 N번째 감소하는 수가 없다면 -1을 출력한다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim();

function solution(N) {

	let arr = [];

	const DecreaseNumber = (now, last) => {
		for (let i = last - 1; i >= 0; i--) {
			arr.push(now * 10 + i);
			DecreaseNumber(now * 10 + i, i);
		}
	};

	for (let i = 0; i <= 9; i++) {
		arr.push(i);
		DecreaseNumber(i, i);
	}

	arr.sort( (a, b) => a - b);

	return N >= arr.length ? -1 : arr[N];
}

console.log(solution(Number(input)));