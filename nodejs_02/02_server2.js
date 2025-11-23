//02_server2.js
const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('./02_server2.html', (err, data) => {
        if(err){
            throw err;
        }
        res.write(data);  //데이터로써 가져온 HTML 문서를 서버의 화면에 작성을 하겠다는 의미
    });
}).listen(8081, () => {
    console.log('8081번 포트에서 서버가 대기중입니다.');
});