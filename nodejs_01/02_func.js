const {odd, even} = require("./02_var");
//require("외부 파일명") : 외부파일을 요청하여 가져올 때 사용(노드의 내장 객체)

function chkOddOrEven(num){
    if(num % 2 == 1){
        return odd;
    }
    return even;
}
module.exports = chkOddOrEven;
//module : 패키화된 부분을 정의
//exports : 외부에서도 현재 코드를 방출하겠다는 의미