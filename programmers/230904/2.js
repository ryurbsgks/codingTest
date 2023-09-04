// 억억단을 외우자

// 영우는 천하제일 암산대회를 앞두고 있습니다. 암산보다는 암기에 일가견이 있는 영우는 구구단을 확장하여 억억단을 만들고 외워버리기로 하였습니다.
// 억억단은 1억 x 1억 크기의 행렬입니다. 억억단을 외우던 영우는 친구 수연에게 퀴즈를 내달라고 부탁하였습니다.
// 수연은 평범하게 문제를 내봐야 영우가 너무 쉽게 맞히기 때문에 좀 어렵게 퀴즈를 내보려고 합니다. 적당한 수 e를 먼저 정하여 알려주고 e 이하의 임의의 수 s를 여러 개 얘기합니다. 영우는 각 s에 대해서 s보다 크거나 같고 e 보다 작거나 같은 수 중에서 억억단에서 가장 많이 등장한 수를 답해야 합니다. 만약 가장 많이 등장한 수가 여러 개라면 그 중 가장 작은 수를 답해야 합니다.
// 수연은 영우가 정답을 말하는지 확인하기 위해 당신에게 프로그램 제작을 의뢰하였습니다. e와 s의 목록 starts가 매개변수로 주어질 때 각 퀴즈의 답 목록을 return 하도록 solution 함수를 완성해주세요.

function solution(e, starts) {
  var answer = [];

  const arr = new Array(e + 1).fill(0);
  const newArr = new Array(e + 1).fill(e);

  for (let i = 1; i <= e; i++) {
    for (let j = i; j <= e; j += i) {
      arr[j] += 1;
    }
  }

  for (let i = e - 1; i > 0; i--) {
    if (arr[i] >= arr[newArr[i + 1]]) {
      newArr[i] = i;
    } else {
      newArr[i] = newArr[i + 1];
    }
  }
  
  answer = starts.map( (el) => newArr[el]);

  return answer;
}

console.log(solution(8, [1,3,7])) // [6,6,8]