// 주사위 게임 3

// 1부터 6까지 숫자가 적힌 주사위가 네 개 있습니다. 네 주사위를 굴렸을 때 나온 숫자에 따라 다음과 같은 점수를 얻습니다.
// 네 주사위에서 나온 숫자가 모두 p로 같다면 1111 × p점을 얻습니다.
// 세 주사위에서 나온 숫자가 p로 같고 나머지 다른 주사위에서 나온 숫자가 q(p ≠ q)라면 (10 × p + q)^2 점을 얻습니다.
// 주사위가 두 개씩 같은 값이 나오고, 나온 숫자를 각각 p, q(p ≠ q)라고 한다면 (p + q) × |p - q|점을 얻습니다.
// 어느 두 주사위에서 나온 숫자가 p로 같고 나머지 두 주사위에서 나온 숫자가 각각 p와 다른 q, r(q ≠ r)이라면 q × r점을 얻습니다.
// 네 주사위에 적힌 숫자가 모두 다르다면 나온 숫자 중 가장 작은 숫자 만큼의 점수를 얻습니다.
// 네 주사위를 굴렸을 때 나온 숫자가 정수 매개변수 a, b, c, d로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.

function solution(a, b, c, d) {
  var answer = 0;

  let arr = [a, b, c, d];
  let sameDice = [];
  let differentDice = [];

  arr.map( (el) => {

    if (arr.indexOf(el) === arr.lastIndexOf(el)) {
      return differentDice.push(el);
    }

    if (arr.indexOf(el) !== arr.lastIndexOf(el)) {
      if (!sameDice.includes(el)) {
        sameDice.push(el);
      }
    }

  });

  if (sameDice.length === 1 && differentDice.length === 0) {
    answer = 1111 * sameDice[0];
  }

  if (differentDice.length === 4) {
    differentDice.sort( (a, b) => a - b);
    answer = differentDice[0];
  }

  if (sameDice.length === 1 && differentDice.length === 1) {
    answer = Math.pow((10 * sameDice[0] + differentDice[0]), 2);
  }

  if (sameDice.length === 2 && differentDice.length === 0) {
    answer = (sameDice[0] + sameDice[1]) * Math.abs(sameDice[0] - sameDice[1]);
  }

  if (sameDice.length === 1 && differentDice.length === 2) {
    answer = differentDice[0] * differentDice[1];
  }

  return answer;
}

console.log(solution(2, 2, 2, 2)) // 2222
console.log(solution(4, 1, 4, 4)) // 1681
console.log(solution(6, 3, 3, 6)) // 27
console.log(solution(2, 5, 2, 6)) // 30
console.log(solution(6, 4, 2, 5)) // 2