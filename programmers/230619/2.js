// 3 x n 타일링

// 가로 길이가 2이고 세로의 길이가 1인 직사각형 모양의 타일이 있습니다. 이 직사각형 타일을 이용하여 세로의 길이가 3이고 가로의 길이가 n인 바닥을 가득 채우려고 합니다. 타일을 채울 때는 다음과 같이 2가지 방법이 있습니다
// 타일을 가로로 배치 하는 경우
// 타일을 세로로 배치 하는 경우
// 예를들어서 n이 8인 직사각형은 다음과 같이 채울 수 있습니다.
// 직사각형의 가로의 길이 n이 매개변수로 주어질 때, 이 직사각형을 채우는 방법의 수를 return 하는 solution 함수를 완성해주세요.

function solution(n) {
  var answer = 0;

  let arr = [0, 3, 11];
  let index = Math.floor(n / 2);

  if (n % 2 === 1) {
    return answer;
  }

  if (index < 3) {
    return arr[index];
  }

  for (let i = 3; i <= index; i++) {
    arr[i] = (arr[i - 1] * 3) + 2;

    for (let j = 1; j < i - 1; j++) {
      arr[i] = arr[i] + (arr[j] * 2);
    }

    arr[i] = arr[i] % 1000000007;
  }

  answer = arr[index];

  return answer;
}

console.log(solution(4)) // 11