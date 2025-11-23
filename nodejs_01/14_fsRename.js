//14_fsRename.js
//기존 폴더명인 14_folder를 새로운 폴더명인 14_folder_old로 변경

const fs = require("fs");

fs.rename("./14_folder", "./14_folder_old", (err) => {
    if(err){
        throw err;
    }
    console.log("폴더명이 지정한 이름으로 변경되었습니다.");
});