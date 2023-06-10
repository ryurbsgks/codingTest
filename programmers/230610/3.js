// 음양 더하기

// 어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

function solution(absolutes, signs) {
  var answer = 123456789;

  let sum = 0;

  absolutes.map( (el, index) => {
    if (!signs[index]) {
      return sum = sum + (el * -1);
    }

    sum = sum + el;
  });

  answer = sum;

  return answer;
}

console.log(solution([4,7,12], [true,false,true])) // 9
console.log(solution([1,2,3], [false,false,true])) // 0