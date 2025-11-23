//09_crypto_02.js
//양방향 대칭형 암호화 : 암호화된 문자열을 복호화할 수 있음. key라는 값을 활용하여 복호화할 수 있음

const crypto = require("crypto");

/***암호화 과정***/
const cipher_test = crypto.createCipher("aes-256-cbc", "열쇠");  //양방향 암호화에서 암호화를 시키겠다는 의미
console.log(cipher_test);
let result_test_01 = cipher_test.update("abcdefghijklmnop123456", "utf-8", "base64"); 
//update("비밀번호가 되는 문자열", "최초의 인코딩 방식", "변경할 인코딩 방식(암호화된 기계어)")
console.log("암호화 된 문자열 : ", result_test_01);

result_test_01 += cipher_test.final("base64");  //최종 파일을 시스템에서 읽을 수 있는 방식으로 전달
console.log("암호화 결과 : ", result_test_01);

/***복호화 과정***/
const decipher_test = crypto.createDecipher("aes-256-cbc", "열쇠");
let result_test_02 = decipher_test.update(result_test_01, "base64", "utf-8");
console.log("복호화된 문자열 : ", result_test_02);
result_test_02 += decipher_test.final("utf-8");
console.log("복호화된 결과 : ", result_test_02);


//실제 입력값을 받아왔다면.. 고도화된 양방향 암호화
const alorithm = "aes-256-cbc";  //알고리즘의 key 값은 32byte의 문자개수인 32개로 맞춘다.
const key = "abcdefghijklmnopqrstuvwxyz123456";  //256bit => 32byte(알고리즘의 선언에 따른 byte값으로 계산)
const iv = "1234567890123456";  //iv(Initialization Vector) : 최초의 암호로 접근할 수 있는 관문 16byte(고정 byte)

const cipher = crypto.createCipheriv(alorithm, key, iv);  //암호화 과정
let result = cipher.update("홍길동 비밀번호", "utf-8", "base64");
result += cipher.final("base64");
console.log("암호화 : ", result);

const decipher = crypto.createDecipheriv(alorithm, key, iv);  //복호화 과정
let result2 = decipher.update(result, "base64", "utf-8");
result2 += decipher.final("utf-8");
console.log("복호화 : ", result2);
