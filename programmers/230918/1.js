// 지형 이동

// N x N 크기인 정사각 격자 형태의 지형이 있습니다. 각 격자 칸은 1 x 1 크기이며, 숫자가 하나씩 적혀있습니다. 격자 칸에 적힌 숫자는 그 칸의 높이를 나타냅니다.
// 이 지형의 아무 칸에서나 출발해 모든 칸을 방문하는 탐험을 떠나려 합니다. 칸을 이동할 때는 상, 하, 좌, 우로 한 칸씩 이동할 수 있는데, 현재 칸과 이동하려는 칸의 높이 차가 height 이하여야 합니다. 높이 차가 height 보다 많이 나는 경우에는 사다리를 설치해서 이동할 수 있습니다. 이때, 사다리를 설치하는데 두 격자 칸의 높이차만큼 비용이 듭니다. 따라서, 최대한 적은 비용이 들도록 사다리를 설치해서 모든 칸으로 이동 가능하도록 해야 합니다. 설치할 수 있는 사다리 개수에 제한은 없으며, 설치한 사다리는 철거하지 않습니다.
// 각 격자칸의 높이가 담긴 2차원 배열 land와 이동 가능한 최대 높이차 height가 매개변수로 주어질 때, 모든 칸을 방문하기 위해 필요한 사다리 설치 비용의 최솟값을 return 하도록 solution 함수를 완성해주세요.

function solution(land, height) {
  var answer = 0;

  let length = land.length;
  let moves = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  let arr = [];
  let areas = [...Array(length)].map( () => [...Array(length)].map( () => 0));
  let area = 1;

  const range = (y, x) => {
    return y < 0 || y >= length || x < 0 || x >= length;
  };

	land.map( (el, idx) => {
		el.forEach( (element, index) => {
			if (!areas[idx][index]) {
				arr.push([idx, index]);
				areas[idx][index] = area;

				while (arr.length) {

					let [y, x] = arr.shift();

					for (let [my, mx] of moves) {

						let ny = y + my;
						let nx = x + mx;

						if (range(ny, nx)) {
							continue;
						}

						if (areas[ny][nx]) {
							continue;
						}

						if (Math.abs(land[y][x] - land[ny][nx]) > height) {
							continue;
						}

						arr.push([ny, nx]);
						areas[ny][nx] = area;

					}

				}

				area++;
			}
		});
	});

	let set = [...Array(area)].map( (el, idx) => idx);

  const find = (a) => {
		return set[a] = set[a] === a ? a : find(set[a]);
	};

  const union = (a, b) => {
    a = find(a);
    b = find(b);
    a > b ? set[a] = b : set[b] = a;
  };

  const parent = (a, b) => {
		return find(a) === find(b);
	};

	answer = areas.reduce( (acc, cur, idx) => {
		return cur.reduce( (accumulator, currentValue, index) => {
			for (let [my, mx] of moves) {

				let ny = idx + my;
				let nx = index + mx;

				if (range(ny, nx)) {
					continue;
				}

				if (currentValue == areas[ny][nx]) {
					continue;
				}

				accumulator.push([Math.abs(land[idx][index] - land[ny][nx]), currentValue, areas[ny][nx]]);

			}

			return accumulator;
		}, acc);
	}, []).sort( ([a], [b]) => {
		return a - b;
	}).reduce( (m, [cost, a, b]) => {
		if (parent(a, b)) {
			return m;
		}

		union(a, b);

		return m += cost;
	}, 0);

  return answer;
}

console.log(solution([[1, 4, 8, 10], [5, 5, 5, 5], [10, 10, 10, 10], [10, 10, 10, 20]], 3)) // 15
console.log(solution([[10, 11, 10, 11], [2, 21, 20, 10], [1, 20, 21, 11], [2, 1, 2, 1]], 1)) // 18