//11_writeFile.js
const fs = require("fs");
fs.writeFile("./11_writeMe.txt", "이곳은 글을 작성한 공간입니다. 그리고, 본 글은 추가로 생성된 파일입니다.", (err) => {
    if(err){
        throw err;
    }
    console.log("작성완료");
    fs.readFile("./11_writeMe.txt", (err, data) => {
        if(err){
            throw err;
        }
        console.log(data.toString());
    })
});