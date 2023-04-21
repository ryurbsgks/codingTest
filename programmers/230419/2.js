// 평행

// 점 네 개의 좌표를 담은 이차원 배열  dots가 다음과 같이 매개변수로 주어집니다.
// [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]
// 주어진 네 개의 점을 두 개씩 이었을 때, 두 직선이 평행이 되는 경우가 있으면 1을 없으면 0을 return 하도록 solution 함수를 완성해보세요.

function solution(dots) {
  var answer = 0;

  const a = (x, y) => {
    return (y[1] - x[1]) / (y[0] - x[0]);
  };

  if (a(dots[0], dots[1]) === a(dots[2], dots[3])) {
    return answer = 1;
  }
  
  if (a(dots[0], dots[2]) === a(dots[1], dots[3])) {
    return answer = 1;
  }
  
  if (a(dots[0], dots[3]) === a(dots[1], dots[2])) {
    return answer = 1;
  }
  
  return answer;
}

console.log(solution([[1, 4], [9, 2], [3, 8], [11, 6]])) // 1
console.log(solution([[3, 5], [4, 1], [2, 4], [5, 10]])) // 0