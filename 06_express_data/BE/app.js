const express = require("express");
const cors = require("cors");

const app = express();
const router = express.Router();
const port = 4000;

app.use(cors());

app.get("/novel/:title", (req, res) => {
  const { title } = req.params;

  if (title === "홍길동전") {
    res.json({ text: "아버지를 아버지라 부르지 못하고..." });
  } else if (title === "심청전") {
    res.json({ text: "아버지의 눈을 위해 바다에 몸을 던져..." });
  } else if (title === "구운몽") {
    res.json({ text: "인생은 꿈과 같고, 세상은 한낱 허상일 뿐..." });
  } else if (title === "춘향전") {
    res.json({ text: "이 몸이 죽고 죽어 일백 번 고쳐 죽어..." });
  } else {
    res.json({ text: "데이터가 존재하지 않습니다." });
  }
});

app.listen(port, () => {
  console.log(`${port}번 포트에서 서버 실행 중`);
});
