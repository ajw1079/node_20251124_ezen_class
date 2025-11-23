//15_copyFile.js
//파일의 복사 또는 복제. 기존에 붙여넣기를 할 대상이 존재하지 않다면 생성하여 진행
//15_copyfile1.txt 안의 내용을 15_copyfile2.txt를 생성할수도 있고 기존에 존재한다면 내용을 복사하여 붙여넣기를 진행한다.

const fs = require("fs");
fs.copyFile("./15_copyfile1.txt", "15_copyfile2.txt", (err) => {
    if(err){
        throw err;
    }
    console.log("복제 완료");
});