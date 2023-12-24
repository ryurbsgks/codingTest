// 홍준이는 N개의 직사각형 블록을 가지고 있다. 홍준이는 블록 위에 또다른 블록을 올려놓는 방식으로 탑을 만들 수 있다. 이때, 두 개의 탑을 만드는데, 이 두 탑의 높이가 같게 만들려고 한다. 각 탑은 적어도 한 개의 블록을 포함해야 한다. 홍준이는 되도록이면 탑의 높이를 최대로 하려고 한다. 그리고 모든 블록을 사용할 필요는 없다.
// 각 블록의 높이가 주어질 때, 홍준이가 만들 수 있는 탑의 높이의 최댓값을 출력하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution(n, arr) {

  let answer;
  let newArr = arr.split(" ").map( (el) => Number(el));
  let array = new Array(n + 1).fill(0).map( () => new Array(500005).fill(0));

  const arrayf = (cur, diff) => {

    let ret = array[cur][diff];

    if (ret) {
      return ret;
    }

    if (cur === n) {
      if (diff) {
        return -1e9;
      }

      return 0;
    }

    ret = Math.max(arrayf(cur + 1, diff), arrayf(cur + 1, diff + newArr[cur]) + newArr[cur], arrayf(cur + 1, Math.abs(diff - newArr[cur])) + (diff - newArr[cur] < 0 ? newArr[cur] - diff : 0));
    array[cur][diff] = ret;
    
    return ret;
  };

  answer = arrayf(0, 0);

  return answer ? answer : -1;
}

console.log(solution(Number(input[0]), input[1]));