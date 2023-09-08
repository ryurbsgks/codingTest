// 미로 탈출 명령어

// n x m 격자 미로가 주어집니다. 당신은 미로의 (x, y)에서 출발해 (r, c)로 이동해서 탈출해야 합니다.
// 단, 미로를 탈출하는 조건이 세 가지 있습니다.
// 격자의 바깥으로는 나갈 수 없습니다.
// (x, y)에서 (r, c)까지 이동하는 거리가 총 k여야 합니다. 이때, (x, y)와 (r, c)격자를 포함해, 같은 격자를 두 번 이상 방문해도 됩니다.
// 미로에서 탈출한 경로를 문자열로 나타냈을 때, 문자열이 사전 순으로 가장 빠른 경로로 탈출해야 합니다.
// 이동 경로는 다음과 같이 문자열로 바꿀 수 있습니다.
// l: 왼쪽으로 한 칸 이동
// r: 오른쪽으로 한 칸 이동
// u: 위쪽으로 한 칸 이동
// d: 아래쪽으로 한 칸 이동
// 예를 들어, 왼쪽으로 한 칸, 위로 한 칸, 왼쪽으로 한 칸 움직였다면, 문자열 "lul"로 나타낼 수 있습니다.
// 미로에서는 인접한 상, 하, 좌, 우 격자로 한 칸씩 이동할 수 있습니다.
// 예를 들어 다음과 같이 3 x 4 격자가 있다고 가정해 보겠습니다.
// ....
// ..S.
// E...
// 미로의 좌측 상단은 (1, 1)이고 우측 하단은 (3, 4)입니다. .은 빈 공간, S는 출발 지점, E는 탈출 지점입니다.
// 탈출까지 이동해야 하는 거리 k가 5라면 다음과 같은 경로로 탈출할 수 있습니다.
// lldud
// ulldd
// rdlll
// dllrl
// dllud
// ...
// 이때 dllrl보다 사전 순으로 빠른 경로로 탈출할 수는 없습니다.
// 격자의 크기를 뜻하는 정수 n, m, 출발 위치를 뜻하는 정수 x, y, 탈출 지점을 뜻하는 정수 r, c, 탈출까지 이동해야 하는 거리를 뜻하는 정수 k가 매개변수로 주어집니다. 이때, 미로를 탈출하기 위한 경로를 return 하도록 solution 함수를 완성해주세요. 단, 위 조건대로 미로를 탈출할 수 없는 경우 "impossible"을 return 해야 합니다.

function solution(n, m, x, y, r, c, k) {
  var answer = '';

  let arr = Array.from({ length: n + 1 }, () => new Array(m + 1).fill("."));
  let fastAnswer = k - (Math.abs(x - r) + Math.abs(y - c));
  let d = [
    [1, 0],
    [0, -1],
    [0, 1],
    [-1, 0],
  ];
  let str = {
    0: "d",
    1: "l",
    2: "r",
    3: "u",
  };

  const dfs = (L, py, px, sum, dist) => {
    if (L > k) {
      return;
    }

    if (dist > k) {
      return;
    }

    if (L === k && py === r && px === c) {
      if (answer > sum) {
        answer = sum;

        return;
      }
    }
    
    if (answer !== "z".repeat(k)) {
      return;
    }

    for (let i = 0; i < 4; i++) {
      dy = py + d[i][0];
      dx = px + d[i][1];

      if (dy <= n && dy > 0 && dx <= m && dx > 0) {
        dfs(L + 1, dy, dx, sum + str[i], Math.abs(dy - r) + Math.abs(dx - c) + L + 1);
      }
    }
  };

  arr[x][y] = "S";
  arr[r][c] = "E";
  answer = "z".repeat(k);

  if (fastAnswer < 0 || fastAnswer % 2 != 0) {
    return "impossible";
  }

  dfs(0, x, y, "", k);

  if (answer === "z".repeat(k)) {
    return "impossible";
  }

  return answer;
}

console.log(solution(3, 4, 2, 3, 3, 1, 5)) // "dllrl"
console.log(solution(2, 2, 1, 1, 2, 2, 2)) // "dr"
console.log(solution(3, 3, 1, 2, 3, 3, 4)) // "impossible"