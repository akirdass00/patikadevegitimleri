
//prompt isim giriş
const user = prompt("Lütfen adınızı girin.")
//prompta yazılanı ekrana getirir.
let userName = document.querySelector("#userName").innerText = user
//saat
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML =  h +":"  + m + ":"   +s;
    setTimeout(startTime, 1000);
}
function checkTime(i){
    if(i <10) {i ="0" + i};
    return i;
}
//günler
const weekday = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

const d = new Date();
let day = weekday[d.getDay()];
document.getElementById("days").innerHTML = day;