// <그림 1>과 같이 9×9 격자판에 쓰여진 81개의 자연수 또는 0이 주어질 때, 이들 중 최댓값을 찾고 그 최댓값이 몇 행 몇 열에 위치한 수인지 구하는 프로그램을 작성하시오.
// 예를 들어, 다음과 같이 81개의 수가 주어지면
// 1열	2열	3열	4열	5열	6열	7열	8열	9열
// 1행	3	23	85	34	17	74	25	52	65
// 2행	10	7	39	42	88	52	14	72	63
// 3행	87	42	18	78	53	45	18	84	53
// 4행	34	28	64	85	12	16	75	36	55
// 5행	21	77	45	35	28	75	90	76	1
// 6행	25	87	65	15	28	11	37	28	74
// 7행	65	27	75	41	7	89	78	64	39
// 8행	47	47	70	45	23	65	3	41	44
// 9행	87	13	82	38	31	12	29	29	80
// 이들 중 최댓값은 90이고, 이 값은 5행 7열에 위치한다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution(arr) {

  let answer;
  let newArr = [];

  arr.map( (el) => {
    el.split(" ").map( (element) => newArr.push(Number(element)));
  });

  let copyArr = newArr.slice(0, newArr.length);

  copyArr.sort( (a, b) => b - a);

  answer = `${copyArr[0]}\n${Math.floor(newArr.indexOf(copyArr[0]) / 9) + 1} ${newArr.indexOf(copyArr[0]) % 9 + 1}`;

  return answer;
}

console.log(solution(input));