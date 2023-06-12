// 신고 결과 받기

// 신입사원 무지는 게시판 불량 이용자를 신고하고 처리 결과를 메일로 발송하는 시스템을 개발하려 합니다. 무지가 개발하려는 시스템은 다음과 같습니다.
// 각 유저는 한 번에 한 명의 유저를 신고할 수 있습니다.
// 신고 횟수에 제한은 없습니다. 서로 다른 유저를 계속해서 신고할 수 있습니다.
// 한 유저를 여러 번 신고할 수도 있지만, 동일한 유저에 대한 신고 횟수는 1회로 처리됩니다.
// k번 이상 신고된 유저는 게시판 이용이 정지되며, 해당 유저를 신고한 모든 유저에게 정지 사실을 메일로 발송합니다.
// 유저가 신고한 모든 내용을 취합하여 마지막에 한꺼번에 게시판 이용 정지를 시키면서 정지 메일을 발송합니다.
// 이용자의 ID가 담긴 문자열 배열 id_list, 각 이용자가 신고한 이용자의 ID 정보가 담긴 문자열 배열 report, 정지 기준이 되는 신고 횟수 k가 매개변수로 주어질 때, 각 유저별로 처리 결과 메일을 받은 횟수를 배열에 담아 return 하도록 solution 함수를 완성해주세요.

function solution(id_list, report, k) {
  var answer = [];

  let obj = {};
  let newObj = {};
  let reportUser = [];
  let newReport = report.map( (el) => el.split(" "));

  id_list.map( (el) => obj[el] = []);
  id_list.map( (el) => newObj[el] = []);

  newReport.map( (el) => {
    if (!obj[el[1]].includes(el[0])) {
      obj[el[1]].push(el[0]);
    }
  });
  
  newReport.map( (el) => {
    if (!newObj[el[0]].includes(el[1])) {
      newObj[el[0]].push(el[1]);
    }
  });

  for (let el in obj) {
    if (obj[el].length >= k) {
      reportUser.push(el);
    }
  }

  for (let el in newObj) {

    let count = 0;

    reportUser.map( (element) => {
      if (newObj[el].includes(element)) {
        count++;
      }
    });

    answer.push(count);
  }

  return answer;
}

console.log(solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"], 2)) // [2,1,1,0]
console.log(solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3)) // [0,0]