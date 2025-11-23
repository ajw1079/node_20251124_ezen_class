//14_fsCreate.js
//fs 모듈을 이용하여 폴더 만들기

const fs = require("fs");
fs.mkdir("./14_folder", (err) => {
    if(err){
        throw err;
    }
    console.log("14_folder 라는 새로운 폴더가 생성되었습니다.");
});
const writeStream = fs.createWriteStream("./14_folder/14_createFile.txt");
writeStream.write("첫번째 문장 작성 \n");
writeStream.end();

