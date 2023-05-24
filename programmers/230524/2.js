// 주사위 게임 2

// 1부터 6까지 숫자가 적힌 주사위가 세 개 있습니다. 세 주사위를 굴렸을 때 나온 숫자를 각각 a, b, c라고 했을 때 얻는 점수는 다음과 같습니다.
// 세 숫자가 모두 다르다면 a + b + c 점을 얻습니다.
// 세 숫자 중 어느 두 숫자는 같고 나머지 다른 숫자는 다르다면 (a + b + c) × (a2 + b2 + c2 )점을 얻습니다.
// 세 숫자가 모두 같다면 (a + b + c) × (a2 + b2 + c2 ) × (a3 + b3 + c3 )점을 얻습니다.
// 세 정수 a, b, c가 매개변수로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.

function solution(a, b, c) {
  var answer = 0;

  let arr = [a, b, c];
  let sameDice = [];
  let differentDice = [];

  arr.map( (el) => {

    if (arr.indexOf(el) === arr.lastIndexOf(el)) {
      return differentDice.push(el);
    }

    if (!sameDice.includes(el)) {
      sameDice.push(el);
    }
    
  });

  if (differentDice.length === 3) {
    answer = a + b + c;
  } else if (differentDice.length === 1 && sameDice.length === 1) {
    answer = (a + b + c) * (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2));
  } else if (sameDice.length === 1) {
    answer = (a + b + c) * (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2)) * (Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3));
  }

  return answer;
}

console.log(solution(2, 6, 1)) // 9
console.log(solution(5, 3, 3)) // 473
console.log(solution(4, 4, 4)) // 110592