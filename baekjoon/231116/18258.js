// 정수를 저장하는 큐를 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.
// 명령은 총 여섯 가지이다.
// push X: 정수 X를 큐에 넣는 연산이다.
// pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// size: 큐에 들어있는 정수의 개수를 출력한다.
// empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
// front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.slice(1, input.length);

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
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
      return -1;
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

  empty() {
    if (this.length === 0) {
      return 1;
    } else {
      return 0;
    }
  }

  front() {
    if (this.length === 0) {
      return -1;
    } else {
      return this.head.data;
    }
  }

  back() {
    if (this.length === 0) {
      return -1;
    } else {
      return this.tail.data;
    }
  }
}

function solution(arr) {

  let answer = [];
  let queue = new Queue();

  arr.map( (el) => {

    let [str, X] = el.split(" ");

    switch (str) {
      case "push": 
        queue.push(Number(X));

        break;
      case "pop":
        answer.push(queue.pop());

        break;
      case "size": 
        answer.push(queue.size());

        break;
      case "empty":
        answer.push(queue.empty());

        break;
      case "front": 
        answer.push(queue.front());

        break;
      case "back":
        answer.push(queue.back());

        break;
    }

  });

  return answer.join("\n");
}

console.log(solution(newInput));









// const fs = require('fs');
// const [n,...arr] = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

// class Node{
//     constructor(item){
//       this.item = item;
//       this.next = null;
//     }
//   }
  
//   class Queue{
//     constructor(){
//       this.head = null;
//       this.tail = null;
//       this.length = 0;
//     }
  
//     push(item){
//       const node = new Node(item)
//       if(this.head===null){
//         this.head= node;
//         this.head.next = null;
//       }else{
//         this.tail.next = node;
//       }
  
//       this.tail = node;
//       this.length +=1;
//     }


//     front(){
//       if(this.empty()==1) return -1;
//       return this.head.item; 
//     }
  
//     back(){
//       if(this.empty()==1) return -1;
//       return this.tail.item; 
//     }
//   }

// let answer = [];
// let queue = new Queue(); 
// const command = arr.map(v=>v.split(' '));
// command.forEach(v=>{
//     switch(v[0]){
//         case 'push':
//             queue.push(v[1])
//             break;
//         case 'pop':
//             answer.push(queue.pop());
//             break;
//         case 'size':
//             answer.push(queue.size())
//             break;
//         case 'empty':
//             answer.push(queue.empty())
//             break;
//         case 'front':
//             answer.push(queue.front())
//             break;
//         case 'back':
//             answer.push(queue.back())
//             break;
//     }
// })

// console.log(answer.join('\n'))