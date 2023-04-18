// 외계어 사전

// PROGRAMMERS-962 행성에 불시착한 우주비행사 머쓱이는 외계행성의 언어를 공부하려고 합니다. 알파벳이 담긴 배열 spell과 외계어 사전 dic이 매개변수로 주어집니다. spell에 담긴 알파벳을 한번씩만 모두 사용한 단어가 dic에 존재한다면 1, 존재하지 않는다면 2를 return하도록 solution 함수를 완성해주세요.

function solution(spell, dic) {
  var answer = 0;

  dic.map( (el) => {

    let check = 0;

    spell.map( (element) => {
      if (el.includes(element)) {
        check++;
      }
    });

    if (check === spell.length) {
      answer = 1;
    }
  });

  answer ? answer : answer = 2;

  return answer;
}

console.log(solution(["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "soo"])) // 2
console.log(solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"])) // 1
console.log(solution(["s", "o", "m", "d"], ["moos", "dzx", "smm", "sunmmo", "som"])) // 2