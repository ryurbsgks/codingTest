// 여행경로

// 주어진 항공권을 모두 이용하여 여행경로를 짜려고 합니다. 항상 "ICN" 공항에서 출발합니다.
// 항공권 정보가 담긴 2차원 배열 tickets가 매개변수로 주어질 때, 방문하는 공항 경로를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

function solution(tickets) {
  var answer = [];

  let result = [];
  let arr = [];

  tickets.sort();

  const dfs = (str, count) => {

    result.push(str);

    if (count === tickets.length) {
      answer = result;

      return true;
    }

    for (let i = 0; i < tickets.length; i++) {
      if (!arr[i] && tickets[i][0] === str) {
        arr[i] = true;

        if (dfs(tickets[i][1], count + 1)) {
          return true;
        }

        arr[i] = false;
      }
    }

    result.pop();

    return false;
  };

  dfs("ICN", 0);

  return answer;
}

console.log(solution([["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]])) // ["ICN", "JFK", "HND", "IAD"]
console.log(solution([["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]])) // ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]