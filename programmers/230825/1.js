// 광고 삽입

// 카카오TV에서 유명한 크리에이터로 활동 중인 죠르디는 환경 단체로부터 자신의 가장 인기있는 동영상에 지구온난화의 심각성을 알리기 위한 공익광고를 넣어 달라는 요청을 받았습니다. 평소에 환경 문제에 관심을 가지고 있던 "죠르디"는 요청을 받아들였고 광고효과를 높이기 위해 시청자들이 가장 많이 보는 구간에 공익광고를 넣으려고 합니다. "죠르디"는 시청자들이 해당 동영상의 어떤 구간을 재생했는 지 알 수 있는 재생구간 기록을 구했고, 해당 기록을 바탕으로 공익광고가 삽입될 최적의 위치를 고를 수 있었습니다.
// 참고로 광고는 재생 중인 동영상의 오른쪽 아래에서 원래 영상과 동시에 재생되는 PIP(Picture in Picture) 형태로 제공됩니다.
// 다음은 "죠르디"가 공익광고가 삽입될 최적의 위치를 고르는 과정을 그림으로 설명한 것입니다.
// 그림의 파란색 선은 광고를 검토 중인 "죠르디" 동영상의 전체 재생 구간을 나타냅니다.
// 위 그림에서, "죠르디" 동영상의 총 재생시간은 02시간 03분 55초 입니다.
// 그림의 검은색 선들은 각 시청자들이 "죠르디"의 동영상을 재생한 구간의 위치를 표시하고 있습니다.
// 검은색 선의 가운데 숫자는 각 재생 기록을 구분하는 ID를 나타냅니다.
// 검은색 선에 표기된 왼쪽 끝 숫자와 오른쪽 끝 숫자는 시청자들이 재생한 동영상 구간의 시작 시각과 종료 시각을 나타냅니다.
// 위 그림에서, 3번 재생 기록은 00시 25분 50초 부터 00시 48분 29초 까지 총 00시간 22분 39초 동안 죠르디의 동영상을 재생했습니다. 1
// 위 그림에서, 1번 재생 기록은 01시 20분 15초 부터 01시 45분 14초 까지 총 00시간 24분 59초 동안 죠르디의 동영상을 재생했습니다.
// 그림의 빨간색 선은 "죠르디"가 선택한 최적의 공익광고 위치를 나타냅니다.
// 만약 공익광고의 재생시간이 00시간 14분 15초라면, 위의 그림처럼 01시 30분 59초 부터 01시 45분 14초 까지 공익광고를 삽입하는 것이 가장 좋습니다. 이 구간을 시청한 시청자들의 누적 재생시간이 가장 크기 때문입니다.
// 01시 30분 59초 부터 01시 45분 14초 까지의 누적 재생시간은 다음과 같이 계산됩니다.
// 01시 30분 59초 부터 01시 37분 44초 까지 : 4번, 1번 재생 기록이 두차례 있으므로 재생시간의 합은 00시간 06분 45초 X 2 = 00시간 13분 30초
// 01시 37분 44초 부터 01시 45분 14초 까지 : 4번, 1번, 5번 재생 기록이 세차례 있으므로 재생시간의 합은 00시간 07분 30초 X 3 = 00시간 22분 30초
// 따라서, 이 구간 시청자들의 누적 재생시간은 00시간 13분 30초 + 00시간 22분 30초 = 00시간 36분 00초입니다.
// "죠르디"의 동영상 재생시간 길이 play_time, 공익광고의 재생시간 길이 adv_time, 시청자들이 해당 동영상을 재생했던 구간 정보 logs가 매개변수로 주어질 때, 시청자들의 누적 재생시간이 가장 많이 나오는 곳에 공익광고를 삽입하려고 합니다. 이때, 공익광고가 들어갈 시작 시각을 구해서 return 하도록 solution 함수를 완성해주세요. 만약, 시청자들의 누적 재생시간이 가장 많은 곳이 여러 곳이라면, 그 중에서 가장 빠른 시작 시각을 return 하도록 합니다.

function solution(play_time, adv_time, logs) {
  var answer = '';

  let time = 0;
  let sum = 0;

  const calculateSecond = (h, m, s) => {
    return (h * 3600) + (m * 60) + s;
  }

  const splitAndConvert = (time) => {
    return time.split(":").map( (el) => parseInt(el));
  }

  let [ph, pm, ps] = splitAndConvert(play_time);
  let [ah, am, as] = splitAndConvert(adv_time);
  let playTime = calculateSecond(ph, pm, ps);
  let advTime = calculateSecond(ah, am, as);
  let imos = Array(playTime + 1).fill(0);

  const timeFormat = (time) => {

    let h = Math.floor(time / 3600);
    let m = Math.floor(time % 3600 / 60);
    let s = time % 3600 % 60;
    
    return `${h < 10 ? "0" : ""}${h}:${m < 10 ? "0" : ""}${m}:${s < 10 ? "0" : ""}${s}`
  }

  if (playTime === advTime) {
    return "00:00:00";
  }

  for (const log of logs) {

    let [start, end] = log.split("-");
    let [sh, sm, ss] = splitAndConvert(start);
    let [eh, em, es] = splitAndConvert(end);
    let startTime = calculateSecond(sh, sm, ss);
    let endTime = calculateSecond(eh, em, es);
    
    imos[startTime]++;
    imos[endTime]--;
  }

  for (let i = 1; i <= playTime; i++) {
    imos[i] += imos[i - 1];
  }

  for (let i = 1; i <= playTime; i++) {
    imos[i] += imos[i - 1];
  }

  sum = imos[advTime - 1];

  for (let i = advTime - 1; i < playTime; i++) {

    let aTime = imos[i] - imos[i - advTime];
    
    if (sum < aTime) {
      sum = aTime;
      time = i - advTime + 1;
    }

  }

  answer = timeFormat(time);

  return answer;
}

console.log(solution("02:03:55", "00:14:15", ["01:20:15-01:45:14", "00:40:31-01:00:00", "00:25:50-00:48:29", "01:30:59-01:53:29", "01:37:44-02:02:30"])) // "01:30:59"
console.log(solution("99:59:59", "25:00:00", ["69:59:59-89:59:59", "01:00:00-21:00:00", "79:59:59-99:59:59", "11:00:00-31:00:00"])) // "01:00:00"
console.log(solution("50:00:00", "50:00:00", ["15:36:51-38:21:49", "10:14:18-15:36:51", "38:21:49-42:51:45"])) // "00:00:00"