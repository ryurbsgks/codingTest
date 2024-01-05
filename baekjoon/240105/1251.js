// 두 개의 이진수를 입력받아 이를 더하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split(" ");

function solution() {

	let answer = 0;
	let [a, b] = input;

	answer = (parseInt(a, 2) + parseInt(b, 2)).toString(2);

	return answer;
}

console.log(solution());