// 메뉴 리뉴얼

// 레스토랑을 운영하던 스카피는 코로나19로 인한 불경기를 극복하고자 메뉴를 새로 구성하려고 고민하고 있습니다.
// 기존에는 단품으로만 제공하던 메뉴를 조합해서 코스요리 형태로 재구성해서 새로운 메뉴를 제공하기로 결정했습니다. 어떤 단품메뉴들을 조합해서 코스요리 메뉴로 구성하면 좋을 지 고민하던 "스카피"는 이전에 각 손님들이 주문할 때 가장 많이 함께 주문한 단품메뉴들을 코스요리 메뉴로 구성하기로 했습니다.
// 단, 코스요리 메뉴는 최소 2가지 이상의 단품메뉴로 구성하려고 합니다. 또한, 최소 2명 이상의 손님으로부터 주문된 단품메뉴 조합에 대해서만 코스요리 메뉴 후보에 포함하기로 했습니다.
// 예를 들어, 손님 6명이 주문한 단품메뉴들의 조합이 다음과 같다면,
// (각 손님은 단품메뉴를 2개 이상 주문해야 하며, 각 단품메뉴는 A ~ Z의 알파벳 대문자로 표기합니다.)
// 손님 번호	주문한 단품메뉴 조합
// 1번 손님	  A, B, C, F, G
// 2번 손님	  A, C
// 3번 손님	  C, D, E
// 4번 손님	  A, C, D, E
// 5번 손님	  B, C, F, G
// 6번 손님	  A, C, D, E, H
// 가장 많이 함께 주문된 단품메뉴 조합에 따라 "스카피"가 만들게 될 코스요리 메뉴 구성 후보는 다음과 같습니다.
// 코스 종류	    메뉴 구성	   설명
// 요리 2개 코스	A, C	      1번, 2번, 4번, 6번 손님으로부터 총 4번 주문됐습니다.
// 요리 3개 코스	C, D, E	    3번, 4번, 6번 손님으로부터 총 3번 주문됐습니다.
// 요리 4개 코스	B, C, F, G	1번, 5번 손님으로부터 총 2번 주문됐습니다.
// 요리 4개 코스	A, C, D, E	4번, 6번 손님으로부터 총 2번 주문됐습니다.
// 각 손님들이 주문한 단품메뉴들이 문자열 형식으로 담긴 배열 orders, "스카피"가 추가하고 싶어하는 코스요리를 구성하는 단품메뉴들의 갯수가 담긴 배열 course가 매개변수로 주어질 때, "스카피"가 새로 추가하게 될 코스요리의 메뉴 구성을 문자열 형태로 배열에 담아 return 하도록 solution 함수를 완성해 주세요.

function solution(orders, course) {
  var answer = [];

  let obj = {};

  const getCombination = (arr, n) => {

    let result = [];

    if (n === 1) {
      return arr.map( (el) => [el]);
    }

    arr.map( (el, index, array) => {

      let newArr = array.slice(index + 1);
      let combinationArr = getCombination(newArr, n - 1);
      let combinationNewArr = combinationArr.map( (element) => [el, ...element]);

      result.push(...combinationNewArr);
    });

    return result;
  };

  course.map( (el) => {
    orders.map( (element) => {
      getCombination(element.split(""), el).map( (EL) => {

        let str = EL.sort().join("");

        obj[str] ? (obj[str] = obj[str] + 1) : (obj[str] = 1);
      });
    });
  });

  course.map( (el) => {

    let num = 0;

    for (let element in obj) {
      if (obj[element] === 1) {
        continue;
      }

      if (element.length === el) {
        obj[element] > num ? (num = obj[element]) : "";
      }
    }

    let temp = Object.keys(obj).filter( (element) => {
      return obj[element] === num && element.length === el;
    });

    temp;
    temp.map( (el) => answer.push(el));
  });

  answer.sort();

  return answer;
}

console.log(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2,3,4])) // ["AC", "ACDE", "BCFG", "CDE"]
console.log(solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2,3,5])) // ["ACD", "AD", "ADE", "CD", "XYZ"]
console.log(solution(["XYZ", "XWY", "WXA"], [2,3,4])) // ["WX", "XY"]