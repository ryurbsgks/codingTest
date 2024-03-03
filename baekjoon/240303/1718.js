// Vigenere cipher이라는 암호화 방법은 암호화하려는 문장 (평문)의 단어와 암호화 키를 숫자로 바꾼 다음, 평문의 단어에 해당하는 숫자에 암호 키에 해당하는 숫자를 더하는 방식이다. 이 방법을 변형하여 평문의 단어에 암호화 키에 해당하는 숫자를 빼서 암호화하는 방식을 생각해 보자.
// 예를 들어 암호화 키가 love이고, 암호화할 문장이 “nice day” 라면 다음과 같이 암호화가 이루어진다.
// 제시된 평문의 첫 번째 문자인 ‘n’은 해당 암호화 키 ‘l’의 알파벳 순서가 12 이므로 알파벳상의 순서에서 ‘n’보다 12앞의 문자인 ‘b’로 변형된다.
// 변형된 문자가 ‘a' 이전의 문자가 되면 알파벳 상에서 맨 뒤로 순서를 돌린다. 예를 들면 평문의 세 번째 문자인‘c’는 알파벳 상에서 3 번째이고 대응하는 암호화키 ‘v'는 알파벳 순서 22로 ‘c'에서 22 앞으로 당기면 ‘a'보다 훨씬 앞의 문자이어야 하는데, ‘a’앞의 문자가 없으므로 ‘z’로 돌아가 반복되어 ‘g’가 된다. 즉 평문의 문자를 암호화키의 문자가 알파벳 상에서 차지하는 순서만큼 앞으로 뺀 것으로 암호화한다.
// 평문의 문자가 공백 문자인 경우는 그 공백 문자를 그대로 출력한다.
// 이와 같은 암호화를 행하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution(input) {

  let answer = "";
  let [str, key] = input.map( (el) => el.trim());

  const alphaToNum = (c) => {
    return c.charCodeAt(0) - "a".charCodeAt(0);
  };
  
  const numToAlpha = (n) => {
    return String.fromCharCode(n + "a".charCodeAt(0));
  };

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      answer += " ";

      continue;
    }

    let now = alphaToNum(str[i]) - alphaToNum(key[i % key.length]) - 1;

    if (now < 0) {
      now += 26;
    }

    answer += numToAlpha(now);
  }

  return answer;
}

console.log(solution(input));