// 매칭 점수

// 프렌즈 대학교 조교였던 제이지는 허드렛일만 시키는 네오 학과장님의 마수에서 벗어나, 카카오에 입사하게 되었다.
// 평소에 관심있어하던 검색에 마침 결원이 발생하여, 검색개발팀에 편입될 수 있었고, 대망의 첫 프로젝트를 맡게 되었다.
// 그 프로젝트는 검색어에 가장 잘 맞는 웹페이지를 보여주기 위해 아래와 같은 규칙으로 검색어에 대한 웹페이지의 매칭점수를 계산 하는 것이었다.
// 한 웹페이지에 대해서 기본점수, 외부 링크 수, 링크점수, 그리고 매칭점수를 구할 수 있다.
// 한 웹페이지의 기본점수는 해당 웹페이지의 텍스트 중, 검색어가 등장하는 횟수이다. (대소문자 무시)
// 한 웹페이지의 외부 링크 수는 해당 웹페이지에서 다른 외부 페이지로 연결된 링크의 개수이다.
// 한 웹페이지의 링크점수는 해당 웹페이지로 링크가 걸린 다른 웹페이지의 기본점수 ÷ 외부 링크 수의 총합이다.
// 한 웹페이지의 매칭점수는 기본점수와 링크점수의 합으로 계산한다.
// 예를 들어, 다음과 같이 A, B, C 세 개의 웹페이지가 있고, 검색어가 hi라고 하자.
// 이때 A 웹페이지의 매칭점수는 다음과 같이 계산할 수 있다.
// 기본 점수는 각 웹페이지에서 hi가 등장한 횟수이다.
// A,B,C 웹페이지의 기본점수는 각각 1점, 4점, 9점이다.
// 외부 링크수는 다른 웹페이지로 링크가 걸린 개수이다.
// A,B,C 웹페이지의 외부 링크 수는 각각 1점, 2점, 3점이다.
// A 웹페이지로 링크가 걸린 페이지는 B와 C가 있다.
// A 웹페이지의 링크점수는 B의 링크점수 2점(4 ÷ 2)과 C의 링크점수 3점(9 ÷ 3)을 더한 5점이 된다.
// 그러므로, A 웹페이지의 매칭점수는 기본점수 1점 + 링크점수 5점 = 6점이 된다.
// 검색어 word와 웹페이지의 HTML 목록인 pages가 주어졌을 때, 매칭점수가 가장 높은 웹페이지의 index를 구하라. 만약 그런 웹페이지가 여러 개라면 그중 번호가 가장 작은 것을 구하라.

function solution(word, pages) {
  var answer = 0;

  word = word.toLowerCase();

  let wordRegExp = /[\d|\W]/;
  let urlRegExp = /<a href="https:\S*"/gi;
  let url = "meta property";
  let pageInfo = new Map();
  let arr = [];

  pages.map( (el, idx) => {

    let pageArr = el.split("\n");
    let urlIdx = pageArr.findIndex( (el) => el.includes(url));
    let pageURL = pageArr[urlIdx].match(/"https:\S*"/gi)[0];
    let bodyStart = pageArr.findIndex( (el) => el.includes("<body>"));
    let bodyEnd = pageArr.findIndex( (el) => el.includes("</body>"));
    let body = pageArr.slice(bodyStart + 1, bodyEnd);
    let point = body.flatMap( (el) => el.toLowerCase().split(wordRegExp)).filter( (el) => el === word).length;
    let outLinks = body.flatMap( (el) => el.match(urlRegExp)).filter( (el) => el).map( (el) => el.slice(8, el.length));
    
    pageInfo.set(pageURL, { point, outLinks, idx, matchPoint : 0 });
  });

  for(let [key, value] of pageInfo) {

    let linkPoint = value.point / value.outLinks.length;
    
    for(let link of value.outLinks) {
      if(pageInfo.has(link)) {

        let origin = pageInfo.get(link);
        let calculatedPoint = origin.matchPoint ? origin.matchPoint + linkPoint : origin.point + linkPoint;

        pageInfo.set(link, { ...origin, matchPoint: calculatedPoint });
      }
    }
  }

  for(let [key, value] of pageInfo) {

    let { point, idx, matchPoint } = value;
    let finalPoint = matchPoint ? matchPoint : point;

    arr.push([idx, finalPoint]);
  };

  arr.sort( (a, b) => a[1] === b[1] ? a[0] - b[0] : b[1] - a[1]);

  answer = arr[0][0];

  return answer;
}

console.log(solution("blind", ["<html lang=\"ko\" xml:lang=\"ko\" xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta property=\"og:url\" content=\"https://a.com\"/>\n</head>  \n<body>\nBlind Lorem Blind ipsum dolor Blind test sit amet, consectetur adipiscing elit. \n<a href=\"https://b.com\"> Link to b </a>\n</body>\n</html>", "<html lang=\"ko\" xml:lang=\"ko\" xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta property=\"og:url\" content=\"https://b.com\"/>\n</head>  \n<body>\nSuspendisse potenti. Vivamus venenatis tellus non turpis bibendum, \n<a href=\"https://a.com\"> Link to a </a>\nblind sed congue urna varius. Suspendisse feugiat nisl ligula, quis malesuada felis hendrerit ut.\n<a href=\"https://c.com\"> Link to c </a>\n</body>\n</html>", "<html lang=\"ko\" xml:lang=\"ko\" xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta property=\"og:url\" content=\"https://c.com\"/>\n</head>  \n<body>\nUt condimentum urna at felis sodales rutrum. Sed dapibus cursus diam, non interdum nulla tempor nec. Phasellus rutrum enim at orci consectetu blind\n<a href=\"https://a.com\"> Link to a </a>\n</body>\n</html>"])) // 0
console.log(solution("Muzi", ["<html lang=\"ko\" xml:lang=\"ko\" xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta property=\"og:url\" content=\"https://careers.kakao.com/interview/list\"/>\n</head>  \n<body>\n<a href=\"https://programmers.co.kr/learn/courses/4673\"></a>#!MuziMuzi!)jayg07con&&\n\n</body>\n</html>", "<html lang=\"ko\" xml:lang=\"ko\" xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta property=\"og:url\" content=\"https://www.kakaocorp.com\"/>\n</head>  \n<body>\ncon%\tmuzI92apeach&2<a href=\"https://hashcode.co.kr/tos\"></a>\n\n\t^\n</body>\n</html>"])) // 1