// 크기가 무한인 정사각형 모눈종이가 있다. 모눈종이의 각 정사각형은 행과 열의 쌍으로 표현할 수 있다.
// 이 모눈종이 전체를 양의 정수의 소용돌이 모양으로 채울 것이다. 일단 숫자 1을 0행 0열에 쓴다. 그리고 나서 0행 1열에 숫자 2를 쓴다. 거기서 부터 소용돌이는 반시계 방향으로 시작된다. 다음 숫자는 다음과 같이 채우면 된다.
// -3 -2 -1  0  1  2  3
// --------------------
// -3 |37 36 35 34 33 32 31
// -2 |38 17 16 15 14 13 30
// -1 |39 18  5  4  3 12 29
// 0 |40 19  6  1  2 11 28
// 1 |41 20  7  8  9 10 27
// 2 |42 21 22 23 24 25 26
// 3 |43 44 45 46 47 48 49
// 이 문제는 위와 같이 채운 것을 예쁘게 출력하면 된다. r1, c1, r2, c2가 입력으로 주어진다. r1, c1은 가장 왼쪽 위 칸이고, r2, c2는 가장 오른쪽 아래 칸이다.
// 예쁘게 출력한다는 것은 다음과 같이 출력하는 것이다.
// 출력은 r1행부터 r2행까지 차례대로 출력한다.
// 각 원소는 공백으로 구분한다.
// 모든 행은 같은 길이를 가져야 한다.
// 공백의 길이는 최소로 해야 한다.
// 모든 숫자의 길이(앞에 붙는 공백을 포함)는 같아야 한다.
// 만약 수의 길이가 가장 길이가 긴 수보다 작다면, 왼쪽에서부터 공백을 삽입해 길이를 맞춘다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split(" ");

function solution(arr) {

  let answer = "";
  let [r1, c1, r2, c2] = arr;
  let map = new Array(50).fill(0).map( () => new Array(5).fill(0));
  let x = 0;
  let y = 0;
  let dirCount = 0;
  let lineCount = 1;
  let step = 0;
  let num = 1;
  let dir = 0;
  let mapCount = 0;
  let maxNum = -1;
  let maxLength = -1;
  let dx = [1, 0, -1, 0];
  let dy = [0, -1, 0, 1];
  
  while (true) {
    if (r1 <= y && y <= r2 && c1 <= x && x <= c2) {
      maxNum = Math.max(maxNum, num);
      map[y - r1][x - c1] = num;
      mapCount++;

      if (mapCount === (r2 - r1 + 1) * (c2 - c1 + 1)) {
        break;
      }
    }

    y += dy[dir];
    x += dx[dir];
    step++;
    num++;

    if (step === lineCount) {
      dirCount++;
      step = 0;
      dir = (dir + 1) % 4;

      if (dirCount === 2) {
        dirCount = 0;
        lineCount++;
      }
    }
  }

  maxLength = String(maxNum).length;

  for (let i = 0; i < r2 - r1 + 1; i++) {
    for (let j = 0; j < c2 - c1 + 1; j++) {
        
      let stringOut = String(map[i][j]);

      if (stringOut.length < maxLength) {
        for (let k = 0; k < maxLength - stringOut.length; k++) {
          answer += " ";
        }
      }

      answer += stringOut + " ";

    }
    
    answer += "\n";
  }

  return answer.slice(0, answer.length - 1);
}

console.log(solution(input.map( (el) => Number(el))));