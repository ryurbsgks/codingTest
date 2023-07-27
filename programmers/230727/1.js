// 디펜스 게임

// 준호는 요즘 디펜스 게임에 푹 빠져 있습니다. 디펜스 게임은 준호가 보유한 병사 n명으로 연속되는 적의 공격을 순서대로 막는 게임입니다. 디펜스 게임은 다음과 같은 규칙으로 진행됩니다.
// 준호는 처음에 병사 n명을 가지고 있습니다.
// 매 라운드마다 enemy[i]마리의 적이 등장합니다.
// 남은 병사 중 enemy[i]명 만큼 소모하여 enemy[i]마리의 적을 막을 수 있습니다.
// 예를 들어 남은 병사가 7명이고, 적의 수가 2마리인 경우, 현재 라운드를 막으면 7 - 2 = 5명의 병사가 남습니다.
// 남은 병사의 수보다 현재 라운드의 적의 수가 더 많으면 게임이 종료됩니다.
// 게임에는 무적권이라는 스킬이 있으며, 무적권을 사용하면 병사의 소모없이 한 라운드의 공격을 막을 수 있습니다.
// 무적권은 최대 k번 사용할 수 있습니다.
// 준호는 무적권을 적절한 시기에 사용하여 최대한 많은 라운드를 진행하고 싶습니다.
// 준호가 처음 가지고 있는 병사의 수 n, 사용 가능한 무적권의 횟수 k, 매 라운드마다 공격해오는 적의 수가 순서대로 담긴 정수 배열 enemy가 매개변수로 주어집니다. 준호가 몇 라운드까지 막을 수 있는지 return 하도록 solution 함수를 완성해주세요.

function solution(n, k, enemy) {
  var answer = 0;

  let start = 0;
  let end = enemy.length;

  while (start <= end) {

    let mid = Math.floor((start + end) / 2);
    let arr = enemy.slice(0, mid).sort( (a, b) => b - a);
    let check = true;
    let temp = 0;

    for (let i = k; i < arr.length; i++) {
      temp = temp + arr[i];

      if (temp > n) {
        check = false;
      }
    }

    if (check) {
      answer = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }

  }

  return answer;
}

console.log(solution(7, 3, [4, 2, 4, 5, 3, 3, 1])) // 5
console.log(solution(2, 4, [3, 3, 3, 3])) // 4