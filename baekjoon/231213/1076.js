// 전자 제품에는 저항이 들어간다. 저항은 색 3개를 이용해서 그 저항이 몇 옴인지 나타낸다. 처음 색 2개는 저항의 값이고, 마지막 색은 곱해야 하는 값이다. 저항의 값은 다음 표를 이용해서 구한다.
// 색	      값	  곱
// black	  0	    1
// brown	  1	    10
// red	    2	    100
// orange	  3	    1,000
// yellow	  4	    10,000
// green	  5	    100,000
// blue	    6	    1,000,000
// violet	  7	    10,000,000
// grey	    8	    100,000,000
// white	  9	    1,000,000,000
// 예를 들어, 저항의 색이 yellow, violet, red였다면 저항의 값은 4,700이 된다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution(arr) {

  let answer = "";
  let obj = {
    black: {
      value: 0,
      multiply: 1 
    },
    brown: {
      value: 1,
      multiply: 10
    },
    red: {
      value: 2,
      multiply: 100 
    },
    orange: {
      value: 3,
      multiply: 1000
    },
    yellow: {
      value: 4,
      multiply: 10000
    },
    green: {
      value: 5,
      multiply: 100000
    },
    blue: {
      value: 6,
      multiply: 1000000 
    },
    violet: {
      value: 7,
      multiply: 10000000
    },
    grey: {
      value: 8,
      multiply: 100000000
    },
    white: {
      value: 9,
      multiply: 1000000000
    }
  };

  arr.map( (el, idx) => {
    if (idx === 2) {
      return answer *= obj[el].multiply;
    }

    answer += obj[el].value;
  });

  return answer;
}

console.log(solution(input));