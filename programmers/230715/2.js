// 순위 검색

// 카카오는 하반기 경력 개발자 공개채용을 진행 중에 있으며 현재 지원서 접수와 코딩테스트가 종료되었습니다. 이번 채용에서 지원자는 지원서 작성 시 아래와 같이 4가지 항목을 반드시 선택하도록 하였습니다.
// 코딩테스트 참여 개발언어 항목에 cpp, java, python 중 하나를 선택해야 합니다.
// 지원 직군 항목에 backend와 frontend 중 하나를 선택해야 합니다.
// 지원 경력구분 항목에 junior와 senior 중 하나를 선택해야 합니다.
// 선호하는 소울푸드로 chicken과 pizza 중 하나를 선택해야 합니다.
// 인재영입팀에 근무하고 있는 니니즈는 코딩테스트 결과를 분석하여 채용에 참여한 개발팀들에 제공하기 위해 지원자들의 지원 조건을 선택하면 해당 조건에 맞는 지원자가 몇 명인 지 쉽게 알 수 있는 도구를 만들고 있습니다.
// 예를 들어, 개발팀에서 궁금해하는 문의사항은 다음과 같은 형태가 될 수 있습니다.
// 코딩테스트에 java로 참여했으며, backend 직군을 선택했고, junior 경력이면서, 소울푸드로 pizza를 선택한 사람 중 코딩테스트 점수를 50점 이상 받은 지원자는 몇 명인가?
// 물론 이 외에도 각 개발팀의 상황에 따라 아래와 같이 다양한 형태의 문의가 있을 수 있습니다.
// 코딩테스트에 python으로 참여했으며, frontend 직군을 선택했고, senior 경력이면서, 소울푸드로 chicken을 선택한 사람 중 코딩테스트 점수를 100점 이상 받은 사람은 모두 몇 명인가?
// 코딩테스트에 cpp로 참여했으며, senior 경력이면서, 소울푸드로 pizza를 선택한 사람 중 코딩테스트 점수를 100점 이상 받은 사람은 모두 몇 명인가?
// backend 직군을 선택했고, senior 경력이면서 코딩테스트 점수를 200점 이상 받은 사람은 모두 몇 명인가?
// 소울푸드로 chicken을 선택한 사람 중 코딩테스트 점수를 250점 이상 받은 사람은 모두 몇 명인가?
// 코딩테스트 점수를 150점 이상 받은 사람은 모두 몇 명인가?
// 즉, 개발팀에서 궁금해하는 내용은 다음과 같은 형태를 갖습니다.
// * [조건]을 만족하는 사람 중 코딩테스트 점수를 X점 이상 받은 사람은 모두 몇 명인가?
// 지원자가 지원서에 입력한 4가지의 정보와 획득한 코딩테스트 점수를 하나의 문자열로 구성한 값의 배열 info, 개발팀이 궁금해하는 문의조건이 문자열 형태로 담긴 배열 query가 매개변수로 주어질 때,
// 각 문의조건에 해당하는 사람들의 숫자를 순서대로 배열에 담아 return 하도록 solution 함수를 완성해 주세요.

function solution(info, query) {
  var answer = [];

  let obj = {};

  const getCombination = (arr, n, key, score) => {

    if (n === 4) {
      if (!obj[key]) {
        obj[key] = [score];
      } else {
        obj[key].push(score);
      }

      return;
    }

    getCombination(arr, n + 1, key + arr[n], score);
    getCombination(arr, n + 1, key + "-", score);
  };

  for (let i = 0; i < info.length; i++) {

    let arr = info[i].split(" ");
    let score = Number(arr.pop());

    getCombination(arr, 0, "", score);
  }

  for (let el in obj) {
    obj[el] = obj[el].sort( (a, b) => a - b);
  }

  for (let i = 0; i < query.length; i++) {

    let arr = query[i].replace(/ and /g, " ").split(" ");
    let score = Number(arr.pop());
    let key = arr.join("");
    let newArr = obj[key];

    if (newArr) {

      let left = 0;
      let right = newArr.length;

      while (left < right) {

        let mid = parseInt((left + right) / 2);

        if (newArr[mid] >= score) {
          right = mid;
        } else {
          left = mid + 1;
        }

      }

      answer.push(newArr.length - left);
    } else {
      answer.push(0);
    }

  }

  return answer;
}

console.log(solution(["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"], ["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"])) // [1,1,1,1,2,4]