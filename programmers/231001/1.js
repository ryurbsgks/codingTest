// 교점에 별 만들기

// Ax + By + C = 0으로 표현할 수 있는 n개의 직선이 주어질 때, 이 직선의 교점 중 정수 좌표에 별을 그리려 합니다.
// 예를 들어, 다음과 같은 직선 5개를
// 2x - y + 4 = 0
// -2x - y + 4 = 0
// -y + 1 = 0
// 5x - 8y - 12 = 0
// 5x + 8y + 12 = 0
// 좌표 평면 위에 그리면 아래 그림과 같습니다.
// 이때, 모든 교점의 좌표는 (4, 1), (4, -4), (-4, -4), (-4, 1), (0, 4), (1.5, 1.0), (2.1, -0.19), (0, -1.5), (-2.1, -0.19), (-1.5, 1.0)입니다. 이 중 정수로만 표현되는 좌표는 (4, 1), (4, -4), (-4, -4), (-4, 1), (0, 4)입니다.
// 만약 정수로 표현되는 교점에 별을 그리면 다음과 같습니다.
// 위의 그림을 문자열로 나타낼 때, 별이 그려진 부분은 *, 빈 공간(격자선이 교차하는 지점)은 .으로 표현하면 다음과 같습니다.
// "..........."  
// ".....*....."  
// "..........."  
// "..........."  
// ".*.......*."  
// "..........."  
// "..........."  
// "..........."  
// "..........."  
// ".*.......*."  
// "..........."  
// 이때 격자판은 무한히 넓으니 모든 별을 포함하는 최소한의 크기만 나타내면 됩니다.
// 따라서 정답은
// "....*...."  
// "........."  
// "........."  
// "*.......*"  
// "........."  
// "........."  
// "........."  
// "........."  
// "*.......*"  
// 입니다.
// 직선 A, B, C에 대한 정보가 담긴 배열 line이 매개변수로 주어집니다. 이때 모든 별을 포함하는 최소 사각형을 return 하도록 solution 함수를 완성해주세요.

function solution(line) {
  var answer = [];

  let length = line.length;
  let num = Number.MAX_SAFE_INTEGER;
  let arr = [];
  let minX = num;
  let minY = num;
  let maxX = -num;
  let maxY = -num;

  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {

      let [a, b, e] = line[i];
      let [c, d, f] = line[j];
      let mod = a * d - b * c;

      if (!mod) {
        continue;
      }

      let xNumerator = b * f - e * d;
      let yNumerator = e * c - a * f;

      if (xNumerator % mod || yNumerator % mod) {
        continue;
      }

      let x = xNumerator / mod;
      let y = yNumerator / mod;

      arr.push([x, y]);
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      maxX = Math.max(maxX, x);
      maxY = Math.max(maxY, y);

    }
  }

  let newArr = [...Array(maxY - minY + 1)].map( () => [...Array(maxX - minX + 1)].map( () => "."));

  arr.map( ([x, y]) => {
    newArr[maxY - y][x - minX] = "*";
  });

  answer = newArr.map( (el) => el.join(""));

  return answer;
}

console.log(solution([[2, -1, 4], [-2, -1, 4], [0, -1, 1], [5, -8, -12], [5, 8, 12]])) // ["....*....", ".........", ".........", "*.......*", ".........", ".........", ".........", ".........", "*.......*"]
console.log(solution([[0, 1, -1], [1, 0, -1], [1, 0, 1]])) // ["*.*"]
console.log(solution([[1, -1, 0], [2, -1, 0]])) // ["*"]
console.log(solution([[1, -1, 0], [2, -1, 0], [4, -1, 0]])) // ["*"]