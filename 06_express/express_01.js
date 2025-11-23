const http = require("http") ;
const server = http.createServer((req, res) => {
    console.log("요청 발생~~!!!");
});
server.listen (4000 , () => {
    console.log("서버 실행 중");
});
// http://localhost:4000/ 화면 띄운다. -> 터미널 창에 "요청 발생~~!!!" 나오는지 확인