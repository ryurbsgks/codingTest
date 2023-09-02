// 2차원 동전 뒤집기

// 한수는 직사각형 모양의 공간에 놓인 동전들을 뒤집는 놀이를 하고 있습니다. 모든 동전들은 앞과 뒤가 구분되어 있으며, 동전을 뒤집기 위해서는 같은 줄에 있는 모든 동전을 뒤집어야 합니다. 동전들의 초기 상태와 목표 상태가 주어졌을 때, 초기 상태에서 최소 몇 번의 동전을 뒤집어야 목표 상태가 되는지 알아봅시다.
// 예를 들어, 위 그림에서 맨 왼쪽이 초기 상태, 맨 오른쪽이 목표 상태인 경우에 대해 알아봅시다. 그림에서 검은색 원은 앞면인 동전, 흰색 원은 뒷면인 동전을 의미합니다. 초기 상태에서 2행과 4행의 돌들을 뒤집으면, 두 번째 그림이 됩니다. 그 후, 2열, 4열, 5열의 돌들을 순서대로 뒤집는 다면, 총 5번의 동전 뒤집기를 통해 목표 상태가 되며, 이 경우가 최소인 경우입니다.
// 직사각형 모양의 공간에 놓인 동전들의 초기 상태를 나타내는 2차원 정수 배열 beginning, 목표 상태를 나타내는 target이 주어졌을 때, 초기 상태에서 목표 상태로 만들기 위해 필요한 동전 뒤집기 횟수의 최솟값을 return 하는 solution 함수를 완성하세요. 단, 목표 상태를 만들지 못하는 경우에는 -1을 return 합니다.

function solution(beginning, target) {
  var answer = 0;

  let row = beginning.length;
  let col = beginning[0].length;
  let beginningList = makeList(beginning, row, col);
  let targetList = makeList(target, row, col);
  let testCases = Array.from({ length: 1 << (row + col) }, (_, i) => i);

  testCases.sort( (a, b) => {

    let countA = (a.toString(2).match(/1/g) || []).length;
    let countB = (b.toString(2).match(/1/g) || []).length;

    return countA - countB;
  });

  for (let el of testCases) {

    let flippedList = flip(beginningList, el, row, col);
    let cnt = (el.toString(2).match(/1/g) || []).length;

    if (JSON.stringify(flippedList) === JSON.stringify(targetList)) {
      return cnt;
    }

  }

  return -1;
}

function makeList(lst, row, col) {

  let result = [];

  for (let i = 0; i < row; i++) {

    let sum = 0;

    for (let j = 0; j < col; j++) {
      sum += (1 << j) * lst[i][j];
    }

    result.push(sum);

  }

  return result;
}

function flip(lst, flipCheck, row, col) {

  let result = [];

  for (let i = 0; i < row; i++) {
    if (flipCheck & (1 << i)) {
      result.push((1 << col) - lst[i] - 1);
    } else {
      result.push(lst[i]);
    }
  }

  for (let i = 0; i < col; i++) {
    if (flipCheck & (1 << (row + i))) {
      for (let j = 0; j < row; j++) {
        result[j] ^= (1 << i);
      }
    }
  }

  return result;
}

console.log(solution([[0, 1, 0, 0, 0], [1, 0, 1, 0, 1], [0, 1, 1, 1, 0], [1, 0, 1, 1, 0], [0, 1, 0, 1, 0]], [[0, 0, 0, 1, 1], [0, 0, 0, 0, 1], [0, 0, 1, 0, 1], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]])) // 5
console.log(solution([[0, 0, 0], [0, 0, 0], [0, 0, 0]], [[1, 0, 1], [0, 0, 0], [0, 0, 0]])) // -1