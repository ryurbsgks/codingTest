// 홍준이는 축구 경기를 보고 있다. 그러다가 홍준이는 역시 두 팀 중 적어도 한 팀이 골을 소수로 득점할 확률이 궁금해 졌다. 축구 경기는 90분동안 이루어지고, 분석을 쉽게하기 위해서 경기를 5분 간격으로 나눴다. 처음 간격은 처음 5분이고, 두 번째 간격은 그 다음 5분, 그리고 이런식으로 나눈다. 경기가 진행되는 동안 각 간격에서 A팀이 득점할 확률과 B팀이 득점할 확률이 주어진다. 그리고, 각 간격에서 두 팀은 각각 많아야 한 골을 득점할 수 있다. 경기가 끝난 후 적어도 한 팀이 골을 소수로 득점할 확률을 구하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution() {

  let answer = 0;
	let [A, B] = [Number(input[0]), Number(input[1])];
  let arr = new Array(20).fill(0).map( () => new Array(20).fill(0).map( () => new Array(20).fill(0)));
	let a = A / 100;
  let b = B / 100;

	const isPrime = (n) => {
		if (n < 2) {
			return false;
		}

		for (let i = 2; i * i <= n; i++) {
			if (n % i === 0) {
				return false;
			}
		}

		return true;
	};

	arr[0][0][0] = 1.0;

  for (let i = 1; i <= 18; i++) {
    for (let j = 0; j <= i; j++) {
      for (let k = 0; k <= i; k++) {
        if (j > 0) {
					arr[i][j][k] += arr[i - 1][j - 1][k] * a * (1 - b);
				}

        if (k > 0) {
					arr[i][j][k] += arr[i - 1][j][k - 1] * (1 - a) * b;
				}
				
        if (j > 0 && k > 0) {
					arr[i][j][k] += arr[i - 1][j - 1][k - 1] * a * b;
				}

        arr[i][j][k] += arr[i - 1][j][k] * (1 - a) * (1 - b);
      }
    }
  }

  for (let i = 0; i <= 18; i++) {
    for (let j = 0; j <= 18; j++) {
      if (isPrime(i) || isPrime(j)) {
				answer += arr[18][i][j];
			}
    }
  }

	return answer.toFixed(9);
}

console.log(solution());