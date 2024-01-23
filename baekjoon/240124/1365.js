// 공화국에 있는 유스타운 시에서는 길을 사이에 두고 전봇대가 아래와 같이 두 줄로 늘어서 있다. 그리고 길 왼편과 길 오른편의 전봇대는 하나의 전선으로 연결되어 있다. 어떤 전봇대도 두 개 이상의 다른 전봇대와 연결되어 있지는 않다.
// 문제는 이 두 전봇대 사이에 있는 전깃줄이 매우 꼬여 있다는 점이다. 꼬여있는 전깃줄은 화재를 유발할 가능성이 있기 때문에 유스타운 시의 시장 임한수는 전격적으로 이 문제를 해결하기로 했다.
// 임한수는 꼬여 있는 전깃줄 중 몇 개를 적절히 잘라 내어 이 문제를 해결하기로 했다. 하지만 이미 설치해 놓은 전선이 아깝기 때문에 잘라내는 전선을 최소로 하여 꼬여 있는 전선이 하나도 없게 만들려고 한다.
// 유스타운 시의 시장 임한수를 도와 잘라내야 할 전선의 최소 개수를 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution() {

  let arr = input[1].split(" ").map( (el) => Number(el));
  let result = [arr[0]];

  const binarySearch = (arr, target) => {

    let low = 0;
    let high = arr.length;
  
    while (low < high) {

      let mid = Math.floor((low + high) / 2);

      if (arr[mid] < target) {
        low = mid + 1;
      } else {
        high = mid;
      }

    }
  
    return low;
  };

  for (let i = 1; i < arr.length; i++) {

    let index = binarySearch(result, arr[i]);

    if (index === result.length) {
      result.push(arr[i]);
    } else {
      result[index] = arr[i];
    }

  }

  return arr.length - result.length;
}

console.log(solution());