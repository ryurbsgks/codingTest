// 소수 찾기

// 한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.
// 각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  var answer = 0;

  let arr = numbers.split("");
  let set = new Set();

  const isPrime = (n) => {

    if (n < 2) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }

    return true;
  }

  const dfs = (set, arr, fixed) => {

    if (arr.length >= 1) {
      for (let i = 0; i < arr.length; i++) {

        let newFixed = fixed + arr[i];
        let newArr = [...arr];

        newArr.splice(i, 1);

        if (isPrime(parseInt(newFixed))) {
          set.add(parseInt(newFixed));
        }

        dfs(set, newArr, newFixed);
      }
    }

  }

  dfs(set, arr, "");
  answer = set.size;

  return answer;
}

console.log(solution("17")) // 3
console.log(solution("011")) // 2