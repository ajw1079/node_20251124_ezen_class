// 요청 객체의 주요 속성
/*
  - req.body : 서버로 POST 요청할 때 넘겨준 정보를 담고 있음. 예를 들어 로그인 버튼을 눌렀을 때 사용자의 아이디와 비밀번호의 값이 req.body 에 들어 있음
  - req.cookies : 클라이언트에 저장된 쿠키 정보를 서버로 함께 넘겼을 경우 쿠키 정보를 담고 있음
  - req.headers : 서버로 요청을 보낼 때 같이 보낸 헤더 정보를 담고 있음
  - req.params : URL 뒤에 라우트 파라미터가 포함되어 있을 경우 파라미터 정보를 담고 있음
  - req.query : 요청 URL에 포함된 질의 매개 변수(쿼리, query)를 담고 있습니다. 예를들어 검색 사이트에서 검색어를 입력 하고 [ 검색 ] 버튼 을 클릭 했을 때 검색어와 관련된 질의 매개변수가 req.query 에 담김
*/

// 응답 객체의 주요 속성
/*
  - res.download : 파일을 내려 받음
  - res.end : 응답 프로세스를 종료
  - res.json : JSON 응답을 전송
  - res.jsonp : JSONP 지원을 통해 JSON 응답을 전송
  - res.redirect : 요청 경로를 재지정해서 강제로 이동 (URL)
  - res.render : 뷰 템플릿을 화면에 렌더링함
  - res.send : 어떤 유형이든 괄호안의 내용을 전송
  - res.sendFile : 지정한 경로의 파일을 읽어서 내용을 전송
  - res.sendStatus : 상태 메시지와 함께 HTTP 상태 코드를 전송
  - res.status : 응답 상태 코드를 설정
*/

const http = require("http");
const express = require("express");

const app = express();
const port = 4000;

// [ request ]
/*
app.get("/", (req, res) => {
  const headers = req.headers;
  res.send("headers : ", headers);
});

app.get("/add", (req, res) => {
  const headers = req.headers;
  res.send("headers_add : ", headers);
});
*/
// 페이지의 상태를 체크함

// [ response ]
app.get("/", (req, res) => {
  res.status(200);
  // res.send("화면응답 - TEXT");
  res.json({ message: "화면응답 - JSON" });
});

app.get("/file_move", (req, res) => {
  res.sendFile(__dirname + "/assets/file.html"); // 텍스트가 아닌 유형의 파일인 .html 형식을 화면에 띄운다.
});

app.listen(port, () => {
  console.log(`${port}번 포트에서 서버 실행 중`);
});
// http://localhost:4000/ 화면 확인
