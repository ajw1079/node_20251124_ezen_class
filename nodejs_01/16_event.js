//16_event.js
//노드에서는 이벤트를 기반으로 대부분 비동기 방식으로 처리 -> jQuery에서 Ajax
//비동기 방식으로 처리하기 위해서는 서로 이벤트를 전달
//예를들어, 어떤 함수를 실행한 결과물도 이벤트를 통해 전달되어지는 부분(클릭, 마우스, 키보드, 스크롤, 리사이즈, 로드)
//이벤트는 한 쪽에서 다른 쪽으로 알림 메시지를 보내는 것과 유사한 형태를 띔(휴대폰에서 "나의 위치는 어느 장소에 있다" 정보를 알려주는 것과 동일)

//이벤트를 보내고 받을 수 있도록 EventEmmiter라는 것을 제공

/*
    [이벤트를 보내고 받을 수 있도록 하는 객체들]
     - 노드의 객체는 EventEmmiter를 상속 받을 수 있으며, 상속 후에는 EventEmmiter 객체의 on() 메서드와 emit() 메서드를 사용할 수 있음. (on() 메서드 :  등록 및 연결, emit() 메서드 : 이벤트를 전달)

     - on(이벤트명, 콜백함수) : 이벤트 이름과 이벤트 발생시 콜백함수를 연결 -> 이벤트 리스너
     - addListener(이벤트명, 콜백함수) : on() 메서드와 동일한 기능

     - emit(이벤트명) : 이벤트를 호출하는 메서드. 이벤트 이름을 인자값으로 넣어주면 미리 등록했던 콜백함수가 실행을 진행할 수 있음

     - once(이벤트명, 콜백) : 한번만 실행하는 이벤트. 지정한 콜백은 추가로 지정되지만 한번만 실행하고 그 이후의 콜백은 자동으로 제거

*/
const EventEmmiter = require("events");  //events 라는 모듈은 함수를 동반한 class 인자
//console.log(EventEmmiter);

const myEvent = new EventEmmiter();
//console.log(myEvent);
/*
    [두 가지의 클릭 이벤트 차이점 - 문서의 로딩시점을 기준으로 분류]
    $(".txt").click(function(){

    });
    - 문서를 로딩하는 과정에서 html 구문에 ".txt"라른 이름을 갖고 있는 요소가 존재할 때, 주체는 ".txt"를 찾아간다. 이벤트가 발생하는 곳을 국한시킴

    $(document).on("click", ".txt", function(){

    });
    - 문서를 로딩하는 과정에서 html 구문에 ".txt"라른 이름을 갖고 있는 요소가 존재하지 않은 경우이지만, javascript를 통해서 구문이 생성되었다면.... 주체는 문서(document) 이지만 클릭한 시점에서 ".txt"라는 이름을 갖고 있는 요소를 찾아간다. 이벤트 발생하는 곳을 문서의 전체 면적(DOM)으로 대기시킴
*/

//이벤트가 들어오기까지 대기 인자(메모리)
myEvent.addListener('event1', () => {
    console.log('이벤트1');
});
//이벤트를 호출하는 기능
myEvent.emit('event1');

//이벤트가 들어오기까지 대기 인자(메모리)
myEvent.on('event2', () => {
    console.log('이벤트2');
});
myEvent.on('event2', () => {
    console.log('이벤트2 추가');
});
myEvent.emit('event2');  //복수의 함수문으로 접근하여 호출이 가능
myEvent.emit('event2');
//본래 자바스크립트에서는 함수문을 호출하는 과정에서 호출되는 함수문은 하나만 있어야 호출상에서 에러발생이 없음. 노드에서는 이벤트를 연결하는 과정에서 emit() 메서드를 활용했다면 중복하여 함수문으로 접근 할 수 있음
/*
[순수 자바스크립트에서는...]
function func(){
    실행문1
}
function func(){
    실행문2
}
func();  //실행문1번 실행시키는데... 에러발생
*/

myEvent.once('event3', () => {
    console.log('이벤트3');
});
myEvent.emit('event3');
myEvent.emit('event3');  //한번 더 호출시 위에 선언된 once() 메서드로 1회만 호출 ==> 두번째 호출문에서는 결과값이 나올 수 없음

//이벤트의 제거(removeAllListeners() - 부분 삭제? 또는 전체 삭제)
myEvent.on('event4', () => {
    console.log('이벤트4');
});
myEvent.removeAllListeners('event4');  //event4에 대한 영역만 삭제
myEvent.emit('event4');  //결과값 없음

myEvent.emit('event2');  //이벤트 리스너인 event2로 접근

myEvent.removeAllListeners();  //위에서 선언된 모든 이벤트 삭제
myEvent.emit('event1');  //결과값 없음
myEvent.emit('event2');  //결과값 없음

//이벤트 삭제(removeListener() : 부분삭제만 가능)
const listener = () => {
    console.log('이벤트5');
}
myEvent.on('event5', listener);
myEvent.emit('event5');  //결과값 존재

myEvent.removeListener('event5', listener);  //removeListener는 이벤트명과 내부 대상을 동시에 작성하여 콜백 부분까지 제거되도록 구성  
myEvent.emit('event5');  //결과값 없음

//이벤트를 실행할 수 있는 구성(등록된 이벤트)의 개수
myEvent.on('event6', () => {
    console.log('이벤트 6-1');
});
myEvent.on('event6', () => {
    console.log('이벤트 6-2');
});
myEvent.on('event6', () => {
    console.log('이벤트 6-3');
});
console.log("이벤트 등록의 전체 개수 : ", myEvent.listenerCount('event6'));   //앞서 등록된 이벤트 리스너의 개수를 가져온다. 




/*
    [자바스크립트] bind() : 이벤트의 묶음  ==>  사라짐  ==>  on("이벤트1 이벤트2")
    [제이쿼리] on("이벤트")  ===>  DOM을 대기시킨다.
    =====> 이벤트의 영향을 넓히기 위해서 사용0


    [노드 이벤트] on()  ==>  이벤트의 등록     

    [자바스크립]
    요소를 지정한 선택자.addEventListener('이벤트명', function(){

    })  ==>  등록과 실행을 동시에 진행하겠다는 의미
*/




