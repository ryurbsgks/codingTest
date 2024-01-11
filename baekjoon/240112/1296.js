// 연두는 프로그래밍 대회에 나갈 팀 이름을 정하려고 한다. 미신을 믿는 연두는 이환이에게 공식을 하나 받아왔고, 이 공식을 이용해 우승할 확률이 가장 높은 팀 이름을 찾으려고 한다.
// 이환이가 만든 공식은 사용하려면 먼저 다음 4가지 변수의 값을 계산해야 한다.
// L = 연두의 이름과 팀 이름에서 등장하는 L의 개수
// O = 연두의 이름과 팀 이름에서 등장하는 O의 개수
// V = 연두의 이름과 팀 이름에서 등장하는 V의 개수
// E = 연두의 이름과 팀 이름에서 등장하는 E의 개수
// 그 다음, 위에서 구한 변수를 다음 식에 입력하면 팀 이름의 우승할 확률을 구할 수 있다.
// ((L+O) × (L+V) × (L+E) × (O+V) × (O+E) × (V+E)) mod 100
// 연두의 영어 이름과 팀 이름 후보 N개가 주어졌을 때, 우승할 확률이 가장 높은 팀 이름을 구해보자. 확률이 가장 높은 팀이 여러가지인 경우 사전 순으로 가장 앞서는 팀 이름이 우승할 확률이 가장 높은 것이다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution() {

  let answer = "";
  let name = input[0];
  let love = [0, 0, 0, 0];
  let max = -1;

  const countLoveChar = (name, love) => {
    for (let i = 0; i < name.length; i++) {
      switch (name[i]) {
        case "L":
          love[0]++;

          break;
        case "O":
          love[1]++;

          break;
        case "V":
          love[2]++;

          break;
        case "E":
          love[3]++;

          break;
      }
    }
  };

  countLoveChar(name, love);

  for (let i = 2; i < input.length - 1; i++) {

    let team = input[i].trim();
    let newLove = [0, 0, 0, 0];
    let percentage = 1;

    countLoveChar(team, newLove);
    newLove[0] += love[0];
    newLove[1] += love[1];
    newLove[2] += love[2];
    newLove[3] += love[3];

    for (let j = 0; j < 3; j++) {
      for (let k = j + 1; k < 4; k++) {
        percentage *= (newLove[j] + newLove[k]);
      }
    }

    percentage %= 100;

    if (percentage > max) {
      max = percentage;
      answer = team;
    } else if (percentage === max) {
      if (answer.localeCompare(team) > 0) {
        answer = team;
      }
    }
  }

  return answer === "" ? input[2] : answer;
}

console.log(solution());