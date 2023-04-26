// 가장 큰 수 찾기

// 정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

function solution(array) {
  var answer = [];

  let arr = array.slice().sort( (a, b) => b - a);

  answer.push(arr[0]);

  array.map( (el, index) => {

    if (el === arr[0]) {
      answer.push(index);
    }
    
  });

  return answer;
}

console.log(solution([1, 8, 3])) // [8, 1]
console.log(solution([9, 10, 11, 8])) // [11, 2]