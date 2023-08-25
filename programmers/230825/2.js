// 카드 짝 맞추기

// 게임 개발자인 베로니는 개발 연습을 위해 다음과 같은 간단한 카드 짝맞추기 보드 게임을 개발해 보려고 합니다.
// 게임이 시작되면 화면에는 카드 16장이 뒷면을 위로하여 4 x 4 크기의 격자 형태로 표시되어 있습니다. 각 카드의 앞면에는 카카오프렌즈 캐릭터 그림이 그려져 있으며, 8가지의 캐릭터 그림이 그려진 카드가 각기 2장씩 화면에 무작위로 배치되어 있습니다.
// 유저가 카드를 2장 선택하여 앞면으로 뒤집었을 때 같은 그림이 그려진 카드면 해당 카드는 게임 화면에서 사라지며, 같은 그림이 아니라면 원래 상태로 뒷면이 보이도록 뒤집힙니다. 이와 같은 방법으로 모든 카드를 화면에서 사라지게 하면 게임이 종료됩니다.
// 게임에서 카드를 선택하는 방법은 다음과 같습니다.
// 카드는 커서를 이용해서 선택할 수 있습니다.
// 커서는 4 x 4 화면에서 유저가 선택한 현재 위치를 표시하는 "굵고 빨간 테두리 상자"를 의미합니다.
// 커서는 [Ctrl] 키와 방향키에 의해 이동되며 키 조작법은 다음과 같습니다.
// 방향키 ←, ↑, ↓, → 중 하나를 누르면, 커서가 누른 키 방향으로 1칸 이동합니다.
// [Ctrl] 키를 누른 상태에서 방향키 ←, ↑, ↓, → 중 하나를 누르면, 누른 키 방향에 있는 가장 가까운 카드로 한번에 이동합니다.
// 만약, 해당 방향에 카드가 하나도 없다면 그 방향의 가장 마지막 칸으로 이동합니다.
// 만약, 누른 키 방향으로 이동 가능한 카드 또는 빈 공간이 없어 이동할 수 없다면 커서는 움직이지 않습니다.
// 커서가 위치한 카드를 뒤집기 위해서는 [Enter] 키를 입력합니다.
// [Enter] 키를 입력해서 카드를 뒤집었을 때
// 앞면이 보이는 카드가 1장 뿐이라면 그림을 맞출 수 없으므로 두번째 카드를 뒤집을 때 까지 앞면을 유지합니다.
// 앞면이 보이는 카드가 2장이 된 경우, 두개의 카드에 그려진 그림이 같으면 해당 카드들이 화면에서 사라지며, 그림이 다르다면 두 카드 모두 뒷면이 보이도록 다시 뒤집힙니다.
// "베로니"는 게임 진행 중 카드의 짝을 맞춰 몇 장 제거된 상태에서 카드 앞면의 그림을 알고 있다면, 남은 카드를 모두 제거하는데 필요한 키 조작 횟수의 최솟값을 구해 보려고 합니다. 키 조작 횟수는 방향키와 [Enter] 키를 누르는 동작을 각각 조작 횟수 1로 계산하며, [Ctrl] 키와 방향키를 함께 누르는 동작 또한 조작 횟수 1로 계산합니다.
// 다음은 카드가 몇 장 제거된 상태의 게임 화면에서 커서를 이동하는 예시입니다.
// 아래 그림에서 빈 칸은 이미 카드가 제거되어 없어진 칸을 의미하며, 그림이 그려진 칸은 카드 앞 면에 그려진 그림을 나타냅니다.
// 예시에서 커서는 두번째 행, 첫번째 열 위치에서 시작하였습니다.
// [Enter] 입력, ↓ 이동, [Ctrl]+→ 이동, [Enter] 입력 = 키 조작 4회
// [Ctrl]+↑ 이동, [Enter] 입력, [Ctrl]+← 이동, [Ctrl]+↓ 이동, [Enter] 입력 = 키 조작 5회
// [Ctrl]+→ 이동, [Enter] 입력, [Ctrl]+↑ 이동, [Ctrl]+← 이동, [Enter] 입력 = 키 조작 5회
// 위와 같은 방법으로 커서를 이동하여 카드를 선택하고 그림을 맞추어 카드를 모두 제거하기 위해서는 총 14번(방향 이동 8번, [Enter] 키 입력 6번)의 키 조작 횟수가 필요합니다.
// 현재 카드가 놓인 상태를 나타내는 2차원 배열 board와 커서의 처음 위치 r, c가 매개변수로 주어질 때, 모든 카드를 제거하기 위한 키 조작 횟수의 최솟값을 return 하도록 solution 함수를 완성해 주세요.

function solution(board, r, c) {
  var answer = 0;

  let cardPos = new Map();
  let allRemoved = 1;
  
  answer = Infinity;

  const bfs = (removed, src, dst) => {

    const isOutOfBounds = (x, y) => {
      return x < 0 || x > 3 || y < 0 || y > 3;
    };

    let di = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let visited = Array.from(new Array(4), () => new Array(4).fill(false));
    let queue = [[...src, 0]];

    while (queue.length) {

      let [x, y, cnt] = queue.shift();

      if (x === dst[0] && y === dst[1]) {
        return cnt;
      }

      for (let [dx, dy] of di) {

        let [nx, ny] = [x + dx, y + dy];

        if (isOutOfBounds(nx, ny)) {
          continue;
        }

        if (!visited[nx][ny]) {
          visited[nx][ny] = true;
          queue.push([nx, ny, cnt + 1]);
        }

        for (let i = 0; i < 2; i++) {
          if (!(removed & (1 << board[nx][ny]))) {
            break;
          }

          if (isOutOfBounds(nx + dx, ny + dy)) {
            break;
          }

          [nx, ny] = [nx + dx, ny + dy];
        }

        if (!visited[nx][ny]) {
          visited[nx][ny] = true;
          queue.push([nx, ny, cnt + 1]);
        }
      }
    }

    return Infinity;
  }

  const permutate = (cnt, removed, src) => {

    if (removed === allRemoved) {
      answer = Math.min(answer, cnt);

      return;
    }

    for (let [card, pos] of cardPos.entries()) {
      if (removed & (1 << card)) {
        continue;
      }

      let one = bfs(removed, src, pos[0]) + bfs(removed, pos[0], pos[1]) + 2;
      let two = bfs(removed, src, pos[1]) + bfs(removed, pos[1], pos[0]) + 2;

      permutate(cnt + one, removed | (1 << card), pos[1]);
      permutate(cnt + two, removed | (1 << card), pos[0]);
    }

  }

  board.map( (row, x) => {
    row.map( (card, y) => {
      if (!card) {
        return;
      }

      if (cardPos.has(card)) {
        cardPos.get(card).push([x, y]);

        return;
      }

      cardPos.set(card, [[x, y]]);
      allRemoved |= 1 << card;
    });
  });

  permutate(0, 1, [r, c]);

  return answer;
}

console.log(solution([[1,0,0,3],[2,0,0,0],[0,0,0,2],[3,0,1,0]], 1, 0)) // 14
console.log(solution([[3,0,0,2],[0,0,1,0],[0,1,0,0],[2,0,0,3]], 0, 1)) // 16