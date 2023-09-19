// 호텔 방 배정

// "스노우타운"에서 호텔을 운영하고 있는 "스카피"는 호텔에 투숙하려는 고객들에게 방을 배정하려 합니다. 호텔에는 방이 총 k개 있으며, 각각의 방은 1번부터 k번까지 번호로 구분하고 있습니다. 처음에는 모든 방이 비어 있으며 "스카피"는 다음과 같은 규칙에 따라 고객에게 방을 배정하려고 합니다.
// 한 번에 한 명씩 신청한 순서대로 방을 배정합니다.
// 고객은 투숙하기 원하는 방 번호를 제출합니다.
// 고객이 원하는 방이 비어 있다면 즉시 배정합니다.
// 고객이 원하는 방이 이미 배정되어 있으면 원하는 방보다 번호가 크면서 비어있는 방 중 가장 번호가 작은 방을 배정합니다.
// 예를 들어, 방이 총 10개이고, 고객들이 원하는 방 번호가 순서대로 [1, 3, 4, 1, 3, 1] 일 경우 다음과 같이 방을 배정받게 됩니다.
// 원하는 방 번호	  배정된 방 번호
// 1	              1
// 3	              3
// 4	              4
// 1	              2
// 3	              5
// 1	              6
// 전체 방 개수 k와 고객들이 원하는 방 번호가 순서대로 들어있는 배열 room_number가 매개변수로 주어질 때, 각 고객에게 배정되는 방 번호를 순서대로 배열에 담아 return 하도록 solution 함수를 완성해주세요.

function solution(k, room_number) {
  var answer = [];

  let length = room_number.length;
  let map = new Map();
  let empty;

  const findRoom = (number, room) => {
    if (!room.has(number)) { 
      room.set(number, number + 1);

      return number;
    }

    let p = findRoom(room.get(number), room);

    room.set(number, p + 1);

    return p;
  };

  for (let i = 0; i < length; i++) {
    empty = findRoom(room_number[i], map);
    answer.push(empty);
  }

  return answer;
}

console.log(solution(10, [1,3,4,1,3,1])) // [1,3,4,2,5,6]