// 이중우선순위큐

// 이중 우선순위 큐는 다음 연산을 할 수 있는 자료구조를 말합니다.
// 명령어	  수신 탑(높이)
// I 숫자	  큐에 주어진 숫자를 삽입합니다.
// D 1	    큐에서 최댓값을 삭제합니다.
// D -1	    큐에서 최솟값을 삭제합니다.
// 이중 우선순위 큐가 할 연산 operations가 매개변수로 주어질 때, 모든 연산을 처리한 후 큐가 비어있으면 [0,0] 비어있지 않으면 [최댓값, 최솟값]을 return 하도록 solution 함수를 구현해주세요.

function solution(operations) {
  var answer = [];

  let arr = operations.map( (el) => el.split(" "));

  arr.map( (el) => {
    if (el[0] === "I") {
      answer.push(Number(el[1]));
    } else {

      let findValue = (el[1] === "1" ? Math.max : Math.min)(...answer);
      let delIndex = answer.indexOf(findValue);

      answer.splice(delIndex, 1);
    }
  });

  return answer.length ? [Math.max(...answer), Math.min(...answer)] : [0, 0];
}

console.log(solution(["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"])) // [0,0]
console.log(solution(["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"])) // [333, -45]