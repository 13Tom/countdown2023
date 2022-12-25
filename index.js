const dia = document.getElementById("days");
const hora = document.getElementById("hora");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

const newYear = "1 jan 2023";

function countdown(){

    const newyears = new Date(newYear)
    const currentDate = new Date();

    const totalSeconds = (newyears-currentDate) / 1000;
    const dias = Math.floor(totalSeconds/3600/24);
    const horas = Math.floor(totalSeconds/3600) % 24;
    const minutos = Math.floor(totalSeconds / 60) % 60;
    const segundos = Math.floor(totalSeconds) %60;

    dia.textContent = dias;
    hora.textContent = formatTime(horas);
    min.textContent = formatTime(minutos);
    sec.textContent = formatTime(segundos);
    
};

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}
countdown();
setInterval(countdown,1000)

function fletconfeite(){
    const elemento = document.getElementById("AnoNovo")
    party.confetti(elemento)
}

setInterval(()=>{
    fletconfeite()
},1000)