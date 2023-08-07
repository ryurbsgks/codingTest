// 선입 선출 스케줄링

// 처리해야 할 동일한 작업이 n 개가 있고, 이를 처리하기 위한 CPU가 있습니다.
// 이 CPU는 다음과 같은 특징이 있습니다.
// CPU에는 여러 개의 코어가 있고, 코어별로 한 작업을 처리하는 시간이 다릅니다.
// 한 코어에서 작업이 끝나면 작업이 없는 코어가 바로 다음 작업을 수행합니다.
// 2개 이상의 코어가 남을 경우 앞의 코어부터 작업을 처리 합니다.
// 처리해야 될 작업의 개수 n과, 각 코어의 처리시간이 담긴 배열 cores 가 매개변수로 주어질 때, 마지막 작업을 처리하는 코어의 번호를 return 하는 solution 함수를 완성해주세요.

function solution(n, cores) {

  let left = 0
  let right = Math.ceil(1 / cores.reduce( (acc, cur) => acc + 1 / cur, 0)) * n;
  
  if (n < cores.length) {
    return n;
  }
  
  let works;
  
  while (left <= right) {

    let mid = Math.floor((left + right) / 2);
      
    works = cores.reduce( (acc, cur) => acc + 1 + Math.floor(mid / cur), 0);

    if (works < n) {
      left = mid + 1;
    } else{
      right = mid - 1;
    }
  }
  
  let runTime = left - 1;

  works = cores.reduce( (acc, cur) => acc + 1 + Math.floor(runTime / cur), 0);

  for (let i = 0; i < cores.length; i++) {
      
    let core = cores[i];

    if ((runTime + 1) % core === 0) {
      works++;

      if (works === n) {
        return i + 1;
      }
    }   
  }

}

console.log(solution(6, [1,2,3])) // 2