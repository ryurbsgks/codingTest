// 민식이는 회사의 매니저이다. 그리고, 민식이는 회사의 중요한 뉴스를 모든 직원에게 빠르게 전달하려고 한다. 민식이의 회사는 트리 구조이다. 모든 직원은 정확하게 한 명의 직속 상사가 있다. 자기자신은 그들 자기 자신의 직접 또는 간접 상사가 아니고, 모든 직원은 민식이의 직접 또는 간접적인 부하이다.
// 민식이는 일단 자기 자신의 직속 부하에게 한 번에 한 사람씩 전화를 한다. 뉴스를 들은 후에, 각 부하는 그의 직속 부하에게 한 번에 한 사람씩 전화를 한다. 이 것은 모든 직원이 뉴스를 들을 때 까지 계속된다. 모든 사람은 자신의 직속 부하에게만 전화를 걸 수 있고, 전화는 정확하게 1분 걸린다. 이때 모든 직원이 소식을 듣는데 걸리는 시간의 최솟값을 구하는 프로그램을 작성하시오.
// 오민식의 사원 번호는 0이고, 다른 사원의 번호는 1부터 시작한다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution(N, arr) {

  let newArr = arr.split(" ").map( (el) => Number(el));
  let array = [];
  let newArray = new Array(N).fill(false);

  const dp = (n) => {

    let arr = [];

    for (let el of array[n]) {
      dp(el);
      arr.push(newArray[el]);
    }

    if (array[n].length === 0) {
      arr.push(0);
    }
  
    arr.sort( (a, b) => b - a);

    let newArr = arr.map( (el, idx) => el + idx + 1);

    newArray[n] = Math.max(...newArr);

  };

  for (let i = 0; i < N; i++) {
    array.push([]);
  }
  
  for (let i = 1; i < N; i++) {
    array[newArr[i]].push(i);
  }
  
  dp(0);

  return newArray[0] - 1;
}

console.log(solution(Number(input[0]), input[1]));