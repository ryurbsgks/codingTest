// 어떤 파일 시스템에는 디스크 공간이 파일의 사이즈와 항상 같지는 않다. 이것은 디스크가 일정한 크기의 클러스터로 나누어져 있고, 한 클러스터는 오직 한 파일만 이용할 수 있기 때문이다.
// 예를 들어, 클러스터의 크기가 512바이트이고, 600바이트 파일을 저장하려고 한다면, 두 개의 클러스터에 저장하게 된다. 두 클러스터는 다른 파일과 공유할 수 없기 때문에, 디스크 사용 공간은 1024바이트가 된다.
// 파일의 사이즈와 클러스터의 크기가 주어질 때, 사용한 디스크 공간을 출력하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution(fileSize, clusterSzie) {

  let use = 0;

  for (let el of fileSize) {
    if (el % clusterSzie === 0) {
      use += el / clusterSzie;
    } else {
      use += Math.floor(el / clusterSzie) + 1;
    }
  }

  return use * clusterSzie;
}

console.log(solution(input[1].split(" ").map( (el) => Number(el)), Number(input[2])));