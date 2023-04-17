// 다항식 더하기

// 한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다. 다항식을 계산할 때는 동류항끼리 계산해 정리합니다. 덧셈으로 이루어진 다항식 polynomial이 매개변수로 주어질 때, 동류항끼리 더한 결괏값을 문자열로 return 하도록 solution 함수를 완성해보세요. 같은 식이라면 가장 짧은 수식을 return 합니다.

function solution(polynomial) {
  var answer = '';

  let [xNum, num] = [0, 0];
  let arr = polynomial.split(" ").filter( (el) => el !== "+");
  let xArr = arr.filter( (el) => el.includes("x"));

  xArr.map( (el) => {
    if (el === "x") {
      return xNum = xNum + 1;
    }

    xNum = xNum + Number(el.slice(0, el.length - 1));
  });

  arr.map( (el) => {
    if (!el.includes("x")) {
      num = num + Number(el);
    }
  });

  xNum ? xNum === 1 ? xNum = "x" : xNum = `${xNum}x` : xNum = "";
  num ? xNum ? answer = `${xNum} + ${num}` : answer = String(num) : answer = xNum;

  return answer;
}

console.log(solution("3x + 7 + x")) // "4x + 7"
console.log(solution("x + x + x")) // "3x"