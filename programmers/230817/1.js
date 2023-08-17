// 단어 변환

// 두 개의 단어 begin, target과 단어의 집합 words가 있습니다. 아래와 같은 규칙을 이용하여 begin에서 target으로 변환하는 가장 짧은 변환 과정을 찾으려고 합니다.
// 1. 한 번에 한 개의 알파벳만 바꿀 수 있습니다.
// 2. words에 있는 단어로만 변환할 수 있습니다.
// 예를 들어 begin이 "hit", target가 "cog", words가 ["hot","dot","dog","lot","log","cog"]라면 "hit" -> "hot" -> "dot" -> "dog" -> "cog"와 같이 4단계를 거쳐 변환할 수 있습니다.
// 두 개의 단어 begin, target과 단어의 집합 words가 매개변수로 주어질 때, 최소 몇 단계의 과정을 거쳐 begin을 target으로 변환할 수 있는지 return 하도록 solution 함수를 작성해주세요.

function solution(begin, target, words) {
  var answer = 0;

  let obj = { [begin]: 0 };
  let arr = [begin];

  const isConnected = (str1, str2) => {

    let count = 0;
    
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        count++;
      }
    }

    return count === 1 ? true : false;
  };

  while (arr.length) {

    let str = arr.shift();

    if (str === target) {
      break;
    }

    words.map( (el) => {
      if (isConnected(el, str) && !obj[el]) {
        obj[el] = obj[str] + 1;
        arr.push(el);
      }
    });

  }

  answer = obj[target] ? obj[target] : 0;

  return answer;
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])) // 4
console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"])) // 0