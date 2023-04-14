// 합성수 찾기

// 약수의 개수가 세 개 이상인 수를 합성수라고 합니다. 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.

function solution(n) {
  var answer = 0;

  let arr = [];

  for (let i = 1; i <=n; i++) {

    let memo = 0;

    for (let j = 1; j <=i; j++) {
      if (i % j === 0) {
        memo = memo + 1;
      }
    }

    if (memo >= 3) {
      arr.push(i);
    }
  }
  
  answer = arr.length;

  return answer;
}

console.log(solution(10)) // 5
console.log(solution(15)) // 8