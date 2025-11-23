//14_fsDelete.js
//기존 14_folder_new 폴더 삭제

const fs = require("fs");

fs.rmdir("./14_folder_new", (err) => {
    if(err){
        throw err;
    }
    console.log("14_folder_new 라는 폴더가 삭제되었습니다.");
});

//기존 파일인 14_Delete.txt 을 삭제
fs.unlink("./14_fsDelete.txt", (err) => {
    if(err){
        throw err;
    }
    console.log("14_fsDelete.txt 라는 파일이 삭제되었습니다.");
});