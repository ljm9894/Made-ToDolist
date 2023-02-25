//시계 

const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date(); //날짜 함수 받아오기
    //padStart()는 지정해놓은 문자열을 길게 만들어야할 때 사용됨
    const hours = String(date.getHours()).padStart(2,"0"); 
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours} : ${minutes} : ${second}` 
}

getClock(); 
setInterval(getClock, 1000); // 1초 후에 getClock이 실행된다(자동갱신)