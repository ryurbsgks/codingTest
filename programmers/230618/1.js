// 게임 맵 최단거리

// ROR 게임은 두 팀으로 나누어서 진행하며, 상대 팀 진영을 먼저 파괴하면 이기는 게임입니다. 따라서, 각 팀은 상대 팀 진영에 최대한 빨리 도착하는 것이 유리합니다.
// 지금부터 당신은 한 팀의 팀원이 되어 게임을 진행하려고 합니다. 다음은 5 x 5 크기의 맵에, 당신의 캐릭터가 (행: 1, 열: 1) 위치에 있고, 상대 팀 진영은 (행: 5, 열: 5) 위치에 있는 경우의 예시입니다.
// 위 그림에서 검은색 부분은 벽으로 막혀있어 갈 수 없는 길이며, 흰색 부분은 갈 수 있는 길입니다. 캐릭터가 움직일 때는 동, 서, 남, 북 방향으로 한 칸씩 이동하며, 게임 맵을 벗어난 길은 갈 수 없습니다.
// 아래 예시는 캐릭터가 상대 팀 진영으로 가는 두 가지 방법을 나타내고 있습니다.
// 첫 번째 방법은 11개의 칸을 지나서 상대 팀 진영에 도착했습니다.
// 두 번째 방법은 15개의 칸을 지나서 상대팀 진영에 도착했습니다.
// 위 예시에서는 첫 번째 방법보다 더 빠르게 상대팀 진영에 도착하는 방법은 없으므로, 이 방법이 상대 팀 진영으로 가는 가장 빠른 방법입니다.
// 만약, 상대 팀이 자신의 팀 진영 주위에 벽을 세워두었다면 상대 팀 진영에 도착하지 못할 수도 있습니다. 예를 들어, 다음과 같은 경우에 당신의 캐릭터는 상대 팀 진영에 도착할 수 없습니다.
// 게임 맵의 상태 maps가 매개변수로 주어질 때, 캐릭터가 상대 팀 진영에 도착하기 위해서 지나가야 하는 칸의 개수의 최솟값을 return 하도록 solution 함수를 완성해주세요. 단, 상대 팀 진영에 도착할 수 없을 때는 -1을 return 해주세요.

function solution(maps) {
  var answer = 0;

  let dx = [0, 1, 0, -1];
  let dy = [1, 0, -1, 0];
  let visit = new Array(maps.length).fill(0).map( () => new Array(maps[0].length).fill(0));
  let queue = [[0, 0]];

  visit[0][0] = 1;

  if (maps[maps.length - 1][maps[0].length - 2] === 0 && maps[maps.length - 2][maps[0].length - 1] === 0) {
    return -1;
  }

  while (queue.length) {

    let [y, x] = queue.shift();

    for (let i = 0; i < 4; i++) {

      let X = x + dx[i];
      let Y = y + dy[i];

      if (Y < 0 || X < 0 || Y >= maps.length || X >= maps[0].length || maps[Y][X] === 0) {
        continue;
      }

      if (visit[Y][X]) {
        continue;
      }

      queue.push([Y, X]);
      visit[Y][X] = visit[y][x] + 1;
    }
  }

  answer = visit[maps.length - 1][maps[0].length - 1];

  if (!answer) {
    return -1;
  }

  return answer;
}

console.log(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]])) // 11
console.log(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]])) // -1