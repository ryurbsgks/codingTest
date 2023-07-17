// 거리두기 확인하기

// 개발자를 희망하는 죠르디가 카카오에 면접을 보러 왔습니다.
// 코로나 바이러스 감염 예방을 위해 응시자들은 거리를 둬서 대기를 해야하는데 개발 직군 면접인 만큼
// 아래와 같은 규칙으로 대기실에 거리를 두고 앉도록 안내하고 있습니다.
// 대기실은 5개이며, 각 대기실은 5x5 크기입니다.
// 거리두기를 위하여 응시자들 끼리는 맨해튼 거리1가 2 이하로 앉지 말아 주세요.
// 단 응시자가 앉아있는 자리 사이가 파티션으로 막혀 있을 경우에는 허용합니다.
// 예를 들어,
// 위 그림처럼 자리 사이에 파티션이 존재한다면 맨해튼 거리가 2여도 거리두기를 지킨 것입니다.	
// 위 그림처럼 파티션을 사이에 두고 앉은 경우도 거리두기를 지킨 것입니다.	
// 위 그림처럼 자리 사이가 맨해튼 거리 2이고 사이에 빈 테이블이 있는 경우는 거리두기를 지키지 않은 것입니다.
// 응시자가 앉아있는 자리(P)를 의미합니다.	
// 빈 테이블(O)을 의미합니다.	
// 파티션(X)을 의미합니다.
// 5개의 대기실을 본 죠르디는 각 대기실에서 응시자들이 거리두기를 잘 기키고 있는지 알고 싶어졌습니다. 자리에 앉아있는 응시자들의 정보와 대기실 구조를 대기실별로 담은 2차원 문자열 배열 places가 매개변수로 주어집니다. 각 대기실별로 거리두기를 지키고 있으면 1을, 한 명이라도 지키지 않고 있으면 0을 배열에 담아 return 하도록 solution 함수를 완성해 주세요.

function solution(places) {
  var answer = [];

  let X = [0, 0, -1, 1];
  let Y = [-1, 1, 0, 0];

  const bfs = (start, place) => {

    let arr = [...Array(5)].map( () => Array(5).fill(false));
    let queue = [start];

    while (queue.length) {

      let [x, y, depth] = queue.shift();

      if (!arr[x][y]) {
        arr[x][y] = true;

        if (depth && place[x][y] === "P") {
          return false;
        }

        X.map( (el, index) => {

          let newX = x + el;
          let newY = y + Y[index];

          if (newX >= 0 && newX < 5 && newY >= 0 && newY < 5 && depth < 2 && place[newX][newY] !== "X") {
            queue.push([newX, newY, depth + 1]);
          }

        });
      }

    }

    return true;
  };

  for (let el of places) {

    let num = 1;

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (el[i][j] === "P" && !bfs([i, j, 0], el)) {
          num = 0;
          break;
        }
      }
    }

    answer.push(num);
  }

  return answer;
}

console.log(solution([["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]])) // [1, 0, 1, 1, 1]