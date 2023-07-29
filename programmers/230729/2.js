// 택배 배달과 수거하기

// 당신은 일렬로 나열된 n개의 집에 택배를 배달하려 합니다. 배달할 물건은 모두 크기가 같은 재활용 택배 상자에 담아 배달하며, 배달을 다니면서 빈 재활용 택배 상자들을 수거하려 합니다.
// 배달할 택배들은 모두 재활용 택배 상자에 담겨서 물류창고에 보관되어 있고, i번째 집은 물류창고에서 거리 i만큼 떨어져 있습니다. 또한 i번째 집은 j번째 집과 거리 j - i만큼 떨어져 있습니다. (1 ≤ i ≤ j ≤ n)
// 트럭에는 재활용 택배 상자를 최대 cap개 실을 수 있습니다. 트럭은 배달할 재활용 택배 상자들을 실어 물류창고에서 출발해 각 집에 배달하면서, 빈 재활용 택배 상자들을 수거해 물류창고에 내립니다. 각 집마다 배달할 재활용 택배 상자의 개수와 수거할 빈 재활용 택배 상자의 개수를 알고 있을 때, 트럭 하나로 모든 배달과 수거를 마치고 물류창고까지 돌아올 수 있는 최소 이동 거리를 구하려 합니다. 각 집에 배달 및 수거할 때, 원하는 개수만큼 택배를 배달 및 수거할 수 있습니다.
// 다음은 cap=4 일 때, 최소 거리로 이동하면서 5개의 집에 배달 및 수거하는 과정을 나타낸 예시입니다.
// 배달 및 수거할 재활용 택배 상자 개수
//        집 #1	  집 #2	  집 #3	  집 #4	  집 #5
// 배달	  1개	    0개	    3개	    1개	     2개
// 수거	  0개	    3개	    0개	    4개	     0개
// 배달 및 수거 과정
//                집 #1	  집 #2	  집 #3	  집 #4	  집 #5	  설명
// 남은 배달/수거	 1/0	   0/3	   3/0	   1/4	   2/0	  물류창고에서 택배 3개를 트럭에 실어 출발합니다.
// 남은 배달/수거	 1/0	   0/3	   3/0	   0/4	   0/0	  물류창고에서 5번째 집까지 이동하면서(거리 5) 4번째 집에 택배 1개를 배달하고, 5번째 집에 택배 2개를 배달합니다.
// 남은 배달/수거	 1/0	   0/3	   3/0	   0/0	   0/0	  5번째 집에서 물류창고까지 이동하면서(거리 5) 4번째 집에서 빈 택배 상자 4개를 수거한 후, 수거한 빈 택배 상자를 물류창고에 내리고 택배 4개를 트럭에 싣습니다.
// 남은 배달/수거	 0/0	   0/3	   0/0	   0/0	   0/0	  물류창고에서 3번째 집까지 이동하면서(거리 3) 1번째 집에 택배 1개를 배달하고, 3번째 집에 택배 3개를 배달합니다.
// 남은 배달/수거	 0/0	   0/0	   0/0	   0/0	   0/0	  3번째 집에서 물류창고까지 이동하면서(거리 3) 2번째 집에서 빈 택배 상자 3개를 수거한 후, 수거한 빈 택배 상자를 물류창고에 내립니다.
// 16(=5+5+3+3)의 거리를 이동하면서 모든 배달 및 수거를 마쳤습니다. 같은 거리로 모든 배달 및 수거를 마치는 다른 방법이 있지만, 이보다 짧은 거리로 모든 배달 및 수거를 마치는 방법은 없습니다.
// 트럭에 실을 수 있는 재활용 택배 상자의 최대 개수를 나타내는 정수 cap, 배달할 집의 개수를 나타내는 정수 n, 각 집에 배달할 재활용 택배 상자의 개수를 담은 1차원 정수 배열 deliveries와 각 집에서 수거할 빈 재활용 택배 상자의 개수를 담은 1차원 정수 배열 pickups가 매개변수로 주어집니다. 이때, 트럭 하나로 모든 배달과 수거를 마치고 물류창고까지 돌아올 수 있는 최소 이동 거리를 return 하도록 solution 함수를 완성해 주세요.

function solution(cap, n, deliveries, pickups) {
  var answer = 0;

  let temp = [0, 0];
  let index = n - 1;
  let idx = n - 1;
  let arr = [];
  let newArr = [];

  while (index > -1) {

    let diff = temp[0] + deliveries[index] - cap;

    if (temp[0] === 0 && deliveries[index] > 0) {
      arr.push(index);
    }

    if (diff <= 0) {
      temp[0] = temp[0] + deliveries[index];
      deliveries[index] = 0;
    } else {
      deliveries[index] = deliveries[index] - (cap - temp[0]);
      temp[0] = 0;

      continue;
    }

    index--;
  }

  while (idx > -1) {

    let diff = temp[1] + pickups[idx] - cap;

    if (temp[1] === 0 && pickups[idx] > 0) {
      newArr.push(idx);
    }

    if (diff <= 0) {
      temp[1] = temp[1] + pickups[idx];
      pickups[idx] = 0;
    } else {
      pickups[idx] = pickups[idx] - (cap - temp[1]);
      temp[1] = 0;

      continue;
    }

    idx = idx - 1;
  }

  if (arr.length > 0 && newArr.length > 0) {

    let length = arr.length >= newArr.length ? newArr.length : arr.length;

    for (let i = 0; i < length; i++) {

      let d = arr.shift();
      let p = newArr.shift();

      answer = answer + 2 * (p > d ? p + 1 : d + 1);
    }

    while (arr.length > 0) {
      answer = answer + 2 * (arr.shift() + 1);
    }

    while (newArr.length > 0) {
      answer = answer + 2 * (newArr.shift() + 1);
    }

  }

  return answer;
}

console.log(solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0])) // 16
console.log(solution(2, 7, [1, 0, 2, 0, 1, 0, 2], [0, 2, 0, 1, 0, 2, 0])) // 30