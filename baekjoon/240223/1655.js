// 백준이는 동생에게 "가운데를 말해요" 게임을 가르쳐주고 있다. 백준이가 정수를 하나씩 외칠때마다 동생은 지금까지 백준이가 말한 수 중에서 중간값을 말해야 한다. 만약, 그동안 백준이가 외친 수의 개수가 짝수개라면 중간에 있는 두 수 중에서 작은 수를 말해야 한다.
// 예를 들어 백준이가 동생에게 1, 5, 2, 10, -99, 7, 5를 순서대로 외쳤다고 하면, 동생은 1, 1, 2, 2, 2, 2, 5를 차례대로 말해야 한다. 백준이가 외치는 수가 주어졌을 때, 동생이 말해야 하는 수를 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution(N) {

  let answer = "";
  let arr = [];
  let newArr = [];

  const arrUp = (heap, index) => {
    while (index > 0) {

      let parentIndex = Math.floor((index - 1) / 2);

      if (heap[parentIndex] < heap[index]) {
        [heap[parentIndex], heap[index]] = [heap[index], heap[parentIndex]];
        index = parentIndex;
      } else {
        break;
      }

    }
  };
  
  const arrDown = (heap, index) => {

    let lastIndex = heap.length - 1;

    while (true) {

      let leftChild = 2 * index + 1;
      let rightChild = 2 * index + 2;
      let largest = index;

      if (leftChild <= lastIndex && heap[leftChild] > heap[largest]) {
        largest = leftChild;
      }

      if (rightChild <= lastIndex && heap[rightChild] > heap[largest]) {
        largest = rightChild;
      }

      if (largest !== index) {
        [heap[index], heap[largest]] = [heap[largest], heap[index]];
        index = largest;
      } else {
        break;
      }

    }

  };
  
  const newArrUp = (heap, index) => {
    while (index > 0) {

      let parentIndex = Math.floor((index - 1) / 2);

      if (heap[parentIndex] > heap[index]) {
        [heap[parentIndex], heap[index]] = [heap[index], heap[parentIndex]];
        index = parentIndex;
      } else {
        break;
      }

    }
  };
  
  const newArrDown = (heap, index) => {

    let lastIndex = heap.length - 1;

    while (true) {

      let leftChild = 2 * index + 1;
      let rightChild = 2 * index + 2;
      let smallest = index;

      if (leftChild <= lastIndex && heap[leftChild] < heap[smallest]) {
        smallest = leftChild;
      }

      if (rightChild <= lastIndex && heap[rightChild] < heap[smallest]) {
        smallest = rightChild;
      }

      if (smallest !== index) {
        [heap[index], heap[smallest]] = [heap[smallest], heap[index]];
        index = smallest;
      } else {
        break;
      }

    }

  };

  for (let i = 1; i <= N; i++) {

    let a = Number(input[i]);

    if (arr.length === newArr.length) {
      arr.push(a);
      arrUp(arr, arr.length - 1);
    } else {
      newArr.push(a);
      newArrUp(newArr, newArr.length - 1);
    }

    if (arr.length !== 0 && newArr.length !== 0 && arr[0] > newArr[0]) {

      let maxVal = arr[0];
      let minVal = newArr[0];

      arr[0] = minVal;
      newArr[0] = maxVal;
      arrDown(arr, 0);
      newArrDown(newArr, 0);

    }

    answer += arr[0] + "\n";

  }

  return answer.slice(0, answer.length - 1);
}

console.log(solution(Number(input[0])));
