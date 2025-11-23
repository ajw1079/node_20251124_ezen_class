const http = require("http");
const express = require("express");

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.status(200);
  res.send("Hello Node!");
});

// 게시글 목록 리스트
app.get("/board", (req, res) => {
  res.status(200).send("게시글 목록 리스트");
});

// 게시글 추가하기
app.post("/board", (req, res) => {
  res.status(201).send("게시글 추가"); // 자료가 만들어진 상태 201
});

// 게시글 상세화면
app.get("/board/:id", (req, res) => {
  res.status(200).send(`게시글 ${req.params.id}번 상세 화면`);
});

// 게시글 상세수정
app.put("/board/:id", (req, res) => {
  res.status(200).send(`게시글 ${req.params.id}번 상세 수정`);
});

// 게시글 상세 삭제
app.delete("/board/:id", (req, res) => {
  res.status(200).send(`게시글 ${req.params.id}번 상세 삭제`);
});

app.listen(port, () => {
  console.log(`${port}번 포트에서 서버 실행 중`);
});
// http://localhost:4000/ 화면 확인
