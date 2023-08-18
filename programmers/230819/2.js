// 자물쇠와 열쇠

// 고고학자인 "튜브"는 고대 유적지에서 보물과 유적이 가득할 것으로 추정되는 비밀의 문을 발견하였습니다. 그런데 문을 열려고 살펴보니 특이한 형태의 자물쇠로 잠겨 있었고 문 앞에는 특이한 형태의 열쇠와 함께 자물쇠를 푸는 방법에 대해 다음과 같이 설명해 주는 종이가 발견되었습니다.
// 잠겨있는 자물쇠는 격자 한 칸의 크기가 1 x 1인 N x N 크기의 정사각 격자 형태이고 특이한 모양의 열쇠는 M x M 크기인 정사각 격자 형태로 되어 있습니다.
// 자물쇠에는 홈이 파여 있고 열쇠 또한 홈과 돌기 부분이 있습니다. 열쇠는 회전과 이동이 가능하며 열쇠의 돌기 부분을 자물쇠의 홈 부분에 딱 맞게 채우면 자물쇠가 열리게 되는 구조입니다. 자물쇠 영역을 벗어난 부분에 있는 열쇠의 홈과 돌기는 자물쇠를 여는 데 영향을 주지 않지만, 자물쇠 영역 내에서는 열쇠의 돌기 부분과 자물쇠의 홈 부분이 정확히 일치해야 하며 열쇠의 돌기와 자물쇠의 돌기가 만나서는 안됩니다. 또한 자물쇠의 모든 홈을 채워 비어있는 곳이 없어야 자물쇠를 열 수 있습니다.
// 열쇠를 나타내는 2차원 배열 key와 자물쇠를 나타내는 2차원 배열 lock이 매개변수로 주어질 때, 열쇠로 자물쇠를 열수 있으면 true를, 열 수 없으면 false를 return 하도록 solution 함수를 완성해주세요.

function solution(key, lock) {
  var answer = true;

  let length = lock.length;
  let arr = Array.from(new Array(length * 3), () => new Array(length * 3).fill(null));

  const rotationKey = (key) => {

    let length = key.length;
    let arr = Array.from(new Array(length), () => new Array(length).fill(null));

    for (let i = 0; i < length; ++i) {
      for (let j = 0; j < length; ++j) {
        arr[i][j] = key[length - j - 1][i];
      }
    }

    return arr;
  };

  const check = (lock, length) => {
    for (let i = length; i < length * 2; i++) {
      for (let j = length; j < length * 2; j++) {
        if (lock[i][j] !== 1) {
          return false;
        }
      }
    }

    return true;
  };

  for (let i = length; i < length * 2; i++) {
    for (let j = length; j < length * 2; j++) {
      arr[i][j] = lock[i - length][j - length];
    }
  }

  for (let i = 0; i < 4; i++) {

    key = rotationKey(key, i);

    for (let j = 0; j <= arr.length - key.length; j++) {
      for (let k = 0; k <= arr[0].length - key[0].length; k++) {

        let lock = arr.map(function(arr) {
          return arr.slice();
        });

        for (let l = 0; l < key.length; l++) {
          for (let m = 0; m < key.length; m++) {
            if (lock[j + l][k + m] === 1 && key[l][m] === 1) {
              lock[j + l][k + m] = 2;
            } else if (lock[j + l][k + m] === 1 && key[l][m] === 0) {
              lock[j + l][k + m] = 1;
            } else {
              lock[j + l][k + m] = key[l][m];
            }
          }
        }

        if (check(lock, length)) {
          return true;
        }

      }
    }

  }

  return answer;
}

console.log(solution([[0, 0, 0], [1, 0, 0], [0, 1, 1]], [[1, 1, 1], [1, 1, 0], [1, 0, 1]])) // true