// 정사각형으로 만들기

// 이차원 정수 배열 arr이 매개변수로 주어집니다. arr의 행의 수가 더 많다면 열의 수가 행의 수와 같아지도록 각 행의 끝에 0을 추가하고, 열의 수가 더 많다면 행의 수가 열의 수와 같아지도록 각 열의 끝에 0을 추가한 이차원 배열을 return 하는 solution 함수를 작성해 주세요.

function solution(arr) {
  var answer = [[]];

  if (arr.length > arr[0].length) {
    for (let i = 0; i < arr.length; i++) {

      let newArr = [...arr[i]];

      for (let j = arr[0].length; j < arr.length; j++) {
        newArr.push(0);
      }

      answer.push(newArr);
    }
  } else if (arr.length < arr[0].length) {
    for (let i = 0; i < arr[0].length; i++) {
      if (arr[i]) {
        answer.push(arr[i]);
      } else {

        let newArr = Array(arr[0].length).fill(0);
        
        answer.push(newArr);
      }
    }
  } else if (arr.length === arr[0].length) {
    for (let i = 0; i < arr.length; i++) {
      answer.push(arr[i]);
    }
  }

  answer.shift();

  return answer;
}

console.log(solution([[572, 22, 37], [287, 726, 384], [85, 137, 292], [487, 13, 876]])) // [[572, 22, 37, 0], [287, 726, 384, 0], [85, 137, 292, 0], [487, 13, 876, 0]]
console.log(solution([[57, 192, 534, 2], [9, 345, 192, 999]])) // [[57, 192, 534, 2], [9, 345, 192, 999], [0, 0, 0, 0], [0, 0, 0, 0]]
console.log(solution([[1, 2], [3, 4]])) // [[1, 2], [3, 4]]