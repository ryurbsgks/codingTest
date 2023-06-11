// 약수의 개수와 덧셈

// 두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

function solution(left, right) {
  var answer = 0;

  let arr = [];

  const check = (num) => {

    let arr = [];
    let checkEven = false;

    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        arr.push(i);
      }
    }

    if (arr.length % 2 === 0) {
      checkEven = true;
    }

    return checkEven;
  }

  for (let i = left; i <= right; i++) {
    if (check(i)) {
      arr.push(i);
    } else {
      arr.push(i * -1);
    }
  }

  answer = arr.reduce( (acc, cur) => acc + cur, 0);

  return answer;
}

console.log(solution(13, 17)) // 43
console.log(solution(24, 27)) // 52