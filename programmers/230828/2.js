// 금과 은 운반하기

// 어느 왕국에 하나 이상의 도시들이 있습니다. 왕국의 왕은 새 도시를 짓기로 결정하였습니다. 해당 도시를 짓기 위해서는 도시를 짓는 장소에 금 a kg과 은 b kg이 전달되어야 합니다.
// 각 도시에는 번호가 매겨져 있는데, i번 도시에는 금 g[i] kg, 은 s[i] kg, 그리고 트럭 한 대가 있습니다. i번 도시의 트럭은 오직 새 도시를 짓는 건설 장소와 i번 도시만을 왕복할 수 있으며, 편도로 이동하는 데 t[i] 시간이 걸리고, 최대 w[i] kg 광물을 운반할 수 있습니다. (광물은 금과 은입니다. 즉, 금과 은을 동시에 운반할 수 있습니다.) 모든 트럭은 같은 도로를 여러 번 왕복할 수 있으며 연료는 무한대라고 가정합니다.
// 정수 a, b와 정수 배열 g, s, w, t가 매개변수로 주어집니다. 주어진 정보를 바탕으로 각 도시의 트럭을 최적으로 운행했을 때, 새로운 도시를 건설하기 위해 금 a kg과 은 b kg을 전달할 수 있는 가장 빠른 시간을 구해 return 하도록 solution 함수를 완성해주세요.

function solution(a, b, g, s, w, t) {
  var answer = 10e5 * 4 * 10e9;

  let start = 0;
  let end = 10e5 * 4 * 10e9;
    
  while (start <= end) {

    let mid = Math.floor((start + end) / 2);
    let gold = 0;
    let silver = 0;
    let add = 0;
      
    for (let i = 0; i < s.length; i++) {

      let now_g = g[i];
      let now_s = s[i];
      let now_w = w[i];
      let now_t = t[i];
      let move_cnt = Math.floor(mid / (now_t * 2));

      if (mid % (now_t * 2) >= t[i]) {
        move_cnt++;
      }

      gold += (now_g < move_cnt * now_w) ? now_g : move_cnt * now_w;
      silver += (now_s < move_cnt * now_w) ? now_s : move_cnt * now_w;
      add += (now_g + now_s < move_cnt * now_w) ? now_g + now_s : move_cnt * now_w;

    }
       
    if (gold >= a && silver >= b && add >= a + b) {
      end = mid - 1;
      answer = Math.min(mid, answer);
    } else {
      start = mid + 1;
    }

  }

  return answer;
}

console.log(solution(10, 10, [100], [100], [7], [10])) // 50
console.log(solution(90, 500, [70,70,0], [0,0,500], [100,100,2], [4,8,1])) // 499