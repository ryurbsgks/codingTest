// 가사 검색

// 친구들로부터 천재 프로그래머로 불리는 "프로도"는 음악을 하는 친구로부터 자신이 좋아하는 노래 가사에 사용된 단어들 중에 특정 키워드가 몇 개 포함되어 있는지 궁금하니 프로그램으로 개발해 달라는 제안을 받았습니다.
// 그 제안 사항 중, 키워드는 와일드카드 문자중 하나인 '?'가 포함된 패턴 형태의 문자열을 뜻합니다. 와일드카드 문자인 '?'는 글자 하나를 의미하며, 어떤 문자에도 매치된다고 가정합니다. 예를 들어 "fro??"는 "frodo", "front", "frost" 등에 매치되지만 "frame", "frozen"에는 매치되지 않습니다.
// 가사에 사용된 모든 단어들이 담긴 배열 words와 찾고자 하는 키워드가 담긴 배열 queries가 주어질 때, 각 키워드 별로 매치된 단어가 몇 개인지 순서대로 배열에 담아 반환하도록 solution 함수를 완성해 주세요.

function solution(words, queries) {
  var answer = [];

  let arr = Array.from({ length: 10001 }, () => new Trie());
  let newArr = Array.from({ length: 10001 }, () => new Trie());

  words.map( (el) => { 
    arr[el.length].insert(el); 
    newArr[el.length].insert([...el].reverse().join("")); 
  });

  answer = queries.map( (el) => el[0] === "?" ? newArr[el.length].search([...el].reverse().join("")) : arr[el.length].search(el));

  return answer;
}

class Node {
  constructor(value = "") {
    this.value = value;
    this.count = 0;
    this.children = {};
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {

    let node = this.root;

    for (let i = 0; i < word.length; i++) {  

      let char = word[i];

      if (!node.children[char]) {
        node.children[char] = new Node(node.value + char);
      }

      node.count++;
      node = node.children[char];

    }
    
    node.count++;

  }

  search(query) {

    let node = this.root;

    for (let i = 0; i < query.length; i++) {

      let char = query[i];

      if (char === "?") {
        return node.count;
      }
      
      if (!node.children[char]) {
        return 0;
      }

      node = node.children[char];

    }

    return 0;
  }
}

console.log(solution(["frodo", "front", "frost", "frozen", "frame", "kakao"], ["fro??", "????o", "fr???", "fro???", "pro?"])) // [3, 2, 4, 1, 0]