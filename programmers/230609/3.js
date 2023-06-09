// 두 개 뽑아서 더하기

// 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  var answer = [];

  let newArr = [];

  const getCombination = (arr, n, memo) => {

    if(n === 0){
      newArr.push(memo.reduce( (acc, cur) => acc + cur, 0));

      return;
    }

    for(let i = 0; i < arr.length; i++){

      let choice = arr[i];
      let newArr = arr.slice(i + 1);

      getCombination(newArr, n - 1, memo.concat(choice));
    }

  };

  getCombination(numbers, 2, []);
  newArr.map( (el) => {
    if (!answer.includes(el)) {
      answer.push(el);
    }
  });
  answer.sort( (a, b) => a - b);

  return answer;
}

console.log(solution([2,1,3,4,1])) // [2,3,4,5,6,7]
console.log(solution([5,0,2,7])) // [2,5,7,9,12]