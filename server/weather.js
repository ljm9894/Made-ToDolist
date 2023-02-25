const API_KEY = "d5c8dc2216d354b851dd2305008047cf";

function onGeoOk(position){
    const lat = position.coords.latitude; //위도 찾기
    const lng = position.coords.longitude; // 경도찾기
    //console.log("your live in", lat,lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`//api url 가져오기
    fetch(url).then(response => response.json()).then(data=>{
        const weather = document.querySelector("#weather span:last-child");
        const city = document.querySelector("#weather span:first-child"); 
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main}/${Math.round(data.main.temp)}`;

    });
}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); //성공적으로 실행됐을 때 onGeoOk실행 아니면 onGeoError 실행
