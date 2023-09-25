// 행렬과 연산

// 당신은 행렬에 적용할 수 있는 두 가지 연산을 만들었습니다.
// ShiftRow
// 모든 행이 아래쪽으로 한 칸씩 밀려납니다. 즉, 모든 행에 대해서 i번째 행은 i+1번째 행이 됩니다. (마지막 행은 1번째 행이 됩니다.)
// 왼쪽 행렬이 초기 상태이고 오른쪽 행렬이 ShiftRow를 한 번 시행한 뒤의 행렬입니다.
// 1번째 행에 있던 [1,2,3]이 2번째 행으로, 2번째 행에 있던 [4,5,6]이 3번째 행으로, 3번째 행에 있던 [7,8,9]가 1번째 행이 된 것을 확인할 수 있습니다.
// Rotate
// 행렬의 바깥쪽에 있는 원소들을 시계 방향으로 한 칸 회전시킵니다.
// 행렬의 바깥쪽에 있는 원소들은 첫 행, 첫 열, 끝 행, 끝 열에 포함되는 원소들입니다.
// 한 칸 회전시킨다는 것은 이 원소들이 시계 방향으로 한 칸씩 밀려난다는 것을 의미합니다. 즉, 다음 4개의 연산이 동시에 시행됩니다.
// 첫 행에서 끝 열에 있는 원소를 제외한 첫 행의 모든 원소는 오른쪽으로 한 칸 이동합니다.
// 끝 열에서 끝 행에 있는 원소를 제외한 끝 열의 모든 원소는 아래쪽으로 한 칸 이동합니다.
// 끝 행에서 첫 열에 있는 원소를 제외한 끝 행의 모든 원소는 왼쪽으로 한 칸 이동합니다.
// 첫 열에서 첫 행에 있는 원소를 제외한 첫 열의 모든 원소는 위쪽으로 한 칸 이동합니다.
// 왼쪽 행렬이 초기 상태이고 오른쪽 행렬이 Rotate를 한 번 시행한 뒤의 행렬입니다.
// 바깥쪽에 있는 값들이 시계 방향으로 한 칸씩 이동한 것을 확인할 수 있습니다.
// 당신은 행렬에 연산을 여러 번 시행하려고 합니다.
// 행렬의 초기 상태를 담고 있는 2차원 정수 배열 rc, 시행할 연산을 순서대로 담고 있는 문자열 배열 operations가 매개변수로 주어졌을 때, 연산을 차례대로 시행한 후의 행렬 상태를 return 하도록 solution 함수를 완성해주세요.

function solution(rc, operations) {
  var answer = [[]];

  let mdq = new Deque();
  let ldq = new Deque();
  let rdq = new Deque();
  
  for (let i = 0; i < rc.length; ++i) {

    let dq = new Deque();

    ldq.pushBack(rc[i][0]);

    for (let j = 1; j < rc[0].length - 1; ++j) {
      dq.pushBack(rc[i][j]); 
    }

    rdq.pushBack(rc[i][rc[i].length - 1]);
    mdq.pushBack(dq);

  }

  for (let i = 0; i < operations.length; ++i) {
    if (operations[i] === "ShiftRow") {
      mdq.pushFront(mdq.popBack());
      ldq.pushFront(ldq.popBack());
      rdq.pushFront(rdq.popBack());
    } else if (operations[i] === "Rotate") {

      let sf = mdq.popFront();
      let sb = mdq.popBack();

      sf.pushFront(ldq.popFront());
      sb.pushBack(rdq.popBack());
      ldq.pushBack(sb.popFront());
      rdq.pushFront(sf.popBack());
      mdq.pushFront(sf);
      mdq.pushBack(sb);

    }        
  }

  for (let i = 0; i < rc.length; ++i) {

    let arr = [];
    let temp = mdq.popFront();

    temp.pushFront(ldq.popFront());
    temp.pushBack(rdq.popFront());

    for (let j = 0; j < rc[0].length; ++j) {
      arr[j] = temp.popFront();
    }

    answer[i] = arr;
    
  }

  return answer;
}

class Node {
	constructor(item) {
		this.item = item;
		this.next = null;
		this.prev = null;
	}
}

class Deque {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	pushFront(item) {

		let newNode = new Node(item);

		if (this.getSize() === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;

			this.head.prev = newNode;
			this.head = newNode;
		}

		this.size += 1;

	}

	pushBack(item) {

		let newNode = new Node(item);

		if (this.getSize() === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;

			newNode.prev = this.tail;

			this.tail = newNode;
		}

		this.size += 1;

	}

	popFront() {
		if (this.getSize() === 0) {
			return -1;
		} else if (this.getSize() === 1) {

			let popedItem = this.head.item;

			this.head = null;
			this.tail = null;
			this.size -= 1;

			return popedItem;
		} else if (this.getSize() === 2) {

			let popedItem = this.head.item;

			this.head = this.head.next;
			this.tail.prev = null;
			this.size -= 1;

			return popedItem;
		} else if (this.getSize() > 2) {

			let popedItem = this.head.item;

			this.head.next.prev = null;
			this.head = this.head.next;
			this.size -= 1;

			return popedItem;
		}
	}

	popBack() {
		if (this.getSize() === 0) {
			return -1;
		} else if (this.getSize() === 1) {

			let popedItem = this.tail.item;

			this.head = null;
			this.tail = null;
			this.size -= 1;

			return popedItem;
		} else if (this.getSize() === 2) {

			let popedItem = this.tail.item;

			this.tail = this.tail.prev;
			this.head.next = null;
			this.size -= 1;

			return popedItem;
		} else if (this.getSize() > 2) {

			let popedItem = this.tail.item;

			this.tail.prev.next = null;
			this.tail = this.tail.prev;
			this.size -= 1;

			return popedItem;
		}
	}

	getSize() {
		return this.size;
	}

	isEmpty() {
		return this.getSize() ? 0 : 1;
	}

	getFront() {
		return this.getSize() ? this.head.item : -1;
	}

	getBack() {
		return this.getSize() ? this.tail.item : -1
	}
}

console.log(solution([[1, 2, 3], [4, 5, 6], [7, 8, 9]], ["Rotate", "ShiftRow"])) // [[8, 9, 6], [4, 1, 2], [7, 5, 3]]
console.log(solution([[8, 6, 3], [3, 3, 7], [8, 4, 9]], ["Rotate", "ShiftRow", "ShiftRow"])) // [[8, 3, 3], [4, 9, 7], [3, 8, 6]]
console.log(solution([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]], ["ShiftRow", "Rotate", "ShiftRow", "Rotate"])) // [[1, 6, 7 ,8], [5, 9, 10, 4], [2, 3, 12, 11]]