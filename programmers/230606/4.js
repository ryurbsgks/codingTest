// 소수 만들기

// 주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

function solution(nums) {
  var answer = -1;

  const primeNumber = (num) => {

    if (num === 2) {
      return true;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    
    return true;
  };

  const getCombination = (arr, n, memo) => {

    if (n === 0) {

      let num = memo.reduce( (acc, cur) => acc + cur, 0);

      if (primeNumber(num)) {
        answer++;
        return;
      }

      return;
    }

    for (let i = 0; i < arr.length; i++) {

      let choice = arr[i];
      let newArr = arr.slice(i + 1);

      getCombination(newArr, n - 1, memo.concat(choice));
    }

  };

  getCombination(nums, 3, []);
  answer++;

  return answer;
}

console.log(solution([1,2,3,4])) // 1
console.log(solution([1,2,7,6,4])) // 4