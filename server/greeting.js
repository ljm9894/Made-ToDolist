const loginInput = document.querySelector("#for input"); //html 에서 for아이디에 input 받아오기
const loginForm = document.querySelector("#for"); //for 함수에 있는 모든 페이지 들고오기
const greeting = document.querySelector("#greeting"); //greeting id 찾고 가져오기 

const HIDDEN_CLASSNAME = "hidden"
const USER_NAME = "username"
const savedUsername = localStorage.getItem(USER_NAME);

function onLoginSubmit(event){
    event.preventDefault(); //자동 브라우저 실행 막기
    loginForm.classList.add(HIDDEN_CLASSNAME); //로그인폼에 'hidden' 클래스 추가
    const username = loginInput.value; //입력란 안에 값 저장
    localStorage.setItem(USER_NAME, username); //localStorage에 username 저장
    paintGreetings(); // paintGreetings 함수 실행
}

function paintGreetings(){
    const username = localStorage.getItem(USER_NAME);
    greeting.innerText = `Hello ${username}`; 
    greeting.classList.remove(HIDDEN_CLASSNAME); //hidden 클래스 삭제
}


if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
    //유저가 없을 때 form 보여주기
}else{
    paintGreetings();
    ///성공 페이지 보여주기
}
