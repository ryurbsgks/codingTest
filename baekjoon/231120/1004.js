// 어린 왕자는 소혹성 B-664에서 자신이 사랑하는 한 송이 장미를 위해 살아간다. 어느 날 장미가 위험에 빠지게 된 것을 알게 된 어린 왕자는, 장미를 구하기 위해 은하수를 따라 긴 여행을 하기 시작했다. 하지만 어린 왕자의 우주선은 그렇게 좋지 않아서 행성계 간의 이동을 최대한 피해서 여행해야 한다. 아래의 그림은 어린 왕자가 펼쳐본 은하수 지도의 일부이다.
// 빨간 실선은 어린 왕자가 출발점에서 도착점까지 도달하는데 있어서 필요한 행성계 진입/이탈 횟수를 최소화하는 경로이며, 원은 행성계의 경계를 의미한다. 이러한 경로는 여러 개 존재할 수 있지만 적어도 3번의 행성계 진입/이탈이 필요하다는 것을 알 수 있다.
// 위와 같은 은하수 지도, 출발점, 도착점이 주어졌을 때 어린 왕자에게 필요한 최소의 행성계 진입/이탈 횟수를 구하는 프로그램을 작성해 보자. 행성계의 경계가 맞닿거나 서로 교차하는 경우는 없다. 또한, 출발점이나 도착점이 행성계 경계에 걸쳐진 경우 역시 입력으로 주어지지 않는다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1, input.length);

function solution(arr) {
  
  let answer = [];
  let idx = 0;

  for (let i = 0; i < Number(input[0]); i++) {

    let count = 0;
    let [x1, y1, x2, y2] = arr[idx++].split(" ").map( (el) => Number(el));
    let n = Number(arr[idx++]);
    
    for (let j = 0; j < n; j++) {

      let [cx, cy, r] = arr[idx++].split(" ").map( (el) => Number(el));

      if (Math.pow((x1 - cx), 2) + Math.pow((y1 - cy), 2) < Math.pow(r, 2)) {
        count++;
      } 

      if (Math.pow((x2 - cx), 2) + Math.pow((y2 - cy), 2) < Math.pow(r, 2)) {
        count++;
      } 
      
      if (Math.pow((x1 - cx), 2) + Math.pow((y1 - cy), 2) < Math.pow(r, 2) && Math.pow(x2 - cx, 2) + Math.pow(y2 - cy, 2) < Math.pow(r, 2)) {
        count -= 2;
      }

    }

    answer.push(count);
    
  }

  return answer.join("\n");
}

console.log(solution(newInput));