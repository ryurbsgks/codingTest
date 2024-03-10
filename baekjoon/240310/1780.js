// N×N크기의 행렬로 표현되는 종이가 있다. 종이의 각 칸에는 -1, 0, 1 중 하나가 저장되어 있다. 우리는 이 행렬을 다음과 같은 규칙에 따라 적절한 크기로 자르려고 한다.
// 1. 만약 종이가 모두 같은 수로 되어 있다면 이 종이를 그대로 사용한다.
// 2. (1)이 아닌 경우에는 종이를 같은 크기의 종이 9개로 자르고, 각각의 잘린 종이에 대해서 (1)의 과정을 반복한다.
// 이와 같이 종이를 잘랐을 때, -1로만 채워진 종이의 개수, 0으로만 채워진 종이의 개수, 1로만 채워진 종이의 개수를 구해내는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution(N) {

	let minusOne = 0;
	let zero = 0;
	let one = 0;
	let arr = [];
	
	const same = (y, x, n) => {

		let num = arr[y][x];

		for (let i = y; i < y + n; i++) {
			for (let j = x; j < x + n; j++) {
				if (num !== arr[i][j]) {
					return false;
				}
			}
		}

		return true;
	};
		
	const div = (y, x, n) => {
		if (same(y, x, n)) {
			if (arr[y][x] === -1) {
				minusOne++;
			} else if (arr[y][x] === 0) {
				zero++;
			} else if (arr[y][x] === 1) {
				one++;
			}
		} else {

			let volume = n / 3;

			for (let i = 0; i < 3; i++) {
				for (let j = 0; j < 3; j++) {
					div(volume * i + y, volume * j + x, volume);
				}
			}

		}
	};

  for (let i = 1; i <= N; i++) {
    arr.push(input[i].split(" ").map( (el) => Number(el)));
  }

  div(0, 0, N);

  return minusOne + "\n" + zero + "\n" + one;
}

console.log(solution(Number(input[0])));