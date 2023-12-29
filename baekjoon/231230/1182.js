// N개의 정수로 이루어진 수열이 있을 때, 크기가 양수인 부분수열 중에서 그 수열의 원소를 다 더한 값이 S가 되는 경우의 수를 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution(arr, newArr) {

  let answer = 0;
  let [N, S] = arr;
  let array = [];

  const subsetSum = (idx, subSum) => {
    if (idx >= N) {
      return;
    }
  
    subSum += array[idx];
  
    if (subSum === S) {
      answer += 1;
    }

    subsetSum(idx + 1, subSum);
    subsetSum(idx + 1, subSum - array[idx]);
  };

  array = newArr;
  subsetSum(0, 0);

  return answer;
}

console.log(solution(input[0].split(" ").map( (el) => Number(el)), input[1].split(" ").map( (el) => Number(el))));