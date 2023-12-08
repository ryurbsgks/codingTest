// 남극에 사는 김지민 선생님은 학생들이 되도록이면 많은 단어를 읽을 수 있도록 하려고 한다. 그러나 지구온난화로 인해 얼음이 녹아서 곧 학교가 무너지기 때문에, 김지민은 K개의 글자를 가르칠 시간 밖에 없다. 김지민이 가르치고 난 후에는, 학생들은 그 K개의 글자로만 이루어진 단어만을 읽을 수 있다. 김지민은 어떤 K개의 글자를 가르쳐야 학생들이 읽을 수 있는 단어의 개수가 최대가 되는지 고민에 빠졌다.
// 남극언어의 모든 단어는 "anta"로 시작되고, "tica"로 끝난다. 남극언어에 단어는 N개 밖에 없다고 가정한다. 학생들이 읽을 수 있는 단어의 최댓값을 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1, input.length);

function solution(arr) {

  let [N, K] = input[0].split(" ").map( (el) => Number(el));
  let newArr = new Array(N);
  let check = 0;
  let max = 0;

  const DFS = (toPick, start, check) => {
    if (toPick === 0) {

      let cnt = 0;

      for (let i = 0; i < N; i++) {
        if ((newArr[i] & check) === newArr[i]) {
          cnt++;
        }
      }

      if (max < cnt) {
        max = cnt;
      }
      
      return;
    }

    for (let i = start; i < 26; i++) {
      if ((check & (1 << i)) === 0) {
        check |= (1 << i);
        DFS(toPick - 1, i, check);
        check &= ~(1 << i);
      }
    }
  };

  for (let i = 0; i < N; i++) {

    let str = arr[i];
    let num = 0;

    for (let j = 0; j < str.length; j++) {
      num |= 1 << (str[j].charCodeAt(0) - "a".charCodeAt(0));
    }

    newArr[i] = num;

  }

  if (K < 5) {
    return 0;
  } else if (K === 26) {
    return N;
  } else {
    check |= 1 << ("a".charCodeAt(0) - "a".charCodeAt(0));
    check |= 1 << ("n".charCodeAt(0) - "a".charCodeAt(0));
    check |= 1 << ("t".charCodeAt(0) - "a".charCodeAt(0));
    check |= 1 << ("i".charCodeAt(0) - "a".charCodeAt(0));
    check |= 1 << ("c".charCodeAt(0) - "a".charCodeAt(0));
    DFS(K - 5, 0, check);

    return max;
  }

}

console.log(solution(newInput));