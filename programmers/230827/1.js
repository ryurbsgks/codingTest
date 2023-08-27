// 110 옮기기

// 0과 1로 이루어진 어떤 문자열 x에 대해서, 당신은 다음과 같은 행동을 통해 x를 최대한 사전 순으로 앞에 오도록 만들고자 합니다.
// x에 있는 "110"을 뽑아서, 임의의 위치에 다시 삽입합니다.
// 예를 들어, x = "11100" 일 때, 여기서 중앙에 있는 "110"을 뽑으면 x = "10" 이 됩니다. 뽑았던 "110"을 x의 맨 앞에 다시 삽입하면 x = "11010" 이 됩니다.
// 변형시킬 문자열 x가 여러 개 들어있는 문자열 배열 s가 주어졌을 때, 각 문자열에 대해서 위의 행동으로 변형해서 만들 수 있는 문자열 중 사전 순으로 가장 앞에 오는 문자열을 배열에 담아 return 하도록 solution 함수를 완성해주세요.

function solution(s) {
  var answer = [];

  let arr = s.map( (el) => {

    let stack = [];
    let str = "";

    for (let element of el) {
      if (stack.length > 1) {

        let mid = stack.pop();
        let left = stack.pop();

        `${left}${mid}${element}` === "110" ? (str += "110") : stack.push(left, mid, element);
      } else {
        stack.push(element);
      }
    }

    let baseStr = stack.join("");
    let zeroIdx = baseStr.lastIndexOf("0") + 1;

    return zeroIdx === -1 ? str + baseStr : baseStr.slice(0, zeroIdx) + str + baseStr.slice(zeroIdx);
  });

  answer = arr;

  return answer;
}

console.log(solution(["1110","100111100","0111111010"])) // ["1101","100110110","0110110111"]