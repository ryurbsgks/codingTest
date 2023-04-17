// 직사각형 넓이 구하기

// 2차원 좌표 평면에 변이 축과 평행한 직사각형이 있습니다. 직사각형 네 꼭짓점의 좌표 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가 담겨있는 배열 dots가 매개변수로 주어질 때, 직사각형의 넓이를 return 하도록 solution 함수를 완성해보세요.

function solution(dots) { 
  var answer = 0;

  let x = dots.map( (el) => el[0]).filter( (el, index) => dots.map( (el) => el[0]).indexOf(el) === index);
  let y = dots.map( (el) => el[1]).filter( (el, index) => dots.map( (el) => el[1]).indexOf(el) === index);

  answer = Math.abs(x[0] - x[1]) * Math.abs(y[0] - y[1]);
  
  return answer;
}

console.log(solution([[1, 1], [2, 1], [2, 2], [1, 2]])) // 1
console.log(solution([[-1, -1], [1, 1], [1, -1], [-1, 1]])) // 4