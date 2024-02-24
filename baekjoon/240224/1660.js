// 캡틴 이다솜은 자신의 해적선에 적을 공격하기 위한 대포알을 많이 보관해 놓는다. 다솜이는 미적감각이 뛰어나기 때문에, 대포알은 반드시 사면체 모양으로 쌓아놓아야 한다고 생각한다. 사면체를 만드는 방법은 길이가 N인 정삼각형 모양을 만든다. 그 위에 길이가 N-1인 정삼각형 모양을 얹고 그위에 계속 해서 얹어서 1크기의 정삼각형 모양을 얹으면 된다.
// 예를 들어, 사이즈가 3크기의 한 더미 모양은 다음과 같다.
//   X

//   X
//  X X

//   X
//  X X
// X X X
// 각각의 삼각형은 1, 3, 6, 10 ,..... 와 같이 대포알을 가지고 있다. 따라서 완벽하게 쌓았을 때, 한 사면체에는 1, 4, 10, 20 ,.... 개를 가지고 있을 것이다.
// 현재 다솜이의 해적선에 대포알이 N개가 있다. 다솜이는 영식이를 시켜서 사면체를 만들게 하고 싶다. 영식이는 물론 하기 싫지만 어쩔수 없이 다솜이가 시키는대로 사면체를 가능한 최소 개수 만큼 만들려고 한다. N개의 대포알로 만들 수 있는 사면체의 최소 개수를 출력하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim();

function solution(N) {

  let num = 0;
  let i = 1;
  let arr = [];
  let newArr = new Array(N + 1).fill(Number.MAX_SAFE_INTEGER);

  while (N > num) {
    num += (i * (i + 1)) / 2;
    arr.push(num);
    i++;
  }

  for (let i = 1; i <= N; i++) {
    for (let j = 0; j < arr.length; j++) {

      let num = arr[j];

      if (num === i) {
        newArr[i] = 1;

        break;
      } else if (num > i) {
        break;
      }

      newArr[i] = Math.min(newArr[i], 1 + newArr[i - num]);

    }
  }

  return newArr[N];
}

console.log(solution(Number(input)));
