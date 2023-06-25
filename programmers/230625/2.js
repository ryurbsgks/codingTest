// 행렬의 곱셈

// 2차원 행렬 arr1과 arr2를 입력받아, arr1에 arr2를 곱한 결과를 반환하는 함수, solution을 완성해주세요.

function solution(arr1, arr2) {
  var answer = [[]];

  answer = Array.from(Array(arr1.length), () => Array(arr2[0].length).fill(0));

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2[0].length; j++) {

      let sum = 0;

      for (let k = 0; k < arr2.length; k++) {
        sum = sum + arr1[i][k] * arr2[k][j];
      }

      answer[i][j] = sum;
    }
  }
  
  return answer;
}

// (m * k) * (k * n) = (m * n)

console.log(solution([[1, 4], [3, 2], [4, 1]], [[3, 3], [3, 3]])) // [[15, 15], [15, 15], [15, 15]]
console.log(solution([[2, 3, 2], [4, 2, 4], [3, 1, 4]], [[5, 4, 3], [2, 4, 1], [3, 1, 1]])) // [[22, 22, 11], [36, 28, 18], [29, 20, 14]]