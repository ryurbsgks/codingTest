// 호텔 대실

// 호텔을 운영 중인 코니는 최소한의 객실만을 사용하여 예약 손님들을 받으려고 합니다. 한 번 사용한 객실은 퇴실 시간을 기준으로 10분간 청소를 하고 다음 손님들이 사용할 수 있습니다.
// 예약 시각이 문자열 형태로 담긴 2차원 배열 book_time이 매개변수로 주어질 때, 코니에게 필요한 최소 객실의 수를 return 하는 solution 함수를 완성해주세요.

function solution(book_time) {
  var answer = 0;

  const getNextTime  = (time) => {

    let next = time.split(":");

    return Number(next[0]) * 60 + Number(next[1]) + 10;
  };

  book_time.sort();

  let arr = [];

  book_time.map( (el) => {

    let tmp = el[0].split(":");
    let startTime = Number(tmp[0]) * 60 + Number(tmp[1]);
    let index = arr.findIndex( (el) => el <= startTime);

    if (index === -1) {
      arr.push(getNextTime(el[1]));
    } else {
      arr[index] = getNextTime(el[1]);
    }

  });

  answer = arr.length;

  return answer;
}

console.log(solution([["15:00", "17:00"], ["16:40", "18:20"], ["14:20", "15:20"], ["14:10", "19:20"], ["18:20", "21:20"]])) // 3
console.log(solution([["09:10", "10:10"], ["10:20", "12:20"]])) // 1
console.log(solution([["10:20", "12:30"], ["10:20", "12:30"], ["10:20", "12:30"]])) // 3