// 안전지대

// 다음 그림과 같이 지뢰가 있는 지역과 지뢰에 인접한 위, 아래, 좌, 우 대각선 칸을 모두 위험지역으로 분류합니다.
// 지뢰는 2차원 배열 board에 1로 표시되어 있고 board에는 지뢰가 매설 된 지역 1과, 지뢰가 없는 지역 0만 존재합니다.
// 지뢰가 매설된 지역의 지도 board가 매개변수로 주어질 때, 안전한 지역의 칸 수를 return하도록 solution 함수를 완성해주세요.

function solution(board) {
  var answer = 0;

  let newArr = Array.from(Array(board.length + 2), () => Array(board.length + 2).fill(1));

  newArr.map( (el, index) => {
    if (index !== 0 && index !== board.length + 1) {
      el.map( (el, idx) => {
        if (idx !== 0 && idx !== board.length + 1) {
          newArr[index][idx] = 0;
        }
      });
    }
  });

  board.map( (el, index) => {
    el.map( (el, idx) => {
      if (el === 1) {
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            newArr[index + i][idx + j] = 1;
          }
        }
      }
    });
  });

  newArr.map( (el) => {
    el.map( (el) => {
      if (el === 0) {
        answer++;
      }
    });
  });

  return answer;
}

console.log(solution([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]])) // 16
console.log(solution([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 1, 0], [0, 0, 0, 0, 0]])) // 13
console.log(solution([[1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]])) // 0