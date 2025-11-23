//04_clientEventIMG.js
//http 모듈로 웹서버를 구축 + 이미지 파일을 읽어서 응담으로 전송하기

const http = require('http');
const fs = require('fs');
//#1. 웹서버의 객체를 구성
const server = http.createServer();

//#2. 웹서버를 시작하여 3001번 포트에서 대기 설정
const port = 3001;
server.listen(port, () => {
    console.log(port + '에서 웹서버가 대기중입니다.');
});

//#3. 클라이언트와 연결 이벤트 처리
server.on('connection', (socket) => {
    console.log('클라이언트로 접속했습니다.');
});

//#4. 클라이언트의 요청 이벤트 처리
server.on('request', (req, res) => {
    console.log("클라이언트의 요청이 들어왔습니다.");

    const filename = './img/ball.png';
    fs.readFile(filename, (err, data) => {
        res.writeHead(200, {"Content-Type" : "image/png"});
        res.write(data);  //응답 본문에 데이터를 구현하겠다는 의미
        res.end();  //최종적으로 데이터 전송이 완료됨을 선언
    });
});

//#5. 서버의 종료 이벤트 처리
server.on('close', () => {
    console.log('서버가 종료되었습니다.');
});

