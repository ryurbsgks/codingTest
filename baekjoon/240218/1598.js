// 동물원에서 막 탈출한 원숭이 한 마리가 세상구경을 하고 있다. 그 녀석은 원주 부근을 돌아다니다가 코레스코 콘도에서 아주 재밌는 놀이를 발견했다. 그 놀이의 이름은 바로 “꼬리를 무는 숫자 나열”. 이제부터 원숭이가 그토록 좋아하던 그 놀이를 파헤쳐보자.
// 놀이의 방법은 간단하다. 일단 4줄짜리 표에 왼쪽부터 수를 아래로 1부터 순서대로 적어나간다. 다음에 그 예가 잘 나타나있다.
// 이제 원숭이는 두 개의 자연수를 아무거나 생각한다. 그리고 숫자판에서 두 개의 자연수 사이의 직각거리를 구하면 된다. 여기서 직각거리는 동서방향거리와 남북방향거리의 합을 뜻한다.
// 예를 들어 저 숫자판에서 11과 33을 생각했다고 하자. 그렇다면 11과 33사이의 직각거리는 8이 된다.(동서방향거리 : 6, 남북방향거리 : 2) 다음 그림에 잘 나타나있다.
// 하지만 원숭이는 지금 혼란스럽다. 동물원에서 탈출한지 얼마 되지 않아서 계산을 할 수 없는 경지에 이르렀다. 여러분이 불쌍한 원숭이를 좀 도와줘야겠다. 원숭이가 생각한 두 자연수 사이의 직각거리를 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split(" ");

function solution() {

  let [a, b] = input.map( (el) => Number(el));
  let w = Math.abs(Math.floor((a - 1) / 4) - Math.floor((b - 1) / 4));
  let h = Math.abs((a - 1) % 4 - (b - 1) % 4);

  return w + h;
}

console.log(solution());