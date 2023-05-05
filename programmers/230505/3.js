// 문자열 묶기

// 문자열 배열 strArr이 주어집니다. strArr의 원소들을 길이가 같은 문자열들끼리 그룹으로 묶었을 때 가장 개수가 많은 그룹의 크기를 return 하는 solution 함수를 완성해 주세요.

function solution(strArr) {
  var answer = 0;

  let obj = {};

  strArr.map( (el) => {
    if (obj[el.length]) {
      return obj[el.length] = obj[el.length] + 1;
    }

    obj[el.length] = 1;
  });

  for (const key in obj) {
    if (answer < obj[key]) {
      answer = obj[key];
    }
  }

  return answer;
}

console.log(solution(["a","bc","d","efg","hi"])) // 2