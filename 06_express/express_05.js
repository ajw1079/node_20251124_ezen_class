// 미들웨어 : 요청과 응답 중간에서 여러가지 역할을 부여할 수 있음

// 미들웨어의 역할

/*
  - 요청 전처리 : 요청이 서버에 도착 하기 전 실행하는 작업을 담당. 예를 들어 사용자인증이나 폼 내용 검증 등의 작업을 처리
  - 라우팅 처리 : 지금까지 특정 URL로 들어온 요청을 미리 만들어 둔 함수(라우트 핸들러)로 연결. 이런 라우트 코드를 좀 더 읽기 쉽고 관리하기 쉽도록 모듈화 하는 라우터 미들웨어도 있음
  - 응답 처리 : 서버에서 클라이언트로 응답을 보낼 때 자료를 적절한 형태로 변환 하거나 오류를 처리하는 작업 진행
*/

const http = require("http");
const express = require("express");

const app = express();
const router = express.Router();
const port = 4000;

app.get("/", (req, res) => {
  res.status(200);
  res.send("메인 화면");
});

/*
// 게시글 목록 리스트
router.get("/board", (req, res) => {
  res.status(200).send("게시글 목록 리스트");
});

// 게시글 추가하기
router.post("/board", (req, res) => {
  res.status(201).send("게시글 추가"); // 자료가 만들어진 상태 201
});
*/
router
  .route("/board")
  .get((req, res) => {
    res.status(200).send("게시글 목록 리스트");
  })
  .post((req, res) => {
    res.status(201).send("게시글 추가");
  });

/*
// 게시글 상세화면
router.get("/board/:id", (req, res) => {
  res.status(200).send(`게시글 ${req.params.id}번 상세 화면`);
});

// 게시글 상세수정
router.put("/board/:id", (req, res) => {
  res.status(200).send(`게시글 ${req.params.id}번 상세 수정`);
});

// 게시글 상세 삭제
router.delete("/board/:id", (req, res) => {
  res.status(200).send(`게시글 ${req.params.id}번 상세 삭제`);
});
*/
router
  .route("/board/:id")
  .get((req, res) => {
    res.status(200).send(`게시글 ${req.params.id}번 상세 화면`);
  })
  .put((req, res) => {
    res.status(200).send(`게시글 ${req.params.id}번 상세 수정`);
  })
  .delete((req, res) => {
    res.status(200).send(`게시글 ${req.params.id}번 상세 삭제`);
  });

app.use(router); // app.use() 함수는 어플리케이션에서 실행할 미들웨어를 등록할 때 사용. [형식] app.use([경로 ],미들웨어)

app.listen(port, () => {
  console.log(`${port}번 포트에서 서버 실행 중`);
});
// router.get()과 router.route().get()의 차이
// router.get() : 하나의 경로에 1씩 요청한다.
// router.route().get() : 하나의 경로에 여러가지 요청을 처리해야할 경우 사용

// http://localhost:4000/ 화면 확인
