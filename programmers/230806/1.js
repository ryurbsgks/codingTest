// 가장 긴 팰린드롬

// 앞뒤를 뒤집어도 똑같은 문자열을 팰린드롬(palindrome)이라고 합니다.
// 문자열 s가 주어질 때, s의 부분문자열(Substring)중 가장 긴 팰린드롬의 길이를 return 하는 solution 함수를 완성해 주세요.
// 예를들면, 문자열 s가 "abcdcba"이면 7을 return하고 "abacde"이면 3을 return합니다.

function solution(s)
{
    var answer = 1;

    let arr = new Array(s.length).fill().map( () => new Array(s.length).fill(false));

    for (let i = 0; i < s.length; i++) {
      arr[i][i] = true;
    }

    for (let i = 0; i < s.length; i++) {
      if (s[i] === s[i + 1]) {
        arr[i][i + 1] = true;
        answer = 2;
      }
    }

    for (let i = 3; i <= s.length; i++) {
      for (let j = 0; j <= s.length - 1; j++) {

        let end = j + i - 1;

        if (s[j] === s[end] && arr[j + 1][end - 1]) {
          arr[j][end] = true;
          answer = Math.max(answer, i);
        }

      }
    }

    return answer;
}

console.log(solution("abcdcba")) // 7
console.log(solution("abacde")) // 3