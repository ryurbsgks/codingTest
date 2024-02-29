// 기숙사에서 살고 있는 준규는 한 개의 멀티탭을 이용하고 있다. 준규는 키보드, 헤어드라이기, 핸드폰 충전기, 디지털 카메라 충전기 등 여러 개의 전기용품을 사용하면서 어쩔 수 없이 각종 전기용품의 플러그를 뺐다 꽂았다 하는 불편함을 겪고 있다. 그래서 준규는 자신의 생활 패턴을 분석하여, 자기가 사용하고 있는 전기용품의 사용순서를 알아내었고, 이를 기반으로 플러그를 빼는 횟수를 최소화하는 방법을 고안하여 보다 쾌적한 생활환경을 만들려고 한다.
// 예를 들어 3 구(구멍이 세 개 달린) 멀티탭을 쓸 때, 전기용품의 사용 순서가 아래와 같이 주어진다면,
// 1. 키보드
// 2. 헤어드라이기
// 3. 핸드폰 충전기
// 4. 디지털 카메라 충전기
// 5. 키보드
// 6. 헤어드라이기
// 키보드, 헤어드라이기, 핸드폰 충전기의 플러그를 순서대로 멀티탭에 꽂은 다음 디지털 카메라 충전기 플러그를 꽂기 전에 핸드폰충전기 플러그를 빼는 것이 최적일 것이므로 플러그는 한 번만 빼면 된다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution() {

  let answer = 0;
  let [N, K] = input[0].split(" ").map( (el) => Number(el));
  let arr = input[1].split(" ").map( (el) => Number(el));
  let newArr = [];

  for (let i = 0; i < K; i++) {
    if (newArr.includes(arr[i])) {
      continue;
    }

    if (newArr.length !== N) {
      newArr.push(arr[i]);

      continue;
    }

    let n = 0;
    let num = 0;

    for (let el of newArr) {
      if (!arr.slice(i).includes(el)) {
        n = el;

        break;
      } else if (arr.slice(i).indexOf(el) > num) {
        num = arr.slice(i).indexOf(el);
        n = el;
      }
    }
    
    answer++;
    newArr[newArr.indexOf(n)] = arr[i];

  }

  return answer;
}

console.log(solution());