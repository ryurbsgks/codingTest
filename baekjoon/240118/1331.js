// 나이트 투어는 체스판에서 나이트가 모든 칸을 정확히 한 번씩 방문하며, 마지막으로 방문하는 칸에서 시작점으로 돌아올 수 있는 경로이다. 다음 그림은 나이트 투어의 한 예이다.
// 영식이는 6×6 체스판 위에서 또 다른 나이트 투어의 경로를 찾으려고 한다. 체스판의 한 칸은 A, B, C, D, E, F 중에서 하나와 1, 2, 3, 4, 5, 6 중에서 하나를 이어 붙인 것으로 나타낼 수 있다. 영식이의 나이트 투어 경로가 주어질 때, 이것이 올바른 것이면 Valid, 올바르지 않으면 Invalid를 출력하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution() {

	let answer = "";
	let arr = [];
	let cnt = 1;

	const check = (now, dest) => {
		if (Math.abs(now.charCodeAt(0) - dest.charCodeAt(0)) === 2 && Math.abs(Number(now[1]) - Number(dest[1])) === 1) {
			return 1;
		} else if (Math.abs(now.charCodeAt(0) - dest.charCodeAt(0)) === 1 && Math.abs(Number(now[1]) - Number(dest[1])) === 2) {
			return 1;
		} else {
			return 0;
		}
	};

	for (let i = 0; i < input.length; i++) {

		let str = input[i];
	
		if (i === 0) {
			arr.push(str);
			now = str;
		} else {

			let dest = str;

			arr.push(dest);
	
			if (check(now, dest) === 1) {
				cnt += 1;
				now = dest;
			} else {
				answer = "Invalid"

				return answer;
			}
	
			if (i === input.length - 1) {
				if (cnt === 36 && new Set(arr).size === 36 && check(arr[0], arr[35])) {
					answer = "Valid";
				} else {
					answer = "Invalid";
				}
			}

		}

	}

	return answer;
}

console.log(solution());