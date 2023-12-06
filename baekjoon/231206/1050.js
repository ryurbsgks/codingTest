// 과학자 임문빈은 마법의 물약을 만든다. 임문빈은 많은 재료를 가지고 있고, 다음과 같은 식을 이용해서 만든다.
// S=N1×S1+...+Nk×Sk
// 여기서 N1, ..., Nk는 1보다 크거나 같고, 9보다 작거나 같은 한 자리 숫자이고, S1, ..., Sk는 재료의 이름이다. 그리고, k는 1보다 크거나 같은 자연수이다. 마지막으로 S는 마법의 물약의 이름이다. 위의 식은 N1만큼 S1을 넣고, ..., Nk만큼 Sk를 넣으면 S가 1만큼 만들어 진다는 얘기와 같다.
// 같은 물약을 만드는데 여러 가지 재료법이 있을 수도 있다. 이때는, 아무거나 사용하면 된다. 마법의 물약은 또 다른 물약을 만드는데 재료가 될 수도 있고, 이 중 어떤 재료는 시장에서 살 수 있다.
// 임문빈은 이름이 LOVE인 마법의 물약을 만들려고 한다. (이 물약을 먹으면 임문빈을 사랑하게 된다) 시장에서 파는 재료와 그 가격이 주어지고, 임문빈이 만들 수 있는 모든 물약의 식이 주어진다. 이때, LOVE를 1만큼 만드는데 드는 비용의 최솟값을 출력한다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1, input.length);

function solution(arr) {

  let [N, M] = input[0].split(" ").map( (el) => Number(el));
  let limit = 1000000000;
  let newArr = [];
  let map = new Map();
  let check = true;

  for (let i = 1; i <= N; i++) {

    let [s1, c1] = arr[i - 1].split(" ");

    map.set(s1, Number(c1));
    
  }

  for (let i = N + 1; i <= N + M; i++) {

    let tmp = arr[i - 1];
    let prev = 0;
    let cur = tmp.indexOf("=");
    let s1 = tmp.substring(prev, cur);
    let array = [];

    prev = cur + 1;
  
    while (true) {
      cur = tmp.indexOf("+", prev);

      if (cur === -1) {
        cur = tmp.length;
      }
      
      let s2 = tmp.substring(prev, cur);
      let c1 = Number(s2[0]);
      let x = s2.substring(1);

      prev = cur + 1;
  
      if (!map.has(x)) {
        map.set(x, -1);
      }

      array.push([c1, x]);
  
      if (cur === tmp.length) {
        break;
      }
        
    }
  
    if (!map.has(s1)) {
      map.set(s1, -1);
    }

    newArr.push([s1, array]);

  }

  while (check) {
    check = false;

    for (let i = 0; i < newArr.length; i++) {

      let sum = 0;
      let name = newArr[i][0];

      for (let j = 0; j < newArr[i][1].length; j++) {

        let cnt = newArr[i][1][j][0];
        let x = newArr[i][1][j][1];

        if (map.get(x) !== -1) {
          sum += cnt * map.get(x);

          if (sum > limit) {
            sum = limit + 1;
          }
        } else {
          sum = -1;

          break;
        }

      }

      if (sum > 0) {
        if (map.get(name) === -1 || map.get(name) > sum) {
          map.set(name, sum);
          check = true;
        }
      }

    }
  }

  return map.has("LOVE") ? map.get("LOVE") : -1;
}

console.log(solution(newInput));