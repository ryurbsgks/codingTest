// 초기에 n+1개의 집합 {0}, {1}, {2}, ..., {n}이 있다. 여기에 합집합 연산과, 두 원소가 같은 집합에 포함되어 있는지를 확인하는 연산을 수행하려고 한다.
// 집합을 표현하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1);

function solution() {

  let answer = [];
  let [n, m] = input[0].split(" ").map( (el) => Number(el));
  let arr = [];

  const findArr = (x) => {
    if (arr[x] !== x) {
      arr[x] = findArr(arr[x]);
    }

    return arr[x];
  };
  
  const unionArr = (a, b) => {
    a = findArr(a);
    b = findArr(b);

    if (a < b) {
      arr[b] = a;
    } else {
      arr[a] = b;
    }
  };

  for (let i = 0; i <= n; i++) {
    arr.push(i);
  }

  for (let i = 0; i < m; i++) {

    let [opr, a, b] = newInput[i].split(" ").map( (el) => Number(el));

    if (opr === 0) {
      unionArr(a, b);
    } else {
      if (findArr(a) === findArr(b)) {
        answer.push("YES");
      } else {
        answer.push("NO");
      }
    }

  }

  return answer.join("\n");
}

console.log(solution());