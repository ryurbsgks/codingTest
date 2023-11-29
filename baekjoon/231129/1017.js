// 지민이는 수의 리스트가 있을 때, 이를 짝지어 각 쌍의 합이 소수가 되게 하려고 한다. 예를 들어, {1, 4, 7, 10, 11, 12}가 있다고 하자. 지민이는 다음과 같이 짝지을 수 있다.
// 1 + 4 = 5, 7 + 10 = 17, 11 + 12 = 23
// 또는
// 1 + 10 = 11, 4 + 7 = 11, 11 + 12 = 23
// 수의 리스트가 주어졌을 때, 지민이가 모든 수를 다 짝지었을 때, 첫 번째 수와 어떤 수를 짝지었는지 오름차순으로 출력하는 프로그램을 작성하시오. 위의 예제에서 1 + 12 = 13으로 소수이다. 그러나, 남은 4개의 수를 합이 소수가 되게 짝지을 수 있는 방법이 없다. 따라서 위의 경우 정답은 4, 10이다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input[1].split(" ").map( (el) => Number(el));

function solution(arr) {

  let answer = [];
  let MAX = 2000;
  let N = Number(input[0]);
  let newArr = new Array(51).fill(0).map( () => []);
  let array = new Array(MAX + 1);
  let newArray = new Array(51);
  let A = new Array(51);
  let B = new Array(51);
  
  const findPrime = () => {
    array.fill(-1);

    for (let i = 2; i * i <= MAX; ++i) {
      if (array[i] === -1) {
        for (let j = i * i; j <= MAX; j += i) {
          if (array[j] === -1) {
            array[j] = i;
          }
        }
      }
    }
  };
  
  const dfs = (cur) => {
    if (newArray[cur]) {
      return false;
    }

    newArray[cur] = true;

    for (let el of newArr[cur]) {
      if (B[el] === -1 || dfs(B[el])) {
        A[cur] = el;
        B[el] = cur;
        A[el] = cur;
        B[cur] = el;

        return true;
      }
    }

    return false;
  };

  findPrime();

  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      if (array[arr[i] + arr[j]] === -1) {
        newArr[i].push(j);
        newArr[j].push(i);
      }
    }
  }

  for (let el of newArr[0]) {

    let res = 1;

    A.fill(-1);
    B.fill(-1);
    A[0] = el;
    B[0] = el;
    A[el] = 0;
    B[el] = 0;
    
    for (let i = 1; i < N; i++) {
      if (A[i] === -1) {
        newArray.fill(false);
        newArray[0] = true;
        newArray[el] = true;

        if (dfs(i)) {
          res++;
        }
      }
    }

    if (res === N / 2) {
      answer.push(arr[el]);
    }

  }

  return answer.length === 0 ? "-1" : answer.sort( (a, b) => a - b).join(" ");
}

console.log(solution(newInput));