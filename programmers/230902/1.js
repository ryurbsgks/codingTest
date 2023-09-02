// 고고학 최고의 발견

// 고고학자인 혜선은 오래전부터 성궤의 행방을 추적해왔습니다. 그동안 그의 연구는 주류 학자들로부터 인정받지 못했었지만, 혜선이는 포기하지 않고 조사를 계속했고 마침내 성궤의 행방을 알아내었습니다.
// 그러나 오래전 누군가로부터 봉인된 성궤는 특별한 잠금장치에 의해 보호되고 있었습니다. 잠금장치는 일종의 퍼즐과 연결되어 퍼즐을 해결하면 열리는 것으로 보입니다.
// 퍼즐은 시계들이 행렬을 이루는 구조물인데 하나의 시계에 시곗바늘은 하나씩만 있습니다. 각 시곗바늘은 시계방향으로만 돌릴 수 있고 한 번의 조작으로 90도씩 돌릴 수 있습니다. 시계들은 기계장치에 의해 연결되어 있어 어떤 시계의 시곗바늘을 돌리면 그 시계의 상하좌우로 인접한 시계들의 시곗바늘도 함께 돌아갑니다. 행렬의 모서리에 위치한 시계의 시곗바늘을 돌리는 경우에는 인접한 세 시계의 시곗바늘들이 함께 돌아가며, 꼭짓점에 위치한 시계의 시곗바늘을 돌리는 경우에는 인접한 두 시계의 시곗바늘들이 함께 돌아갑니다.
// 각 시계는 12시, 3시, 6시, 9시 방향 중의 한 방향을 가리키고 있습니다. 각 시계의 시곗바늘을 적절히 조작하여 모든 시곗바늘이 12시 방향을 가리키면 퍼즐이 해결되어 성궤를 봉인하고 있는 잠금장치가 열릴 것입니다.
// 노후화된 퍼즐 기계장치가 걱정되었던 혜선은 가능한 최소한의 조작으로 퍼즐을 해결하려고 합니다. 시곗바늘들의 행렬 clociHands가 매개변수로 주어질 때, 퍼즐을 해결하기 위한 최소한의 조작 횟수를 return 하도록 solution 함수를 완성해주세요.

function solution(clockHands) {
  var answer = 0;

  let length = clockHands.length;

  clockHands = clockHands.map( (el) => el.map( (element) => (element ? 4 - element : element)));

  const getFixedNum = (num) => {
    while (num >= 4) {
      num -= 4;
    }

    while (num < 0) {
      num += 4;
    }

    return num;
  };

  const calculator = (arr) => {
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {

        let value = arr[i][j];

        if (arr[i + 1]) {
          arr[i + 1][j] -= value;

          if (arr[i + 1][j - 1] !== undefined) {
            arr[i + 1][j - 1] -= value;
          }

          if (arr[i + 1][j + 1] !== undefined) {
            arr[i + 1][j + 1] -= value;
          }
        }

        if (arr[i + 2]) {
          arr[i + 2][j] -= value;
        }
        
      }
    }

    return arr[length - 1].map( (el) => getFixedNum(el));
  };

  const getLastColDiffByHeadIdxValue1 = (headIndex) => {

    let map = new Array(length).fill().map( (el, idx) => {

      let newArray = new Array(length).fill(0);

      if (idx === 0) {
        newArray[headIndex] = -1;

        if (headIndex - 1 >= 0) {
          newArray[headIndex - 1] = -1;
        }

        if (headIndex + 1 < length) {
          newArray[headIndex + 1] = -1;
        }
      }

      if (idx === 1) {
        newArray[headIndex] = -1;
      }

      return newArray;
    });

    return calculator(map);
  };

  let elOneValueAffectMap = new Array(length).fill().map( (el, idx) => getLastColDiffByHeadIdxValue1(idx));
  let calculated = calculator(JSON.parse(JSON.stringify(clockHands)));
  let counter = new Array(length).fill(0);
  let validHeaders = [];

  const increaseCounter = () => {
    counter[length - 1] += 1;

    for (let i = length - 1; i >= 0; i--) {
      if (counter[i] >= 4) {
        if (i === 0) {
          counter[i] = -1;
          
          return;
        }

        counter[i] = 0;
        counter[i - 1] += 1;
      }
    }
  };

  while (true) {
    if (counter[0] === -1) {
      break;
    }

    let isValid = true;

    for (let i = 0; i < length; i++) {
      
      let targetSum = calculated[i] + elOneValueAffectMap.reduce( (acc, cur, idx) => {
        return acc + (cur[i] * counter[idx]);
      }, 0);

      if (targetSum % 4 !== 0) {
        isValid = false;

        break;
      }

    }

    if (isValid) {
      validHeaders.push([...counter]);
    }

    increaseCounter();
  }

  let validMaps = validHeaders.map( (el) => {

    let map = new Array(length).fill().map( (element, idx) => {
      if (idx === 0) {
        return el;
      }

      return new Array(length).fill(null);
    });

    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length; j++) {

        let sum = map[i][j];

        if (map[i][j + 1]) {
          sum += map[i][j + 1];
        }

        if (map[i][j - 1]) {
          sum += map[i][j - 1];
        }

        if (map[i - 1]) {
          sum += map[i - 1][j];
        }

        let resultValue = getFixedNum(clockHands[i][j] - sum);

        map[i + 1][j] = resultValue;

      }
    }

    return map;
  });

  answer = Math.min(...validMaps.map( (el) => el.reduce( (acc, cur) => {
    return acc + cur.reduce( (acc, cur) => {
      return acc + cur;
    }, 0);
  }, 0)));

  return answer;
}

console.log(solution([[0,3,3,0],[3,2,2,3],[0,3,2,0],[0,3,3,3]])) // 3