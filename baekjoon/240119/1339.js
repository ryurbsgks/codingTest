// 민식이는 수학학원에서 단어 수학 문제를 푸는 숙제를 받았다.
// 단어 수학 문제는 N개의 단어로 이루어져 있으며, 각 단어는 알파벳 대문자로만 이루어져 있다. 이때, 각 알파벳 대문자를 0부터 9까지의 숫자 중 하나로 바꿔서 N개의 수를 합하는 문제이다. 같은 알파벳은 같은 숫자로 바꿔야 하며, 두 개 이상의 알파벳이 같은 숫자로 바뀌어지면 안 된다.
// 예를 들어, GCF + ACDEB를 계산한다고 할 때, A = 9, B = 4, C = 8, D = 6, E = 5, F = 3, G = 7로 결정한다면, 두 수의 합은 99437이 되어서 최대가 될 것이다.
// N개의 단어가 주어졌을 때, 그 수의 합을 최대로 만드는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1);

function solution(N) {

  let result = 0;
  let arr = [];
  let obj = {};
  let num = 9;

  for (let i = 0; i < N; i++) {
    arr.push(newInput[i]);
  }

  for (let el of arr) {

    let x = el.length - 1;
  
    for (let element of el) {
      if (obj[element]) {
        obj[element] += Math.pow(10, x);
      } else {
        obj[element] = Math.pow(10, x);
      }

      x -= 1;
    }

  }

  let newObj = Object.values(obj).sort( (a, b) => b - a);

  for (let el of newObj) {
    result += el * num;
    num -= 1;
  }

  return result;
}

console.log(solution(Number(input[0])));