// 지민이는 전체 페이지의 수가 N인 책이 하나 있다. 첫 페이지는 1 페이지이고, 마지막 페이지는 N 페이지이다. 각 숫자가 전체 페이지 번호에서 모두 몇 번 나오는지 구해보자.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim();

function solution(N) {

  let answer = "";
  let arr = new Array(10).fill(0);

  const calc = (start, end, ten) => {

    let count = ~~(end / 10) - ~~(start / 10) + 1;

    arr.map( (_, index) => {
      arr[index] += count * ten;
    });
    
  };

  const increaseByNum = (num, ten) => {
    while (num > 0) {
      arr[num % 10] += ten;
      num = Math.floor(num / 10);
    }
  };

  const result = (start, end, ten) => {
    while (start % 10 !== 0 && start <= end) {
      increaseByNum(start, ten);

      start += 1;
    }
  
    if (start > end) {
      return;
    }
  
    while (end % 10 !== 9 && end >= start) {
      increaseByNum(end, ten);

      end -= 1;
    }
  
    calc(start, end, ten);
    result(~~(start / 10), ~~(end / 10), ten * 10);
  }

  result(1, N, 1);

  arr.map( (el) => {
    answer = answer + el + " ";
  });

  return answer;
}

console.log(solution(Number(input)));