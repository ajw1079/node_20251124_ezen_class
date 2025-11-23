// 바디 파서 미들웨어 :서버로 요청을 보낼 때 요청 본문에 담긴 것을 파싱하는 미들웨어

/*
  - .json : JSON 형식의 본문을 파싱
  - .urlencoded : URL로 인코딩된 본문을 파싱
  - .raw : 가공되지 않은 바이너리 자료를 파싱
  - .text : 텍스트 형식의 본문을 파싱
*/

const http = require("http");
const express = require("express");

const app = express();
const router = express.Router();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // gs모듈을 사용해서 쿼리스트링을 해석

router
  .route("/board")
  .get((req, res) => {
    res.status(200).send("게시글 목록 리스트");
  })
  .post((req, res) => {
    console.log(req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
      return res.status(400).send("필수값이 입력되지 않았습니다.");
    }
    res.status(201).send("게시글 추가");
  });

app.use(router);

app.listen(port, () => {
  console.log(`${port}번 포트에서 서버 실행 중`);
});
// router.get()과 router.route().get()의 차이
// router.get() : 하나의 경로에 1씩 요청한다.
// router.route().get() : 하나의 경로에 여러가지 요청을 처리해야할 경우 사용

// http://localhost:4000/ 화면 확인

/*
body로 아래 json 파일을 요청할 것
{
  "name": "KIM",
  "email": "k111@gmail.com",
  "phone": "010-1234-5678" 
}
*/
