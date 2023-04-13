// 구슬을 나누는 경우의 수

// 머쓱이는 구슬을 친구들에게 나누어주려고 합니다. 구슬은 모두 다르게 생겼습니다. 머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때, balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.

function solution(balls, share) {
  var answer = 0;

  const factorial = (n) => {

    let bigInt = BigInt(n);

    if (bigInt === BigInt(1)) {
      return BigInt(1);
    }
    
    return bigInt * factorial(bigInt - BigInt(1));
  };

  const newFactorial = (n, finish) => {

    let bigInt = BigInt(n);
    let bigIntFinish = BigInt(finish);

    if (bigInt === bigIntFinish) {
      return bigInt;
    }

    return bigInt * newFactorial(bigInt - BigInt(1), bigIntFinish);
  }
  
  answer = newFactorial(balls, balls - share + 1) / factorial(share);

  return answer;
}

console.log(solution(3, 2)) // 3
console.log(solution(5, 3)) // 10