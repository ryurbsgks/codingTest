// 최빈값 구하기

// 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.

function solution(array) {
  var answer = 0;

  let obj = {};

  array.map( (el) => {
    if (obj[el]) {
      obj[el] = obj[el] + 1;
    } else {
      obj[el] = 1;
    }
  });

  let arr = Object.values(obj);

  arr.sort( (a, b) => {
    return b - a;
  });

  if (arr.length > 1) {
    if (arr[0] === arr[1]) {
      return answer = -1
    }
  }

  answer = Number(Object.keys(obj).find( (key) => obj[key] === arr[0]));

  return answer;
}

console.log(solution([1, 2, 3, 3, 3, 4])) // 3
console.log(solution([1, 1, 2, 2])) // -1
console.log(solution([1])) // 1