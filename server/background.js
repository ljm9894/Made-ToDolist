const images = [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg"
];

const ChoiceImage = images[Math.floor(Math.random()*images.length)]; //사진 랜덤으로 뽑기
 
const bgImage = document.createElement("img"); //document에 img Element 추가

bgImage.src = `img/${ChoiceImage}`;
 
document.body.appendChild(bgImage); // appendChild() : body에 html을 추가하는 함수