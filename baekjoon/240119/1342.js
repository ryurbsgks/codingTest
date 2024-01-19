// 민식이와 준영이는 자기 방에서 문자열을 공부하고 있다. 민식이가 말하길 인접해 있는 모든 문자가 같지 않은 문자열을 행운의 문자열이라고 한다고 한다. 준영이는 문자열 S를 분석하기 시작했다. 준영이는 문자열 S에 나오는 문자를 재배치하면 서로 다른 행운의 문자열이 몇 개 나오는지 궁금해졌다. 만약 원래 문자열 S도 행운의 문자열이라면 그것도 개수에 포함한다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("");

function solution() {

  let obj = {};

  const dfs = (str, n) => {

    let answer = 0;

    if (n === input.length) {
      return 1;
    }
  
    for (let el of Object.keys(obj)) {
      if (str === el) {
        continue;
      }
  
      if (obj[el] === 0) {
        continue;
      }
  
      obj[el] -= 1;
      answer += dfs(el, n + 1);
      obj[el] += 1;
    }
  
    return answer;
  };

  for (let el of input) {
    obj[el] = obj[el] + 1 || 1;
  }

  return dfs("", 0);
}

console.log(solution());