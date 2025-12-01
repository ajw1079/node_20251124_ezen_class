const express = require("express");
const dbConnect = require("./config/dbConnect");
const app = express();

dbConnect(); //DB 접속

//메인 화면
app.get("/", (req, res) => {
  res.send("Hello Node!");
});

//바디파서 미들웨어 등록
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//라우터 파일
// app.use("/contacts", require("./routes/contactRoutes"))

app.listen(4000, () => {
  console.log("서버 실행중");
});
