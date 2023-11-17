// 정수를 저장하는 덱을 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.
// 명령은 총 여덟 가지이다.
// 1 X: 정수 X를 덱의 앞에 넣는다. (1 ≤ X ≤ 100,000)
// 2 X: 정수 X를 덱의 뒤에 넣는다. (1 ≤ X ≤ 100,000)
// 3: 덱에 정수가 있다면 맨 앞의 정수를 빼고 출력한다. 없다면 -1을 대신 출력한다.
// 4: 덱에 정수가 있다면 맨 뒤의 정수를 빼고 출력한다. 없다면 -1을 대신 출력한다.
// 5: 덱에 들어있는 정수의 개수를 출력한다.
// 6: 덱이 비어있으면 1, 아니면 0을 출력한다.
// 7: 덱에 정수가 있다면 맨 앞의 정수를 출력한다. 없다면 -1을 대신 출력한다.
// 8: 덱에 정수가 있다면 맨 뒤의 정수를 출력한다. 없다면 -1을 대신 출력한다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1, input.length);

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  unshift(data) {

    let node = new Node(data);

    if (this.length === 0) {
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
    }

    this.head = node;
    this.length++;

  }

  push(data) {

    let node = new Node(data);

    if (this.length === 0) {
      this.head = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
    }

    this.tail = node;
    this.length++;

  }

  shift() {
    if (this.length === 0) {
      return -1;
    }

    let removeData = this.head.data;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }

    this.length--;

    return removeData;
  }

  pop() {
    if (this.length === 0) {
      return -1;
    }

    let removeData = this.tail.data;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    this.length--;

    return removeData;
  }

  size() {
    return this.length;
  }

  check() {
    return this.length === 0 ? 1 : 0;
  }

  front() {
    return this.length === 0 ? -1 : this.head.data;
  }

  back() {
    return this.length === 0 ? -1 : this.tail.data;
  }
}

function solution(arr) {

  let answer = [];
  let deque = new Deque();

  arr.map( (el) => {

    let [n, X] = el.split(" ").map( (data) => Number(data));

    switch (n) {
      case 1:
        deque.unshift(X);

        break;
      case 2:
        deque.push(X);

        break;
      case 3:
        answer.push(deque.shift());

        break;
      case 4:
        answer.push(deque.pop());

        break;
      case 5:
        answer.push(deque.size());

        break;
      case 6:
        answer.push(deque.check());

        break;
      case 7:
        answer.push(deque.front());

        break;
      case 8:
        answer.push(deque.back());

        break;
    }

  });

  return answer.join("\n");
}

console.log(solution(newInput));