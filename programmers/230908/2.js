// 에어컨

// 현대모비스에서 개발한 실내공조 제어 시스템은 차내에 승객이 탑승 중일 때 항상 쾌적한 실내온도(t1 ~ t21)를 유지할 수 있도록 합니다. 현재(0분) 실내온도는 실외온도와 같습니다.
// 실내공조 제어 시스템은 실내온도를 조절하기 위해 에어컨의 전원을 켜 희망온도를 설정합니다. 희망온도는 에어컨의 전원이 켜져 있는 동안 원하는 값으로 변경할 수 있습니다. 실내온도와 희망온도가 다르다면 1분 뒤 실내온도가 희망온도와 같아지는 방향으로 1도 상승 또는 하강합니다. 실내온도가 희망온도와 같다면 에어컨이 켜져 있는 동안은 실내온도가 변하지 않습니다.
// 에어컨의 전원을 끄면 실내온도가 실외온도와 같아지는 방향으로 매 분 1도 상승 또는 하강합니다. 실내온도와 실외온도가 같다면 실내온도는 변하지 않습니다.
// 에어컨의 소비전력은 현재 실내온도에 따라 달라집니다. 에어컨의 희망온도와 실내온도가 다르다면 매 분 전력을 a만큼 소비하고, 희망온도와 실내온도가 같다면 매 분 전력을 b만큼 소비합니다. 에어컨이 꺼져 있다면 전력을 소비하지 않으며, 에어컨을 켜고 끄는데 필요한 시간과 전력은 0이라고 가정합니다.
// 실내공조 제어 시스템은 차내에 승객이 탑승 중일 때 실내온도를 t1 ~ t2도 사이로 유지하면서, 에어컨의 소비전력을 최소화합니다.
// 다음은 실외온도가 28도, t1= 18, t2 = 26, a = 10 b = 8인 예시입니다.
// 시간(분)	  승객 탑승
// 0	        x
// 1	        x
// 2	        o
// 3	        o
// 4	        o
// 5	        o
// 6	        o
// 승객이 탑승 중인 2 ~ 6분의 실내온도를 18 ~ 26도 사이로 유지해야 합니다.
// 다음은 2 ~ 6분의 실내온도를 쾌적한 온도로 유지하는 방법 중 하나입니다.
// 시간(분)	  승객 탑승	  실내온도	  희망온도
// 0	        x	          28	      26
// 1	        x	          27	      26
// 2	        o	          26	      26
// 3	        o	          26	      26
// 4	        o	          26	      26
// 5	        o	          26	      26
// 6	        o	          26	      off
// 0분의 실내온도는 항상 실외온도와 같습니다.
// 6분에 에어컨의 전원을 껐습니다.
// 0 ~ 5분에 에어컨의 희망온도를 26도로 설정했습니다. 0 ~ 1분에 희망온도와 실내온도가 다르므로 전력을 매 분 10씩, 2 ~ 5분에 희망온도와 실내온도가 같으므로 전력을 매 분 8씩 소비했습니다. 이때 총 소비전력은 52(= 2 × 10 + 4 × 8)입니다.
// 다음은 2 ~ 6분의 실내온도를 쾌적한 온도로 유지하는 또 다른 방법입니다.
// 시간(분)	  승객 탑승	  실내온도	  희망온도
// 0	        x	          28	      24
// 1	        x	          27	      24
// 2	        o	          26	      24
// 3	        o	          25	      24
// 4	        o	          24	      off
// 5	        o	          25	      off
// 6	        o	          26	      off
// 0 ~ 3분에 에어컨의 희망온도를 24도로 설정해 전력을 매 분 10씩 소비했습니다. 이때 총 소비전력은 40(= 4 × 10)이며, 이보다 소비전력이 적어지는 방법은 없습니다.
// 실외온도를 나타내는 정수 temperature, 쾌적한 실내온도의 범위를 나타내는 정수 t1, t2, 에어컨의 소비전력을 나타내는 정수 a, b와 승객이 탑승 중인 시간을 나타내는 1차원 정수 배열 onboard가 매개변수로 주어집니다. 승객이 탑승 중인 시간에 쾌적한 실내온도를 유지하기 위한 최소 소비전력을 return 하도록 solution 함수를 완성해 주세요.

function solution(temperature, t1, t2, a, b, onboard) {
  var answer = 0;

  let arr = new Array(onboard.length);

  if (temperature > t2) {
    temperature = t1 - temperature + t2;
  }

  t1 = t1 - temperature;
  t2 = t2 - temperature;
  temperature = 0;

  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(t2 + 1).fill(Number.MAX_SAFE_INTEGER);
  }

  arr[0][temperature] = 0;

  for (let i = 0; i < onboard.length - 1; i++) {

    let low = 0;
		let high = t2;

    if (onboard[i] === 1) {
      low = t1;
    }
		
    for (let j = low; j <= high; j++) {
      if (arr[i][j] === Number.MAX_SAFE_INTEGER) {
        continue;
      }

      if (j === temperature) {
        arr[i + 1][j] = Math.min(arr[i + 1][j], arr[i][j]);
      } else {
        arr[i + 1][j] = Math.min(arr[i + 1][j], arr[i][j] + b);
      }

      if (j < t2) {
        arr[i + 1][j + 1] = Math.min(arr[i + 1][j + 1], arr[i][j] + a);
      }

      if (j > temperature) {
        arr[i + 1][j - 1] = Math.min(arr[i + 1][j - 1], arr[i][j]);
      }
    }

  }

	answer = Number.MAX_SAFE_INTEGER;

	let low = 0;
	let high = t2;

	if (onboard[onboard.length - 1] === 1) {
    low = t1;
	}

	for (let j = low; j <= high; j++) {
	  answer = Math.min(answer, arr[arr.length - 1][j]);
	}

  return answer;
}

console.log(solution(28, 18, 26, 10, 8, [0, 0, 1, 1, 1, 1, 1])) // 40
console.log(solution(-10, -5, 5, 5, 1, [0, 0, 0, 0, 0, 1, 0])) // 25
console.log(solution(11, 8, 10, 10, 1, [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1])) // 20
console.log(solution(11, 8, 10, 10, 100, [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1])) // 60