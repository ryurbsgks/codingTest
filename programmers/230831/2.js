// 코딩 테스트 공부

// 당신은 코딩 테스트를 준비하기 위해 공부하려고 합니다. 코딩 테스트 문제를 풀기 위해서는 알고리즘에 대한 지식과 코드를 구현하는 능력이 필요합니다.
// 알고리즘에 대한 지식은 알고력, 코드를 구현하는 능력은 코딩력이라고 표현합니다. 알고력과 코딩력은 0 이상의 정수로 표현됩니다.
// 문제를 풀기 위해서는 문제가 요구하는 일정 이상의 알고력과 코딩력이 필요합니다.
// 예를 들어, 당신의 현재 알고력이 15, 코딩력이 10이라고 가정해보겠습니다.
// A라는 문제가 알고력 10, 코딩력 10을 요구한다면 A 문제를 풀 수 있습니다.
// B라는 문제가 알고력 10, 코딩력 20을 요구한다면 코딩력이 부족하기 때문에 B 문제를 풀 수 없습니다.
// 풀 수 없는 문제를 해결하기 위해서는 알고력과 코딩력을 높여야 합니다. 알고력과 코딩력을 높이기 위한 다음과 같은 방법들이 있습니다.
// 알고력을 높이기 위해 알고리즘 공부를 합니다. 알고력 1을 높이기 위해서 1의 시간이 필요합니다.
// 코딩력을 높이기 위해 코딩 공부를 합니다. 코딩력 1을 높이기 위해서 1의 시간이 필요합니다.
// 현재 풀 수 있는 문제 중 하나를 풀어 알고력과 코딩력을 높입니다. 각 문제마다 문제를 풀면 올라가는 알고력과 코딩력이 정해져 있습니다.
// 문제를 하나 푸는 데는 문제가 요구하는 시간이 필요하며 같은 문제를 여러 번 푸는 것이 가능합니다.
// 당신은 주어진 모든 문제들을 풀 수 있는 알고력과 코딩력을 얻는 최단시간을 구하려 합니다.
// 초기의 알고력과 코딩력을 담은 정수 alp와 cop, 문제의 정보를 담은 2차원 정수 배열 problems가 매개변수로 주어졌을 때, 모든 문제들을 풀 수 있는 알고력과 코딩력을 얻는 최단시간을 return 하도록 solution 함수를 작성해주세요.

function solution(alp, cop, problems) {
  var answer = 0;

	let targetAlp = 0;
	let targetCop = 0;
	let visit = [];

	function DFS(a, c, cnt, problems) {
		if (targetAlp < a) {
			a = targetAlp;
		}

		if (targetCop < c) {
			c = targetCop;
		}

		if (visit[a][c] <= cnt) {
			return;
		}

		visit[a][c] = Math.min(visit[a][c], cnt);

		if (a === targetAlp && c === targetCop) {
			return;
		}

		for (let i = 0; i < problems.length; ++i) {
			if (a >= problems[i][0] && c >= problems[i][1]) {

				let nextAlp = a + problems[i][2];
				let nextCop = c + problems[i][3];

				DFS(nextAlp, nextCop, cnt + problems[i][4], problems);

			}
		}

		DFS(a + 1, c, cnt + 1, problems);
		DFS(a, c + 1, cnt + 1, problems);    
	}

  for (let i = 0; i < problems.length; ++i) {
    targetAlp = Math.max(targetAlp, problems[i][0]);
    targetCop = Math.max(targetCop, problems[i][1]);
  }

	for (let i = 0; i < 151; ++i) {

	  let temp = [];

	  for (let j = 0; j < 151; ++j) {
	    temp.push(987654321);
	  }

	  visit.push(temp);

	}

	DFS(alp, cop, 0, problems);
	answer = visit[targetAlp][targetCop];

  return answer;
}

console.log(solution(10, 10, [[10,15,2,1,2],[20,20,3,3,4]])) // 15
console.log(solution(0, 0, [[0,0,2,1,2],[4,5,3,1,2],[4,11,4,0,2],[10,4,0,4,2]])) // 13