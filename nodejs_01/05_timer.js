//05_timer.js
//[타이머 기능을 갖고 있는 함수] : global 객체 안에 포함됨
//setInterval(콜백함수, 밀리초) : 부여된 밀리초마다 콜백함수를 반복적으로 실행
//setTimeout(콜백함수, 밀리초) : 부여된 밀리초 이후 콜백함수를 한번만 실행
//setImmediate(콜백함수) : 콜백함수를 즉시 실행

//[참조변수를 반환하여 타이머를 취소할 수 있는 메서드]
//clearInterval(참조변수)
//clearTimeout(참조변수)
//clearImmediate(참조변수)

const {setInterval, clearInterval, setTimeout, clearTimeout, setImmediate, clearImmediate} = require("timers");

const timeout = setTimeout(() => {
    console.log("1.5초 후 실행");
}, 1500);

const interval = setInterval(() => {
    console.log("1초마다 실행");
}, 1000);

const timeout2 = setTimeout(() => {
    console.log("실행되지 않은 공간");
}, 4000);

setTimeout(() => {
    clearInterval(interval);
    clearTimeout(timeout2);
}, 3000);


const immediate = setImmediate(() =>{
    console.log("즉시실행");
});

const immediate2 = setImmediate(() =>{
    console.log("즉시실행 안됨");
});
clearImmediate(immediate2);  //최우선자로 적용