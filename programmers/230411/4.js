// 외계행성의 나이

// 우주여행을 하던 머쓱이는 엔진 고장으로 PROGRAMMERS-962 행성에 불시착하게 됐습니다. 입국심사에서 나이를 말해야 하는데, PROGRAMMERS-962 행성에서는 나이를 알파벳으로 말하고 있습니다. a는 0, b는 1, c는 2, ..., j는 9입니다. 예를 들어 23살은 cd, 51살은 fb로 표현합니다. 나이 age가 매개변수로 주어질 때 PROGRAMMER-962식 나이를 return하도록 solution 함수를 완성해주세요.

function solution(age) {
  var answer = '';

  String(age).split("").map( (el) => {
    switch (el) {
      case "0":
        answer = answer + "a";
        break;
      case "1":
        answer = answer + "b";
        break;
      case "2":
        answer = answer + "c";
        break;
      case "3":
        answer = answer + "d";
        break;
      case "4":
        answer = answer + "e";
        break;
      case "5":
        answer = answer + "f";
        break;
      case "6":
        answer = answer + "g";
        break;
      case "7":
        answer = answer + "h";
        break;
      case "8":
        answer = answer + "i";
        break;
      case "9":
        answer = answer + "j";
        break;
    }
  });

  return answer;
}

console.log(solution(23)) // "cd"
console.log(solution(51)) // "fb"
console.log(solution(100)) // "baa"