//09_crypto_01.js
//비밀번호를 암호화하지 않을 경우  ===>  해킹의 대상
//단방향 암호화 : 복호화할 수 없는 암호 방식(복호화 : 한번 암호화된 문자열을 원래의 문자열로 돌려놓는다)
//단방향 암호화에서는 알고리즘(구조 또는 뼈대)을 해시방식으로 사용
//해시기법이란 어떤 고정된 길이의 문자열을 다른 수의 문자열로 변경하는 방식
//예를들어 abcdef라는 문자열을 qwsa로 변경하는 방식이고, ghijkl이라는 문자열을 zvfhtrsl5p로 문자열을 변경시킴

const crypto = require("crypto");  //암호화와 관련한 내장객체
console.log(crypto);
console.log("base64 - sha512 : ", crypto.createHash("sha512").update("나는 비밀번호야12").digest("base64"));
console.log("base64 - sha256 : ", crypto.createHash("sha256").update("나는 비밀번호야12").digest("base64"));
console.log("hex : ", crypto.createHash("sha512").update("나는 비밀번호야12").digest("hex"));
console.log("latin1 : ", crypto.createHash("sha512").update("나는 비밀번호야12").digest("latin1"));


//createHash(알고리즘) : 해시기법을 사용하겠다는 선언. 사용할 당시 알고리즘(구조화)을 인자값으로 선언. 알고리즘 방식 md5, sha1, sha256, sha512 등이 선언 가능. md5, sha1은 이미 취약점이 발견되어서 현재는 사용하지 않는 방식. sha256, sha512를 선호하는 편
//sha : Secure Hash Algorithm) : 안전한 해시 알고리즘

/*[sha256 vs sha512]
(8bit = 1byte)
256bit = 32byte / 512bit = 64byte  문자열의 개수변환 차이를 보임
*/
//update(문자열 또는 변수명) : 변환할 문자열을 넣어줌
//digest(인코딩 방식) : 인코딩할 알고리즘을 넣어줌. base64, hex, latin1이 주로 사용. base64가 가장 짧은 문자열을 갖고 있어서 주로 사용

const myPw_test = "abcdef123456";  //입력상자로부터 받아온 값(post 방식)
const crypto_pw = crypto.createHash("sha512").update(myPw_test).digest("base64");
console.log(crypto_pw);

