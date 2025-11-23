//03_clientEvent.js
//클라이언트가 웹서버에 요청할 때 발생하는 이벤트 처리하기

//웹브라우저가 웹서버에 접속을 한 후 데이터를 요청하면 그 때마다 적절한 이벤트가 발생하게되는데, 각 이벤트의 상황에 맞춰서 콜백함수를 등록
//[서버에서 사용할 수 있는 주요 이벤트]
// - connection : 클라이언트가 접속하여 연결이 구성될 때 발생하는 이벤트
// - request : 클라이언트가 요청할 때 발생하는 이벤트
// - close : 서버를 종료할 때 발생하는 이벤트

const http = require('http');

//#1. 웹서버의 객체를 구성
const server = http.createServer();
console.log(server);

//#2. 웹서버를 시작하여 3000번 포트에서 대기 설정
const port = 3000;

server.listen(port, () => {
    console.log(port + "에서 웹서버가 대기중입니다.");
});

//#3. 클라이언트와 연결 이벤트 처리
server.on('connection', (socket) => {
    console.log(socket);
    
    const addr = socket.address();
    console.log(addr);  //{ address: '::1', family: 'IPv6', port: 3000 }
    console.log('클라이언트 접속 : ', addr.address, addr.port);  //클라이언트 접속 :  ::1 3000
});

//#4. 클라이언트의 요청 이벤트 처리
server.on('request', (req, res) => {
    console.log('클라이언트의 요청이 들어왔습니다.');

    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    res.write('<!DOCTYPE html>');
    res.write('<html>');
    res.write(' <head>');
    res.write('     <title>응답에 대한 요청 페이지</title>');
    res.write(' </head>');
    res.write(' <body>');
    res.write('     <h1>노드로부터 응답 페이지</h1>');
    res.write(' </body>');
    res.write('</html>');
    res.end();
});

//#5. 서버의 종료 이벤트 처리
server.on('close', () => {
    console.log('서버가 종료되었습니다.');
});

//터미널 창에서  Taskkill /IM node.exe /F ==> 현재 실행되는 모든 노드 파일을 종료시켜라

