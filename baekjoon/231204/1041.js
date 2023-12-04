// 주사위는 위와 같이 생겼다. 주사위의 여섯 면에는 수가 쓰여 있다. 위의 전개도를 수가 밖으로 나오게 접는다.
// A, B, C, D, E, F에 쓰여 있는 수가 주어진다.
// 지민이는 현재 동일한 주사위를 N3개 가지고 있다. 이 주사위를 적절히 회전시키고 쌓아서, N×N×N크기의 정육면체를 만들려고 한다. 이 정육면체는 탁자위에 있으므로, 5개의 면만 보인다.
// N과 주사위에 쓰여 있는 수가 주어질 때, 보이는 5개의 면에 쓰여 있는 수의 합의 최솟값을 출력하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution(arr) {

	let answer = 0;
  let N = Number(arr[0]);
	let dice = arr[1].split(" ").map( (el) => Number(el));
	let min1 = 51;
	let min2 = 101;
	let min3 = 151;
	let max1 = 0;
	
	for (let i = 0; i < 6; i++) {
		answer += dice[i];
		max1 = Math.max(max1, dice[i]);
	}

	if (N === 1) {
		return answer - max1;
	}

	for (let i = 0; i < 6; i++) {
		min1 = Math.min(min1, dice[i]);

		for (let j = i + 1; j < 6; j++) {
			if (i + j === 5) {
				continue;
			}

			min2 = Math.min(min2, dice[i] + dice[j]);
		
			for (let k = j + 1; k < 6; k++) {
				if (j + k === 5 || k + i === 5) {
					continue;
				}

				min3 = Math.min(min3, dice[i] + dice[j] + dice[k]);
			}
		}
	}

	answer = 0;
	answer += (5 * N * N - 16 * N + 12) * min1;
	answer += 4 * min3;
	answer += (8 * N - 12) * min2;

	return answer;
}

console.log(solution(input));