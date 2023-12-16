// 형택이와 그의 친구들은 자꾸 다른 사람들이 대화를 엿듣는 것이 짜증났다. 따라서, 새로운 언어를 만들었다.
// 이 언어에는 단어가 N개 있다. 그리고 이 언어의 문장은 단어를 공백없이 붙여쓴 것이다. 이 문장에서 각 단어는 0번 또는 그 이상 나타날 수 있다. 이 언어가 형택스러운 이유는 (특별한 이유는) 단어에 쓰여 있는 문자의 순서를 바꿔도 되기 때문이다. 이때, 원래 단어의 위치와 다른 위치에 있는 문자의 개수 만큼이 그 순서를 바꾼 단어를 만드는 비용이다. 예를 들어, abc란 단어가 있을 때, abc는 비용 0으로 만들 수 있고, acb, cba, bac는 비용 2로 바꿀 수 있고, bca, cab는 비용 3으로 바꿀 수 있다.
// 따라서, 한 문장을 여러 가지 방법으로 해석할 수 있다. 이때 비용의 최솟값을 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(2);

function solution(arr) {

  let answer = 0;
  let s = " " + input[0];
  let newArr = new Array(s.length).fill(null).map( (el) => new Array(s.length).fill(1000));

  const check = (w1, w2, l) => {

    let cnt = 0;

    for (let i = 0; i < l; i++) {
      if (w1[i] !== w2[i]) {
        cnt++;
      }
    }

    return cnt;
  };

  newArr[0][0] = 0;

  for (let i = 1; i <= s.length; i++) {
    if (newArr[i - 1][0] === 1000) {
      continue;
    }

    for (let el of arr) {

      let l = el.length;

      if ([...s.slice(i, i + l)].sort().join("") === [...el].sort().join("")) {
        newArr[i][i + l - 1] = Math.min(newArr[i][i + l - 1], newArr[i - 1][0] + check(s.slice(i, i + l), el, l));
        newArr[i + l - 1][0] = Math.min(newArr[i + l - 1][0], newArr[i][i + l - 1]);
      }
    }
  }
  
  if (newArr[s.length - 1][0] !== 1000) {
    answer = newArr[s.length - 1][0];
  } else {
    answer = -1;
  }

  return answer;
}

console.log(solution(newInput));