//10_readFile.js

//fs(file system) 모듈은 파일 시스템으로 접근
//fs 모듈의 기능 : 파일 생성, 파일 삭제, 읽거나 쓸 수 있음. 폴더를 만들거나 삭제할 수 있음.
//웹브라우저에서 자바스크립트만을 가지고는 파일 시스템으로 접근하여 조작이 불가능

const fs = require("fs");
console.log(fs);

fs.readFile("./10_readFile.txt", (err, data) => {
    if(err){  //파일을 가져오는 과정에서 에러(파일명 오류, 파일의 손상)가 발생한다면
        throw err;
    }
    console.log(data);  //Buffer 는 시스템의 메모리 형태 데이터
    //<Buffer 31 30 5f 72 65 61 64 46 69 6c 65 2e 74 78 74 20 3a 20 ec 9d b4 ea b3 b3 ec 9d 80 20 ed 85 8d ec 8a a4 ed 8a b8 20 ed 8c 8c ec 9d bc ec 9d 98 20 eb 82 ... 31 more bytes>
    console.log(data.toString());  //Buffer 는 컴퓨터 내부에서만 인식할 수 있는 형태이기 때문에 읽기가 가능한 형태인 문자열로 변환시키겠다는 의미
    //10_readFile.txt : 이곳은 텍스트 파일의 내용을 읽는 공간입니다.
});
