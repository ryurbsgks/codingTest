// 주식가격

// 초 단위로 기록된 주식가격이 담긴 배열 prices가 매개변수로 주어질 때, 가격이 떨어지지 않은 기간은 몇 초인지를 return 하도록 solution 함수를 완성하세요.

function solution(prices) {
  var answer = [];

  let arr = new Array(prices.length).fill(0);
  let newArr = [];
  let length = prices.length;

  for (let i = 0; i < length; i++) {
    while (newArr.length && prices[i] < prices[newArr[newArr.length - 1]]) {

      let temp = newArr.pop();

      arr[temp] = i - temp;

    }

    newArr.push(i)
  }

  while (newArr.length) {

    let temp = newArr.pop();

    arr[temp] = length - temp - 1;

  }

  answer = arr;

  return answer;
}

console.log(solution([1, 2, 3, 2, 3])) // [4, 3, 1, 1, 0]