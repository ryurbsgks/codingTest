// [3차] 자동완성

// 포털 다음에서 검색어 자동완성 기능을 넣고 싶은 라이언은 한 번 입력된 문자열을 학습해서 다음 입력 때 활용하고 싶어 졌다. 예를 들어, go 가 한 번 입력되었다면, 다음 사용자는 g 만 입력해도 go를 추천해주므로 o를 입력할 필요가 없어진다! 단, 학습에 사용된 단어들 중 앞부분이 같은 경우에는 어쩔 수 없이 다른 문자가 나올 때까지 입력을 해야 한다.
// 효과가 얼마나 좋을지 알고 싶은 라이언은 학습된 단어들을 찾을 때 몇 글자를 입력해야 하는지 궁금해졌다.
// 예를 들어, 학습된 단어들이 아래와 같을 때
// go
// gone
// guild
// go를 찾을 때 go를 모두 입력해야 한다.
// gone을 찾을 때 gon 까지 입력해야 한다. (gon이 입력되기 전까지는 go 인지 gone인지 확신할 수 없다.)
// guild를 찾을 때는 gu 까지만 입력하면 guild가 완성된다.
// 이 경우 총 입력해야 할 문자의 수는 7이다.
// 라이언을 도와 위와 같이 문자열이 입력으로 주어지면 학습을 시킨 후, 학습된 단어들을 순서대로 찾을 때 몇 개의 문자를 입력하면 되는지 계산하는 프로그램을 만들어보자.

function solution(words) {
  var answer = 0;

  let trie = new Trie();

  for (let i = 0; i < words.length; i += 1) {
    trie.insert(words[i]);
  }

  for (let i = 0; i < words.length; i += 1) {
    answer += trie.getCount(words[i]);
  }

  return answer;
}

class Node {
  constructor(value = "") {
    this.value = value;
    this.children = new Map();
    this.cnt = 0;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(string) {

    let currentNode = this.root;

    currentNode.cnt += 1;

    for (let el of string) {
      if (!currentNode.children.has(el)) {
        currentNode.children.set(el, new Node(currentNode.value + el));
      }

      currentNode = currentNode.children.get(el);
      currentNode.cnt += 1;
    }

  }

  getCount(string) {

    let cnt = 0;
    let currentNode = this.root;

    for (let el of string) {
      cnt += 1;
      currentNode = currentNode.children.get(el);

      if (currentNode.cnt === 1) {
        break;
      }
    }

    return cnt;
  }
}

console.log(solution(["go","gone","guild"])) // 7
console.log(solution(["abc","def","ghi","jklm"])) // 4
console.log(solution(["word","war","warrior","world"])) // 15