//01_server1.js
const http = require("http");  //URL 통신을 하게 해주는 내장객체(모듈)
//console.log(http);
/*
    '403': 'Forbidden'  --->  유효값 없음(허용되지 못한 값)
    '404': 'not found'  --->  파일 없음
    '500': 'Internal Server Error'   --->  서버에러 발생
*/

http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"});  //응답을 보낼헤더를 먼저 구축
    //(meta 태그에 의한 환경설정 - 인코딩 파트)
    //res.writeHead(statusCode, object) - 200이라는 상태코드(statusCode) 의미 : ok를 의미(정상적으로 답변(response)을 받았다는 것을 의미)
    res.write('<h1>Hello Node~~!!</h1>');  //응답 본문(<body>)에 데이터를 작성
    res.write('<p>처음으로 만나는 노드 서버의 세계1</p>'); 
    res.write('<p>처음으로 만나는 노드 서버의 세계2</p>'); 
}).listen(3000, () => {   //특정한 포드 번호를 지정
    console.log('3000번 포트에서 서버 대기중입니다.');
});
/*
    [http 모듈을 활용한 서버 구축 방법]
    1. 터미널 창에서 "node 파일명"을 실행시킨다.
    2. url 창에 "localhost:지정한 포트번호" 입력후 엔터  -->  서버화면 구동
    3. 서버 종료시 터미널 창에서 Ctrl + C 라는 키보드를 누른다. 
*/

/*
    [기 지정된 포트 번호]
    21 - ftp(File Transfer Protocol)
    161 - SNMP(Simple Network Management Protocol)
    3306 - mySQL 기본포트 (3306 ~ 3308)
    8000 - appache
    21017 - NoSQL 기본포트
*/






