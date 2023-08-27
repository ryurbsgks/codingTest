// 표 편집

// 업무용 소프트웨어를 개발하는 니니즈웍스의 인턴인 앙몬드는 명령어 기반으로 표의 행을 선택, 삭제, 복구하는 프로그램을 작성하는 과제를 맡았습니다. 세부 요구 사항은 다음과 같습니다
// 위 그림에서 파란색으로 칠해진 칸은 현재 선택된 행을 나타냅니다. 단, 한 번에 한 행만 선택할 수 있으며, 표의 범위(0행 ~ 마지막 행)를 벗어날 수 없습니다. 이때, 다음과 같은 명령어를 이용하여 표를 편집합니다.
// "U X": 현재 선택된 행에서 X칸 위에 있는 행을 선택합니다.
// "D X": 현재 선택된 행에서 X칸 아래에 있는 행을 선택합니다.
// "C" : 현재 선택된 행을 삭제한 후, 바로 아래 행을 선택합니다. 단, 삭제된 행이 가장 마지막 행인 경우 바로 윗 행을 선택합니다.
// "Z" : 가장 최근에 삭제된 행을 원래대로 복구합니다. 단, 현재 선택된 행은 바뀌지 않습니다.
// 예를 들어 위 표에서 "D 2"를 수행할 경우 아래 그림의 왼쪽처럼 4행이 선택되며, "C"를 수행하면 선택된 행을 삭제하고, 바로 아래 행이었던 "네오"가 적힌 행을 선택합니다(4행이 삭제되면서 아래 있던 행들이 하나씩 밀려 올라오고, 수정된 표에서 다시 4행을 선택하는 것과 동일합니다).
// 다음으로 "U 3"을 수행한 다음 "C"를 수행한 후의 표 상태는 아래 그림과 같습니다.
// 다음으로 "D 4"를 수행한 다음 "C"를 수행한 후의 표 상태는 아래 그림과 같습니다. 5행이 표의 마지막 행 이므로, 이 경우 바로 윗 행을 선택하는 점에 주의합니다.
// 다음으로 "U 2"를 수행하면 현재 선택된 행은 2행이 됩니다.
// 위 상태에서 "Z"를 수행할 경우 가장 최근에 제거된 "라이언"이 적힌 행이 원래대로 복구됩니다.
// 다시한번 "Z"를 수행하면 그 다음으로 최근에 제거된 "콘"이 적힌 행이 원래대로 복구됩니다. 이때, 현재 선택된 행은 바뀌지 않는 점에 주의하세요.
// 이때, 최종 표의 상태와 처음 주어진 표의 상태를 비교하여 삭제되지 않은 행은 "O", 삭제된 행은 "X"로 표시하면 다음과 같습니다.
// 처음 표의 행 개수를 나타내는 정수 n, 처음에 선택된 행의 위치를 나타내는 정수 k, 수행한 명령어들이 담긴 문자열 배열 cmd가 매개변수로 주어질 때, 모든 명령어를 수행한 후 표의 상태와 처음 주어진 표의 상태를 비교하여 삭제되지 않은 행은 O, 삭제된 행은 X로 표시하여 문자열 형태로 return 하도록 solution 함수를 완성해주세요.

function solution(n, k, cmd) {
  var answer = '';

  let prevNode = new Node(0);
  let select;
  let trashBin = [];
  let result = Array(n).fill("O");

  for (let i = 1; i < n; i++) {

    let cntNode = new Node(i, prevNode);

    prevNode.next = cntNode;
    prevNode = cntNode;

    if (i === k) {
      select = cntNode;
    }

  }

  const moveSelectedNode = (count, direction) => {
    for (let i = 0; i < count; i++) {
      if (!select[direction]) {
        break;
      }

      select = select[direction];
    }
  };

  const deleteNode = () => {

    let prev = select.prev;
    let next = select.next;

    trashBin.push(select);
    select = next ? next : prev;

    if (prev) {
      prev.next = next;
    }

    if (next) {
      next.prev = prev;
    }
    
  };

  const recoverNode = () => {

    let targetNode = trashBin.pop();
    let prev = targetNode.prev;
    let next = targetNode.next;

    if (prev) {
      prev.next = targetNode;
    }

    if (next) {
      next.prev = targetNode;
    }

  };

  cmd.map( (el) => {
    switch (el[0]) {
      case "U":
        moveSelectedNode(el.split(" ")[1], "prev");

        break;
      case "D":
        moveSelectedNode(el.split(" ")[1], "next");

        break;
      case "C":
        deleteNode();

        break;
      case "Z":
        recoverNode();

        break;
    }
  });

  trashBin.map( (el) => {
    result[el.index] = "X";
  });

  answer = result.join("");

  return answer;
}

function Node (index, prev) {
  this.index = index;
  this.prev = prev;
  this.next = null;
}

console.log(solution(8, 2, ["D 2","C","U 3","C","D 4","C","U 2","Z","Z"])) // "OOOOXOOO"
console.log(solution(8, 2, ["D 2","C","U 3","C","D 4","C","U 2","Z","Z","U 1","C"])) // "OOXOXOOO"