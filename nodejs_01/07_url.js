//07_url.js
//인터넷 주소 정보를 보다 쉽게 획득하고 조작할 수 있도록 도와주는 모듈
const url = require("url");  //url 모듈 : 주소정보에 대한 획득을 가능하게 함
//console.log(url);

const URL = url.URL;
console.log(URL);  //인스턴스 메모리 공간을 갖고 있는 class 인자 [class URL]
const myURL = new URL("https://movie.naver.com/movie/bi/mi/mediaView.nhn?code=187310&mid=48527#tab");
console.log("url 정보 분해된 상태 : ", myURL);
console.log("분해된 url 정보를 조립 : ", url.format(myURL));

//세부항목의 값을 가져올 때 searchParams 키(내부 객체)를 활용
console.log("영화 코드번호 가져오기 : ", myURL.searchParams.get("code"));
console.log("영화 영상번호 가져오기 : ", myURL.searchParams.get("mid"));
console.log("url 내 해당항목의 유무를 판단 : ", myURL.searchParams.has("front"));
console.log("url 내 key 들을 반환 : ", myURL.searchParams.keys());
console.log("url 내 value 들을 반환 : ", myURL.searchParams.values());

//세부항목의 값을 설정 또는 생성
myURL.searchParams.set("ajw", "안재욱");  //주소창으로부터 받아온 상세항목에 새로운 내용을 추가
myURL.searchParams.set("code", "123456");  //기존에 존재하던 세부항목의 값을 변경
myURL.searchParams.set("mid", "98765");  //기존에 존재하던 세부항목의 값을 변경
console.log("변환된 주소의 상세 내용 보기 : ", myURL.searchParams);

console.log("분해된 url 정보를 조립 : ", url.format(myURL));
//https://movie.naver.com/movie/bi/mi/mediaView.nhn?code=123456&mid=98765&ajw=%EC%95%88%EC%9E%AC%EC%9A%B1#tab
