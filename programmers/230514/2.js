// 왼쪽 오른쪽

// 문자열 리스트 str_list에는 "u", "d", "l", "r" 네 개의 문자열이 여러 개 저장되어 있습니다. str_list에서 "l"과 "r" 중 먼저 나오는 문자열이 "l"이라면 해당 문자열을 기준으로 왼쪽에 있는 문자열들을 순서대로 담은 리스트를, 먼저 나오는 문자열이 "r"이라면 해당 문자열을 기준으로 오른쪽에 있는 문자열들을 순서대로 담은 리스트를 return하도록 solution 함수를 완성해주세요. "l"이나 "r"이 없다면 빈 리스트를 return합니다.

function solution(str_list) {
  var answer = [];

  let left = str_list.indexOf("l");
  let right = str_list.indexOf("r");

  if (left === -1 && right === -1) {
    answer = [];
  } else if (left === -1) {
    answer = str_list.slice(right + 1, str_list.length);
  } else if (right === -1) {
    answer = str_list.slice(0, left);
  } else if (left < right) {
    answer = str_list.slice(0, left);
  } else if (left > right) {
    answer = str_list.slice(right + 1, str_list.length);
  }

  return answer;
}

console.log(solution(["u", "u", "l", "r"])) // ["u", "u"]
console.log(solution(["l"])) // []