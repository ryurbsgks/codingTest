// 숫자 타자 대회

// 위와 같은 모양으로 배열된 숫자 자판이 있습니다. 숫자 타자 대회는 이 동일한 자판을 사용하여 숫자로만 이루어진 긴 문자열을 누가 가장 빠르게 타이핑하는지 겨루는 대회입니다.
// 대회에 참가하려는 민희는 두 엄지 손가락을 이용하여 타이핑을 합니다. 민희는 항상 왼손 엄지를 4 위에, 오른손 엄지를 6 위에 두고 타이핑을 시작합니다. 엄지 손가락을 움직여 다음 숫자를 누르는 데에는 일정 시간이 듭니다. 민희는 어떤 두 숫자를 연속으로 입력하는 시간 비용을 몇몇 가중치로 분류하였습니다.
// 이동하지 않고 제자리에서 다시 누르는 것은 가중치가 1입니다.
// 상하좌우로 인접한 숫자로 이동하여 누르는 것은 가중치가 2입니다.
// 대각선으로 인접한 숫자로 이동하여 누르는 것은 가중치가 3입니다.
// 같지 않고 인접하지 않은 숫자를 누를 때는 위 규칙에 따라 가중치 합이 최소가 되는 경로를 따릅니다.
// 예를 들어 1 위에 있던 손가락을 0 으로 이동하여 누르는 것은 2 + 2 + 3 = 7 만큼의 가중치를 갖습니다.
// 단, 숫자 자판은 버튼의 크기가 작기 때문에 같은 숫자 버튼 위에 동시에 두 엄지 손가락을 올려놓을 수 없습니다. 즉, 어떤 숫자를 눌러야 할 차례에 그 숫자 위에 올려져 있는 손가락이 있다면 반드시 그 손가락으로 눌러야 합니다.
// 숫자로 이루어진 문자열 numbers가 주어졌을 때 최소한의 시간으로 타이핑을 하는 경우의 가중치 합을 return 하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  var answer = 0;

  const position = (num) => {

    let pad = [
      ["1", "2", "3"],
      ["4", "5", "6"],
      ["7", "8", "9"],
      ["*", "0", "#"]
    ];
    let arr = [];

    pad.find( (el, idx) => {
      if (el.includes(num + "")) {
        arr = [idx, el.indexOf(num + "")];
      }
    });

    return arr;
  };

  const distance = () => {

    let arr = Array.from({ length: 10 }, () => new Array(10).fill(0));

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {

        let x = Math.abs(position(i)[0] - position(j)[0]);
        let y = Math.abs(position(i)[1] - position(j)[1]);
        let min = Math.min(x, y);
        let max = Math.max(x, y);

        arr[j][i] = i === j ? 1 : min * 3 + Math.abs(max - min) * 2;

      }
    }

    return arr;
  };

  let dist = distance();
  let map = new Map([["46", 0]]);

  for (let i = 0; i < numbers.length; i++) {

    let newMap = new Map(map);
    let num = numbers[i];

    map.clear();

    for (let [key, val] of newMap) {

      let [left, right] = key.split("");

      if (map.has(left + num) || map.has(num + left)) {

        let rightKey = map.has(left + num) ? left + num : num + left;

        map.set(rightKey, Math.min(map.get(rightKey), val + dist[right][num]));

      } else {
        if (left != num) {
          map.set(left + "" + num, val + dist[right][num]);
        }
      }

      if (map.has(num + right) || map.has(right + num)) {

        let leftKey = map.has(num + right) ? num + right : right + num;

        map.set(leftKey, Math.min(leftKey, val + dist[left][num]));

      } else {
        if (right != num) {
          map.set(num + "" + right, val + dist[left][num]);
        }
      }

    }

  }

  answer = [...map.entries()].reduce( (acc, cur) => acc[1] < cur[1] ? acc : cur)[1];

  return answer;
}



console.log(solution("1756")) // 10
console.log(solution("5123")) // 8