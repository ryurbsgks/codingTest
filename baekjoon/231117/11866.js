// 요세푸스 문제는 다음과 같다.
// 1번부터 N번까지 N명의 사람이 원을 이루면서 앉아있고, 양의 정수 K(≤ N)가 주어진다. 이제 순서대로 K번째 사람을 제거한다. 한 사람이 제거되면 남은 사람들로 이루어진 원을 따라 이 과정을 계속해 나간다. 이 과정은 N명의 사람이 모두 제거될 때까지 계속된다. 원에서 사람들이 제거되는 순서를 (N, K)-요세푸스 순열이라고 한다. 예를 들어 (7, 3)-요세푸스 순열은 <3, 6, 2, 7, 5, 1, 4>이다.
// N과 K가 주어지면 (N, K)-요세푸스 순열을 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split(" ");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(data) {

    let node = new Node(data);

    if (this.head === null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.length++;

  }

  pop() {
    if (this.length === 0) {
      return null;
    } else {

      let data = this.head.data;

      this.head = this.head.next;
      this.length--;

      return data;
    }
  }

  size() {
    return this.length;
  }
}

function solution(arr) {

  let answer = "<";
  let [N, K] = [arr[0], arr[1]];
  let linkedList = new LinkedList();

  for (let i = 1; i <= N; i++) {
    linkedList.push(i);
  }

  while (linkedList.size() !== 1) {
    for (let i = 1; i < K; i++) {
      linkedList.push(linkedList.pop());
    }

    answer = `${answer}${linkedList.pop()}, `;
  }

  answer = `${answer}${linkedList.pop()}>`;

  return answer;
}

console.log(solution(input.map( (el) => Number(el))));