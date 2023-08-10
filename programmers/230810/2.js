// [1차] 추석 트래픽

// 이번 추석에도 시스템 장애가 없는 명절을 보내고 싶은 어피치는 서버를 증설해야 할지 고민이다. 장애 대비용 서버 증설 여부를 결정하기 위해 작년 추석 기간인 9월 15일 로그 데이터를 분석한 후 초당 최대 처리량을 계산해보기로 했다. 초당 최대 처리량은 요청의 응답 완료 여부에 관계없이 임의 시간부터 1초(=1,000밀리초)간 처리하는 요청의 최대 개수를 의미한다.

function solution(lines) {
  var answer = 0;

  let arr = [];
  let count = 0;

  const newFunction = (time) => {

    let h = (time[0] * 10 + time[1] * 1) * 60 * 60;
    let m = (time[3] * 10 + time[4] * 1) * 60;
    let s = time[6] * 10 + time[7] * 1;
    let milli = time[9] * 100 + time[10] * 10 + time[11] * 1;
    let num = (h + m + s) * 1000 + milli;

    return num;
  };

  lines.map( (el) => {

    let [date, finish, duration] = el.split(" ");
    let m = newFunction(finish);
    let start = m - duration.slice(0, duration.length - 1) * 1000 + 1;
    let end = m + 999;

    arr.push(["START", start]);
    arr.push(["END", end]);
  });

  arr.sort( (a, b) => a[1] !== b[1] ? a[1] - b[1] : -1);

  arr.map( (el) => {
    if (el[0] === "START") {
      count++;
    } else {
      count--;
    }

    answer = Math.max(answer, count);
  });

  return answer;
}

console.log(solution(["2016-09-15 01:00:04.001 2.0s", "2016-09-15 01:00:07.000 2s"])) // 1
console.log(solution(["2016-09-15 01:00:04.002 2.0s", "2016-09-15 01:00:07.000 2s"])) // 2