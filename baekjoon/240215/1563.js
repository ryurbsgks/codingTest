// 백준중학교에서는 학기가 끝날 무렵에 출결사항을 보고 개근상을 줄 것인지 말 것인지 결정한다. 이 학교는 이상해서 학생들이 학교를 너무 자주 빠지기 때문에, 개근상을 주는 조건이 조금 독특하다.
// 출결사항이 기록되는 출결은 출석, 지각, 결석이다.
// 개근상을 받을 수 없는 사람은 지각을 두 번 이상 했거나, 결석을 세 번 연속으로 한 사람이다.
// 한 학기가 4일이고, O를 출석, L을 지각, A를 결석이라고 했을 때, 개근상을 받을 수 있는 출결정보는
// OOOO OOOA OOOL OOAO OOAA OOAL OOLO OOLA OAOO OAOA 
// OAOL OAAO OAAL OALO OALA OLOO OLOA OLAO OLAA AOOO 
// AOOA AOOL AOAO AOAA AOAL AOLO AOLA AAOO AAOA AAOL
// AALO AALA ALOO ALOA ALAO ALAA LOOO LOOA LOAO LOAA 
// LAOO LAOA LAAO
// 총 43가지이다.
// 한 학기는 N일이다. N이 주어졌을 때, 개근상을 받을 수 있는 출결정보의 개수를 세는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim();

function solution(N) {

  let arr = Array.from(Array(N), () => Array.from(Array(2), () => Array(3).fill(0)));

  const attendance = (o, l, a) => {
    if (l === 2 || a === 3) {
      return 0;
    }
  
    if (o === N) {
      return 1;
    }
  
    if (arr[o][l][a] !== 0) {
      return arr[o][l][a];
    }
  
    arr[o][l][a] += attendance(o + 1, l, 0);
    arr[o][l][a] += attendance(o + 1, l + 1, 0);
    arr[o][l][a] += attendance(o + 1, l, a + 1);
  
    return arr[o][l][a] % 1000000;
  };

  return attendance(0, 0, 0);
}

console.log(solution(Number(input)));