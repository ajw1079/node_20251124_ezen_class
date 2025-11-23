//console도 global 객체 안에 포함
//console 객체를 통해서 디버깅 작업 수행이 가능(디버깅 : 코딩상에서 발생하는 에러 또는 작업에 대한 소요시간 및 요소를 측정하여 보다 신속하게 처리할 수 있는 코딩이 되기 위한 작업도구)

//console.time("레이블") : console.timeEnd("레이블") 대응하면 레이블 영역의 진행시간을 측정하는 것도 가능

console.time("현재 도달까지의 시간");
const string = "abc";
const number = 1;
const obj = {
    outside : {
        inside : {
            key : "red"
        }
    }
}
console.timeEnd("현재 도달까지의 시간");

console.time("시간측정");  //시간측정의 시작

for(let i = 0; i < 100000; i++){}

console.timeEnd("시간측정");  //시간측정의 종료

//console.error(에러내용) : 에러내용에 대한 부분을 콘솔에 표시할 때 사용
console.error("에러메시지는 console.error에 담아주세요");
//console.error(z);

//console.trace("레이블") : 에러가 발생한 부분을 추적할 수 있는 기능. 정확한 위치가 추적이 되지 않는 경우 사용

function b(){
    //c();
    console.trace("에러 위치 추적");
}
function a(){
    b();
}
a();

console.table([{name:"홍길동", birth:1994}, {name:"홍영길", birth:1992}]);
