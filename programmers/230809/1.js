// 스티커 모으기(2)

// N개의 스티커가 원형으로 연결되어 있습니다. 다음 그림은 N = 8인 경우의 예시입니다.
// 원형으로 연결된 스티커에서 몇 장의 스티커를 뜯어내어 뜯어낸 스티커에 적힌 숫자의 합이 최대가 되도록 하고 싶습니다. 단 스티커 한 장을 뜯어내면 양쪽으로 인접해있는 스티커는 찢어져서 사용할 수 없게 됩니다.
// 예를 들어 위 그림에서 14가 적힌 스티커를 뜯으면 인접해있는 10, 6이 적힌 스티커는 사용할 수 없습니다. 스티커에 적힌 숫자가 배열 형태로 주어질 때, 스티커를 뜯어내어 얻을 수 있는 숫자의 합의 최댓값을 return 하는 solution 함수를 완성해 주세요. 원형의 스티커 모양을 위해 배열의 첫 번째 원소와 마지막 원소가 서로 연결되어 있다고 간주합니다.

function solution(sticker) {
  var answer = 0;

  let length = sticker.length;
  let arr = new Array(length).fill(0);
  let newArr = new Array(length).fill(0);

  arr[0] = sticker[0];
  arr[1] = sticker[0];
  newArr[1] = sticker[1];

  for (let i = 2; i < length; i++) {
    if (i !== length - 1) {
      arr[i] = Math.max(arr[i - 1], arr[i - 2] + sticker[i]);
    } else {
      arr[i] = arr[i - 1];
    }
      
    newArr[i] = Math.max(newArr[i - 1], newArr[i - 2] + sticker[i]);
  }

  answer = Math.max(arr[length - 1], newArr[length - 1]);

  return answer;
}

console.log(solution([14, 6, 5, 11, 3, 9, 2, 10])) // 36
console.log(solution([1, 3, 2, 5, 4])) // 8