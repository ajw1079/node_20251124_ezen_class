//13_pipe.js
//물이 관(pipe)을 타고서 흐르듯이 데이터가 흐르도록 구성
//13_pipe_text_01.txt의 내부 테이터를 신규로 만들 파일인 13_pipe_text_02.txt로 기존의 데이터를 담을 수 있도록 구성

const fs = require("fs");

const readStream = fs.createReadStream("./13_pipe_text_01.txt");
//console.log(readStream);
const writeStream = fs.createWriteStream("./13_pipe_text_02.txt");

readStream.pipe(writeStream);

