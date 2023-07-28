// 유사 칸토어 비트열

// 수학에서 칸토어 집합은 0과 1 사이의 실수로 이루어진 집합으로, [0, 1]부터 시작하여 각 구간을 3등분하여 가운데 구간을 반복적으로 제외하는 방식으로 만들어집니다.
// 남아는 칸토어 집합을 조금 변형하여 유사 칸토어 비트열을 만들었습니다. 유사 칸토어 비트열은 다음과 같이 정의됩니다.
// 0 번째 유사 칸토어 비트열은 "1" 입니다.
// n(1 ≤ n) 번째 유사 칸토어 비트열은 n - 1 번째 유사 칸토어 비트열에서의 1을 11011로 치환하고 0을 00000로 치환하여 만듭니다.
// 남아는 n 번째 유사 칸토어 비트열에서 특정 구간 내의 1의 개수가 몇 개인지 궁금해졌습니다.
// n과 1의 개수가 몇 개인지 알고 싶은 구간을 나타내는 l, r이 주어졌을 때 그 구간 내의 1의 개수를 return 하도록 solution 함수를 완성해주세요.

function solution(n, l, r) {
  var answer = 0;

  let arr = new Array(r - l + 1).fill().map( (_, idx) => idx + l);

  if (n === 1) {
    return arr.filter( (el) => el !== 3).length;
  }

  while (arr.length) {

    let newArr = [];

    arr.map( (el) => {
      if (el === 1) {
        answer = answer + 1;
      } else {
        if ((el + 2) % 5) {
          
          let num = Math.ceil(el / 5);

          newArr.push(num);
        }
      }
    });

    arr = newArr;
  }

  return answer;
}

console.log(solution(2, 4, 17)) // 8