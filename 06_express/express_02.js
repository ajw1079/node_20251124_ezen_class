const http = require("http");
const express = require("express");

const app = express();
const port = 4000;

app.get("/", (req, res) => {
    res.status(200);
    res.send("Hello Node!");
});

app.listen(port, () => {
    console.log(`${port}번 포트에서 서버 실행 중`);
})
// http://localhost:4000/ 화면 확인
