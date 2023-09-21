// 짝수 행 세기

// 모든 수가 0 또는 1로 이루어진 2차원 배열 a가 주어집니다. 다음 조건을 모두 만족하는 2차원 배열 b의 경우의 수를 (107 + 19)로 나눈 나머지를 return 하도록 solution 함수를 완성해주세요.

function solution(a) {
  var answer = -1;

  let row = a.length;
  let col = a[0].length;
  let arr = new Array(row + 1).fill().map( (el) => new Array(row + 1).fill(0));
  let newArr = new Array(col).fill(0);
  let array = new Array(col + 1).fill().map( (el) => new Array(row + 1).fill(0));

  arr[0][0] = 1;
  
  for (let i = 1; i <= row; i++) {
    for (let j = 0; j <= i; j++) {
      if (j === 0) {
        arr[i][j] = 1;
      } else if (i === j) {
        arr[i][j] = 1;
      } else {
        arr[i][j] = (arr[i - 1][j - 1] + arr[i - 1][j]) % (1e7 + 19);
      }
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (a[i][j]) {
        newArr[j]++;
      }
    }
  }

  array[1][row - newArr[0]] = arr[row][row - newArr[0]];

  for (let i = 1; i <= col; i++) {
    for (let j = 0; j <= row; j++) {
      if (!array[i][j]) {
        continue;
      }
      
      for (let k = 0; k <= newArr[i]; k++) {

        let next = (j - k) + (newArr[i] - k);
        
        if (next > row || j < k) {
          continue;
        }
        
        let cases = (arr[j][k] * arr[row - j][newArr[i] - k]) % (1e7 + 19);
        
        array[i + 1][next] += (array[i][j] * cases) % (1e7 + 19);

      }
    }
  }

  answer = array[col][row]

  return answer;
}

console.log(solution([[0,1,0],[1,1,1],[1,1,0],[0,1,1]])) // 6
console.log(solution([[1,0,0],[1,0,0]])) // 0
console.log(solution([[1,0,0,1,1],[0,0,0,0,0],[1,1,0,0,0],[0,0,0,0,1]])) // 72