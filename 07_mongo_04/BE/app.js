const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/dbConnect");
const app = express();
const router = express.Router();
const port = 4000;
const {
  getAllBoardLists,
  createBoardItem,
  getBoardItem,
  updateBoardItem,
  deleteBoardItem,
} = require("./controllers/boardController");

app.use(cors());

dbConnect();

router.route("/").get((req, res) => {
  res.status(200).send("MainPage");
});

router
  .route("/board")
  //   .get((req, res) => {
  //     res.json({ success: true });
  //     res.status(200).send("BoardList");
  //     getAllBoardLists();
  //   })
  .get(getAllBoardLists)
  //   .post((req, res) => {
  //     res.status(200).send("BoardWrite");
  //   });
  .post(createBoardItem);

router
  .route("/board/:id")
  .get((req, res) => {
    // 상세 페이지 내용
    res.status(200).send(`BoardDetail-${id}`);
  })
  .put((req, res) => {
    // 상세 페이지 수정
    res.status(200).send(`BoardDetail-${id}`);
  })
  .delete((req, res) => {
    // 상세 페이지 삭제
    res.status(200).send(`BoardDetail-${id}`);
  });

app.use(router);

app.listen(port, () => {
  console.log(`${port}번 포트에서 서버 실행 중`);
});
