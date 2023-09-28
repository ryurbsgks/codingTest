// 더 맵게

// 매운 것을 좋아하는 Leo는 모든 음식의 스코빌 지수를 K 이상으로 만들고 싶습니다. 모든 음식의 스코빌 지수를 K 이상으로 만들기 위해 Leo는 스코빌 지수가 가장 낮은 두 개의 음식을 아래와 같이 특별한 방법으로 섞어 새로운 음식을 만듭니다.
// 섞은 음식의 스코빌 지수 = 가장 맵지 않은 음식의 스코빌 지수 + (두 번째로 맵지 않은 음식의 스코빌 지수 * 2)
// Leo는 모든 음식의 스코빌 지수가 K 이상이 될 때까지 반복하여 섞습니다.
// Leo가 가진 음식의 스코빌 지수를 담은 배열 scoville과 원하는 스코빌 지수 K가 주어질 때, 모든 음식의 스코빌 지수를 K 이상으로 만들기 위해 섞어야 하는 최소 횟수를 return 하도록 solution 함수를 작성해주세요.

function solution(scoville, K) {
  var answer = 0;

  let heap = new Heap();

  for (let el of scoville) {
    heap.push(el);
  }

  let mixedCount = 0;

  while (heap.size() >= 2 && heap.peek() < K) {

    let first = heap.pop();
    let second = heap.pop();
    let mixedScov = first + second * 2;

    heap.push(mixedScov);
    mixedCount++;

  }

  answer = heap.peek() >= K ? mixedCount : -1;

  return answer;
}

class Heap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  push(value) {
    this.heap.push(value);

    let currentIndex = this.heap.length - 1;

    while (currentIndex > 0 && this.heap[currentIndex] < this.heap[Math.floor((currentIndex - 1) / 2)]) {

      let temp = this.heap[currentIndex];

      this.heap[currentIndex] = this.heap[Math.floor((currentIndex - 1) / 2)];
      this.heap[Math.floor((currentIndex - 1) / 2)] = temp;

      currentIndex = Math.floor((currentIndex - 1) / 2);

    }

  }

  pop() {
    if (this.heap.length === 0) {
      return null;
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    let minValue = this.heap[0];
    
    this.heap[0] = this.heap.pop();

    let currentIndex = 0;

    while (currentIndex * 2 + 1 < this.heap.length) {

      let minChildIndex = currentIndex * 2 + 2 < this.heap.length && this.heap[currentIndex * 2 + 2] < this.heap[currentIndex * 2 + 1] ? currentIndex * 2 + 2 : currentIndex * 2 + 1;

      if (this.heap[currentIndex] < this.heap[minChildIndex]) {
        break;
      }

      let temp = this.heap[currentIndex];

      this.heap[currentIndex] = this.heap[minChildIndex];
      this.heap[minChildIndex] = temp;

      currentIndex = minChildIndex;

    }

    return minValue;
  }

  peek() {
    return this.heap[0];
  }
}

console.log(solution([1, 2, 3, 9, 10, 12], 7)) // 2