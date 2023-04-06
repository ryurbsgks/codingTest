// 분수의 덧셈

// 첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

function solution(numer1, denom1, numer2, denom2) {
  var answer = [];

  let GCD = (a, b) => a % b === 0 ? b : GCD(b, a % b);
  let LCM = (a, b) => a * b / GCD(a, b);
  let denom3 = LCM(denom1, denom2);
  let numer3 = (denom3 / denom1 * numer1) + (denom3 / denom2 * numer2);

  answer = [numer3 / GCD(numer3, denom3), denom3 / GCD(numer3, denom3)];

  return answer;
}

console.log(solution(1, 2, 3, 4)); // [5, 4]
console.log(solution(9, 2, 1, 3)); // [29, 6] 