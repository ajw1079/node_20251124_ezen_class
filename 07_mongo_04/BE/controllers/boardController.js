const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const uri = process.env.DB_CONNECT;
const client = new MongoClient(uri);

require("dotenv").config();
const asyncHandler = require("express-async-handler");

const getAllBoardLists = async (req, res) => {
  // 전체 게시판 리스트 가져오기
  console.log("getAllBoardLists 실행");
  // res.status(200).json({ page: "전체 게시판 리스트" });
  async function findDocuments(collectionName, query = {}) {
    try {
      await client.connect();
      const db = client.db(process.env.DB_NAME);
      const document = await db.collection(collectionName).find({}).toArray();
      res.json(document);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }
  findDocuments(process.env.DB_COLLECTION, {});
};

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
