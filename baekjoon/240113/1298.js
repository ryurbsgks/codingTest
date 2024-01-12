// 어느 날 모든 학생들은 한 명이 한개의 노트북을 가지고 공부하던 도중, 자리를 바꾸다가 그만 노트북이 뒤섞이고 말았다. 대다수의 학생들은 자신의 노트북을 잘 알고 있어서 자신의 노트북을 받을 수 있었지만, 애석하게도 N명의 학생들이 정확히 자신의 노트북이 어떤것인지 알지 못했다. 왜냐하면 그들은 노트북을 구입한게 바로 어제였기 때문이다.
// 어차피 새것인 노트북, 바뀐들 어떠하랴.
// 그들에게 자신의 노트북이라고 생각되는 노트북들을 얘기해 보라고 했다.
// 이번에는 정말 신기하게도 그들 각각이 노트북을 여러개 선택한 것이었다! “이것 아니면 이것 아니면 이것 아니면 이것 일거 같아요”라카더라.
// 우리의 목적은 이들의 요구를 가장 많이 만족시키는 것이다.
// 요컨대, 자신이 자신의 것 같다라고 얘기한 노트북을 갖는 사람을 최대화 하라는 소리다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1);

function solution(arr) {

  let answer = 0;
  let [N, M] = arr.split(" ").map( (el) => Number(el));
  let size = N + 1;
  let newArr = Array.from({ length: N + 1 }, () => []);

  const bipartiteMatching = () => {

    let match = new Array(size).fill(0);
    let maximumFlow = 0;
    let visited;

    const dfs = (n) => {
      visited[n] = true;

      for (let el of newArr[n]) {
        if (!match[el] || (!visited[match[el]] && dfs(match[el]))) {
          match[el] = n;

          return true;
        }
      }

      return false;
    };

    for (let i = 1; i < size; i++) {
      visited = new Array(size).fill(false);

      if (dfs(i)) {
        maximumFlow += 1;

        if (maximumFlow === N) {
          break;
        }
      }
    }

    return maximumFlow;
  };

  for (let i = 0; i < M; i++) {

    let [a, b] = newInput[i].split(" ").map( (el) => Number(el));
 
    newArr[a].push(b);

  }

  answer = bipartiteMatching();

  return answer;
}

console.log(solution(input[0]));