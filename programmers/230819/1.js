// 순위

// n명의 권투선수가 권투 대회에 참여했고 각각 1번부터 n번까지 번호를 받았습니다. 권투 경기는 1대1 방식으로 진행이 되고, 만약 A 선수가 B 선수보다 실력이 좋다면 A 선수는 B 선수를 항상 이깁니다. 심판은 주어진 경기 결과를 가지고 선수들의 순위를 매기려 합니다. 하지만 몇몇 경기 결과를 분실하여 정확하게 순위를 매길 수 없습니다.
// 선수의 수 n, 경기 결과를 담은 2차원 배열 results가 매개변수로 주어질 때 정확하게 순위를 매길 수 있는 선수의 수를 return 하도록 solution 함수를 작성해주세요.

function solution(n, results) {
  var answer = 0;

  let arr = new Array(n).fill("").map( (el) => ({ rank: {}, win: [], lose: [] }));

  results.map( ([win, lose]) => {
    arr[win - 1].win.push(lose - 1);
    arr[lose - 1].lose.push(win - 1);
  });

  const findRank = (node, type, visit) => {

    visit[node] = true;

    if (arr[node].rank[type]) {
      return arr[node].rank[type];
    }

    if (arr[node][type].length < 1) {
      return 0;
    }

    let rank = 0;

    arr[node][type].map( (el) => {
      if (!visit[el]) {
        visit[el] = true;
        rank += 1 + findRank(el, type, visit);
      }
    });

    return rank;
  };

  for (let i = 0; i < n; i++) {

    let win = findRank(i, "lose", new Array(n).fill(false));
    let lose = findRank(i, "win", new Array(n).fill(false));

    if (win + lose === n - 1) {
      answer++;
    }
  }

  return answer;
}

console.log(solution(5, [[4, 3], [4, 2], [3, 2], [1, 2], [2, 5]])) // 2