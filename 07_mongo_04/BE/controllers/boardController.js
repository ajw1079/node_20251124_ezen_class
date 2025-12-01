const asyncHandler = require("express-async-handler");

const getAllBoardLists = asyncHandler(async (req, res) => {
  // 전체 게시판 리스트 가져오기
  res.status(200).json({ page: "전체 게시판 리스트" });
});

const createBoardItem = asyncHandler(async (req, res) => {
  res.status(200).send("신규 게시판 작성");
});

const getBoardItem = asyncHandler(async (req, res) => {
  res.status(200).send("게시판 상세 화면 내용");
});

const updateBoardItem = asyncHandler(async (req, res) => {
  res.status(200).send("게시판 상세 화면 수정");
});

const deleteBoardItem = asyncHandler(async (req, res) => {
  res.status(200).send("게시판 상세 화면 삭제");
});

module.exports = {
  getAllBoardLists,
  createBoardItem,
  getBoardItem,
  updateBoardItem,
  deleteBoardItem,
};
