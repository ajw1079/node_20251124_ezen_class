//12_createWriteStream.js
//기존에 없던 파일(12_createWriteStream.txt)을 생성하면서 단계별로 내부에 글을 작성할 수 있게끔 구성. 사후에도 추가가 가능하도록 구성할 예정

const fs = require("fs");

const writeStream = fs.createWriteStream("./12_createWriteStream.txt");
//createWriteStream("생성할 파일명") : 기존에 존재하지 않은 파일을 생성한다.
console.log("파일 생성 완료!!");
writeStream.on("finish", () => {
    console.log("파일 생성 및 쓰기 완료");
});
//write() ~ end()의 의미
/*
    write() : 무언가를 작성하라는 메서드
    end() : 작성을 종료하라라는 메서드
*/ 
writeStream.write("첫번째 문장 작성입니다. \n");
writeStream.write("두번째 문장 작성입니다. \n");
writeStream.write("세번째 문장 작성입니다. \n");

writeStream.end();  //마지막에 위치 시킴으로써 더 이상 생성되는 파트가 진행되지 못하도록 종료 선언

//writeStream.write("네번째 문장 작성입니다. \n");