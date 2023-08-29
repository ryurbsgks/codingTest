// 아이템 줍기

// 다음과 같은 다각형 모양 지형에서 캐릭터가 아이템을 줍기 위해 이동하려 합니다.
// 지형은 각 변이 x축, y축과 평행한 직사각형이 겹쳐진 형태로 표현하며, 캐릭터는 이 다각형의 둘레(굵은 선)를 따라서 이동합니다.
// 만약 직사각형을 겹친 후 다음과 같이 중앙에 빈 공간이 생기는 경우, 다각형의 가장 바깥쪽 테두리가 캐릭터의 이동 경로가 됩니다.
// 단, 서로 다른 두 직사각형의 x축 좌표 또는 y축 좌표가 같은 경우는 없습니다.
// 즉, 위 그림처럼 서로 다른 두 직사각형이 꼭짓점에서 만나거나, 변이 겹치는 경우 등은 없습니다.
// 다음 그림과 같이 지형이 2개 이상으로 분리된 경우도 없습니다.
// 한 직사각형이 다른 직사각형 안에 완전히 포함되는 경우 또한 없습니다.
// 지형을 나타내는 직사각형이 담긴 2차원 배열 rectangle, 초기 캐릭터의 위치 characterX, characterY, 아이템의 위치 itemX, itemY가 solution 함수의 매개변수로 주어질 때, 캐릭터가 아이템을 줍기 위해 이동해야 하는 가장 짧은 거리를 return 하도록 solution 함수를 완성해주세요.

function solution(rectangle, characterX, characterY, itemX, itemY) {
  var answer = 0;

  let map = Array.from(new Array(103).fill(0), () => new Array(103).fill(0));
  let doubleRectangle = rectangle.map( (el) => el.map( (element) => element * 2));
  let directionX = [1, -1, 0, 0];
  let directionY = [0, 0, 1, -1];
  
  doubleRectangle.map( ([x1, y1, x2, y2]) => {
    for (let i = y1; i <= y2; i++) {
      for (let j = x1; j <= x2; j++) {
        if (j === x1 || j === x2 || i === y1 || i === y2) {
          if (map[j][i] === 1) {
            continue;
          } else {
            map[j][i] += 1;
          }
        } else {
          map[j][i] += 2;
        }
      }
    }
  });

  characterX *= 2;
  characterY *= 2;
  itemX *= 2;
  itemY *= 2;
  map[characterX][characterY] += 100;

  let queue = [[characterX, characterY, 0]];

  while (queue.length) {

    let [currentX, currentY, count] = queue.shift();

    if (currentX === itemX && currentY === itemY) {
      return count / 2;
    }

    for (let i = 0; i < 4; i++) {

      let [nX, nY] = [currentX + directionX[i], currentY + directionY[i]];

      if (nX >= 0 && nX < 101 && nY >= 0 && nY < 101) {
        if (map[nX][nY] === 1) {
          map[nX][nY] += 100;
          queue.push([nX, nY, count + 1]);
        }
      }
  
    }

  }

  return answer;
}

console.log(solution([[1,1,7,4],[3,2,5,5],[4,3,6,9],[2,6,8,8]], 1, 3, 7, 8)) // 17
console.log(solution([[1,1,8,4],[2,2,4,9],[3,6,9,8],[6,3,7,7]], 9, 7, 6, 1)) // 11
console.log(solution([[1,1,5,7]], 1, 1, 4, 7)) // 9
console.log(solution([[2,1,7,5],[6,4,10,10]], 3, 1, 7, 10)) // 15
console.log(solution([[2,2,5,5],[1,3,6,4],[3,1,4,6]], 1, 4, 6, 3)) // 10