//08_queryString.js
const url = require("url");  //노드에서 제공하는 객체. 주소정보를 활용하겠다는 선언
const querystring = require("querystring");  //노드에서 제공하는 객체. 주소정보 중에서 "?"를 기준으로 우측 정보들을 갖고 있는 부분만 선택하겠다는 선언

const parseUrl = url.parse("https://movie.naver.com/movie/bi/mi/mediaView.nhn?code=187310&mid=48527#tab");
console.log(parseUrl);
const query = querystring.parse(parseUrl.query);
console.log("querystring.parse() : ", query);
console.log("querystring.parse() 중에서 code 정보만을 반환 : ", query.code);

console.log("분해된 정보들을 다시 조립 : ", querystring.stringify(query));