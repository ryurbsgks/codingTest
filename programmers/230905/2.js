// 표 병합

// 당신은 표 편집 프로그램을 작성하고 있습니다.
// 표의 크기는 50 × 50으로 고정되어있고 초기에 모든 셀은 비어 있습니다.
// 각 셀은 문자열 값을 가질 수 있고, 다른 셀과 병합될 수 있습니다.
// 위에서 r번째, 왼쪽에서 c번째 위치를 (r, c)라고 표현할 때, 당신은 다음 명령어들에 대한 기능을 구현하려고 합니다.
// "UPDATE r c value"
// (r, c) 위치의 셀을 선택합니다.
// 선택한 셀의 값을 value로 바꿉니다.
// "UPDATE value1 value2"
// value1을 값으로 가지고 있는 모든 셀을 선택합니다.
// 선택한 셀의 값을 value2로 바꿉니다.
// "MERGE r1 c1 r2 c2"
// (r1, c1) 위치의 셀과 (r2, c2) 위치의 셀을 선택하여 병합합니다.
// 선택한 두 위치의 셀이 같은 셀일 경우 무시합니다.
// 선택한 두 셀은 서로 인접하지 않을 수도 있습니다. 이 경우 (r1, c1) 위치의 셀과 (r2, c2) 위치의 셀만 영향을 받으며, 그 사이에 위치한 셀들은 영향을 받지 않습니다.
// 두 셀 중 한 셀이 값을 가지고 있을 경우 병합된 셀은 그 값을 가지게 됩니다.
// 두 셀 모두 값을 가지고 있을 경우 병합된 셀은 (r1, c1) 위치의 셀 값을 가지게 됩니다.
// 이후 (r1, c1) 와 (r2, c2) 중 어느 위치를 선택하여도 병합된 셀로 접근합니다.
// "UNMERGE r c"
// (r, c) 위치의 셀을 선택하여 해당 셀의 모든 병합을 해제합니다.
// 선택한 셀이 포함하고 있던 모든 셀은 프로그램 실행 초기의 상태로 돌아갑니다.
// 병합을 해제하기 전 셀이 값을 가지고 있었을 경우 (r, c) 위치의 셀이 그 값을 가지게 됩니다.
// "PRINT r c"
// (r, c) 위치의 셀을 선택하여 셀의 값을 출력합니다.
// 선택한 셀이 비어있을 경우 "EMPTY"를 출력합니다.
// 아래는 UPDATE 명령어를 실행하여 빈 셀에 값을 입력하는 예시입니다.
// commands	            효과
// UPDATE 1 1 menu	    (1,1)에 "menu" 입력
// UPDATE 1 2 category	(1,2)에 "category" 입력
// UPDATE 2 1 bibimbap	(2,1)에 "bibimbap" 입력
// UPDATE 2 2 korean	  (2,2)에 "korean" 입력
// UPDATE 2 3 rice	    (2,3)에 "rice" 입력
// UPDATE 3 1 ramyeon	  (3,1)에 "ramyeon" 입력
// UPDATE 3 2 korean	  (3,2)에 "korean" 입력
// UPDATE 3 3 noodle	  (3,3)에 "noodle" 입력
// UPDATE 3 4 instant	  (3,4)에 "instant" 입력
// UPDATE 4 1 pasta	    (4,1)에 "pasta" 입력
// UPDATE 4 2 italian	  (4,2)에 "italian" 입력
// UPDATE 4 3 noodle	  (4,3)에 "noodle" 입력
// 위 명령어를 실행하면 아래 그림과 같은 상태가 됩니다.
// 아래는 MERGE 명령어를 실행하여 셀을 병합하는 예시입니다.
// commands	            효과
// MERGE 1 2 1 3	      (1,2)와 (1,3) 병합
// MERGE 1 3 1 4	      (1,3)과 (1,4) 병합
// 위 명령어를 실행하면 아래와 같은 상태가 됩니다.
// 병합한 셀은 "category" 값을 가지게 되며 (1,2), (1,3), (1,4) 중 어느 위치를 선택하더라도 접근할 수 있습니다.
// 아래는 UPDATE 명령어를 실행하여 셀의 값을 변경하는 예시입니다.
// commands	            효과
// UPDATE korean hansik	"korean"을 "hansik"으로 변경
// UPDATE 1 3 group	    (1,3) 위치의 셀 값을 "group"으로 변경
// 위 명령어를 실행하면 아래와 같은 상태가 됩니다.
// 아래는 UNMERGE 명령어를 실행하여 셀의 병합을 해제하는 예시입니다.
// commands	            효과
// UNMERGE 1 4	        셀 병합 해제 후 원래 값은 (1,4)가 가짐
// 위 명령어를 실행하면 아래와 같은 상태가 됩니다.
// 실행할 명령어들이 담긴 1차원 문자열 배열 commands가 매개변수로 주어집니다. commands의 명령어들을 순서대로 실행하였을 때, "PRINT r c" 명령어에 대한 실행결과를 순서대로 1차원 문자열 배열에 담아 return 하도록 solution 함수를 완성해주세요.

function solution(commands) {
  var answer = [];

  const getTargetPosByKey = (key) => [Math.floor(key / 100), key % 100];
  const getTargetKeyByPos = (pos1, pos2) => pos1 * 100 + pos2;

  class Cell {
    constructor(value, key) {
      this.table = null;
      this.value = value || null;
      this.key = key;
      this.mergedSet = new Set([key]);
    }

    setTable(table) {
      this.table = table;
    }

    reset() {
      this.mergedSet = new Set([this.key]);
      this.value = null;
    }

    changeValue(value) {
      this.value = value;

      for (let el of this.mergedSet) {

        let [i, j] = getTargetPosByKey(el);

        this.table[i][j].value = value;

      }
    }

    merge(r, c) {

      let targetCell = this.table[r][c];
      let { value } = this;

      if (!value) {
        value = targetCell.value;
      }

      let mergedSet = new Set([...this.mergedSet, ...targetCell.mergedSet]);

      for (let el of mergedSet) {

        let [i, j] = getTargetPosByKey(el);

        this.table[i][j].value = value;
        this.table[i][j].mergedSet = mergedSet;

      }

    }

    unMerge() {
      for (let el of this.mergedSet) {

        let savedValue = this.value;
        let [i, j] = getTargetPosByKey(el);

        this.table[i][j].reset();
        this.value = savedValue;

      }
    }
  }

  let table = new Array(51).fill().map( (el, idx) => new Array(51).fill().map( (el, index) => new Cell(null, getTargetKeyByPos(idx, index))));

  for (let el of table) {
    for (let element of el) {
      element.setTable(table);
    }
  }

  for (let el of commands) {

    let [splitCommand, ...rest] = el.split(" ");

    if (splitCommand === "UPDATE") {

      let [r, c, value] = rest;

      if (!value) {
        for (let el of table) {
          for (let element of el) {
            if (element.value === r) {
              element.value = c;
            }
          }
        }
      } else {
        table[r][c].changeValue(value);
      }

    } else if (splitCommand === "MERGE") {

      let [r1, c1, r2, c2] = rest;

      table[r1][c1].merge(r2, c2);

    } else if (splitCommand === "UNMERGE") {

      let [r, c] = rest;

      table[r][c].unMerge();

    } else if (splitCommand === "PRINT") {

      let [r, c] = rest;

      answer.push(table[r][c].value || "EMPTY");

    }

  }

  return answer;
}

console.log(solution(["UPDATE 1 1 menu", "UPDATE 1 2 category", "UPDATE 2 1 bibimbap", "UPDATE 2 2 korean", "UPDATE 2 3 rice", "UPDATE 3 1 ramyeon", "UPDATE 3 2 korean", "UPDATE 3 3 noodle", "UPDATE 3 4 instant", "UPDATE 4 1 pasta", "UPDATE 4 2 italian", "UPDATE 4 3 noodle", "MERGE 1 2 1 3", "MERGE 1 3 1 4", "UPDATE korean hansik", "UPDATE 1 3 group", "UNMERGE 1 4", "PRINT 1 3", "PRINT 1 4"])) // ["EMPTY", "group"]
console.log(solution(["UPDATE 1 1 a", "UPDATE 1 2 b", "UPDATE 2 1 c", "UPDATE 2 2 d", "MERGE 1 1 1 2", "MERGE 2 2 2 1", "MERGE 2 1 1 1", "PRINT 1 1", "UNMERGE 2 2", "PRINT 1 1"])) // ["d", "EMPTY"]